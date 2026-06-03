"""Servicio para gestionar el historial de consultas de la herramienta.

Este servicio utiliza SQLite para almacenar de forma persistente las consultas 
realizadas por los usuarios, las respuestas generadas y metadata asociada 
(cuenta, propiedad, tiempo de ejecución).
"""

import sqlite3
import json
import logging
import os
from datetime import datetime
from typing import List, Dict, Any, Optional

logger = logging.getLogger(__name__)

class QueryHistoryService:
    def __init__(self, db_path: Optional[str] = None):
        if db_path is None:
            # Default path based on environment
            if os.getenv("K_SERVICE") or os.getenv("ENVIRONMENT") == "production":
                db_path = "/tmp/history.db"
            else:
                db_path = "database/history.db"
        
        self.db_path = db_path
        self._init_db()

    def _init_db(self):
        """Inicializa la base de datos y crea las tablas si no existen."""
        # Asegurar que el directorio existe
        os.makedirs(os.path.dirname(self.db_path), exist_ok=True)
        
        try:
            with sqlite3.connect(self.db_path) as conn:
                cursor = conn.cursor()
                cursor.execute("""
                    CREATE TABLE IF NOT EXISTS query_history (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
                        user_email TEXT,
                        account_id TEXT,
                        property_id TEXT,
                        query_text TEXT,
                        response_summary TEXT,
                        full_response_json TEXT,
                        execution_time_ms INTEGER,
                        status TEXT,
                        error_message TEXT
                    )
                """)
                # Índices para mejorar rendimiento de búsqueda
                cursor.execute("CREATE INDEX IF NOT EXISTS idx_account ON query_history(account_id)")
                cursor.execute("CREATE INDEX IF NOT EXISTS idx_property ON query_history(property_id)")
                cursor.execute("CREATE INDEX IF NOT EXISTS idx_timestamp ON query_history(timestamp)")
                conn.commit()
        except sqlite3.Error as e:
            logger.error(f"Error inicializando base de datos de historial: {e}")

    def log_query(
        self,
        user_email: str,
        query_text: str,
        account_id: Optional[str] = None,
        property_id: Optional[str] = None,
        response_data: Optional[Dict[str, Any]] = None,
        execution_time_ms: int = 0,
        status: str = "success",
        error_message: Optional[str] = None
    ) -> int:
        """Registra una nueva consulta en el historial."""
        
        response_summary = ""
        full_response_json = "{}"
        
        if response_data:
            # Intentar extraer un resumen amigable
            if isinstance(response_data, dict):
                # Estrategia de extracción de resumen robusta
                msg = response_data.get("message")
                summary = response_data.get("summary")
                
                if msg:
                    response_summary = str(msg)
                elif summary:
                    # Si summary es un dict (estadisticas), convertir a string
                    response_summary = str(summary)
                else:
                    response_summary = ""
                
                response_summary = response_summary[:500]
                full_response_json = json.dumps(response_data)
            else:
                response_summary = str(response_data)[:500]

        try:
            with sqlite3.connect(self.db_path) as conn:
                cursor = conn.cursor()
                cursor.execute("""
                    INSERT INTO query_history (
                        user_email, account_id, property_id, query_text, 
                        response_summary, full_response_json, execution_time_ms, 
                        status, error_message
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
                """, (
                    user_email, account_id, property_id, query_text,
                    response_summary, full_response_json, execution_time_ms,
                    status, error_message
                ))
                conn.commit()
                return cursor.lastrowid
        except sqlite3.Error as e:
            logger.error(f"Error guardando consulta en historial: {e}")
            return -1

    def get_history(
        self,
        account_id: Optional[str] = None,
        property_id: Optional[str] = None,
        user_email: Optional[str] = None,
        limit: int = 50,
        offset: int = 0
    ) -> List[Dict[str, Any]]:
        """Recupera el historial filtrado."""
        
        query = "SELECT * FROM query_history WHERE 1=1"
        params = []
        
        if account_id:
            query += " AND account_id = ?"
            params.append(account_id)
        if property_id:
            query += " AND property_id = ?"
            params.append(property_id)
        if user_email:
            query += " AND user_email = ?"
            params.append(user_email)
            
        query += " ORDER BY timestamp DESC LIMIT ? OFFSET ?"
        params.extend([limit, offset])

        try:
            with sqlite3.connect(self.db_path) as conn:
                conn.row_factory = sqlite3.Row
                cursor = conn.cursor()
                cursor.execute(query, params)
                rows = cursor.fetchall()
                
                result = []
                for row in rows:
                    item = dict(row)
                    # Parsear el JSON de vuelta para la respuesta completa
                    try:
                        item["full_response_json"] = json.loads(item["full_response_json"])
                    except:
                        pass
                    result.append(item)
                return result
        except sqlite3.Error as e:
            logger.error(f"Error recuperando historial: {e}")
            return []

    def get_stats(self) -> Dict[str, Any]:
        """Obtiene estadísticas básicas de uso."""
        try:
            with sqlite3.connect(self.db_path) as conn:
                cursor = conn.cursor()
                cursor.execute("SELECT COUNT(*) FROM query_history")
                total_queries = cursor.fetchone()[0]
                
                cursor.execute("SELECT COUNT(DISTINCT user_email) FROM query_history")
                total_users = cursor.fetchone()[0]
                
                cursor.execute("SELECT AVG(execution_time_ms) FROM query_history WHERE status = 'success'")
                avg_time = cursor.fetchone()[0] or 0
                
                return {
                    "total_queries": total_queries,
                    "total_users": total_users,
                    "avg_execution_time_ms": round(avg_time, 2)
                }
        except sqlite3.Error as e:
            logger.error(f"Error obteniendo estadísticas: {e}")
            return {}
