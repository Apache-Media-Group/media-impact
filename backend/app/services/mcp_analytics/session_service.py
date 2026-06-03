import os
import sqlite3
import json
import logging
from datetime import datetime, timedelta
from typing import Optional, Dict, Any

logger = logging.getLogger(__name__)
# Usar /tmp en Cloud Run para persistencia efímera pero escritura permitida
DB_PATH = "/tmp/ga4_history.db" if os.getenv("K_SERVICE") or os.getenv("ENVIRONMENT") == "production" else "ga4_history.db"

class SessionService:
    def __init__(self):
        self._init_db()

    def _init_db(self):
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS sessions (
                    session_id TEXT PRIMARY KEY,
                    data TEXT NOT NULL,
                    created_at TEXT,
                    expires_at TEXT
                )
            """)
            conn.commit()

    def save_session(self, session_id: str, data: Dict[str, Any], ttl_seconds: int = 86400):
        # Aumentar TTL a 24h para evitar expiraciones prematuras durante debug
        now = datetime.utcnow()
        expires_at = now + timedelta(seconds=ttl_seconds)
        try:
            with sqlite3.connect(DB_PATH) as conn:
                cursor = conn.cursor()
                cursor.execute("""
                    INSERT OR REPLACE INTO sessions (session_id, data, created_at, expires_at)
                    VALUES (?, ?, ?, ?)
                """, (session_id, json.dumps(data), now.isoformat(), expires_at.isoformat()))
                conn.commit()
                print(f"DEBUG: Session saved: {session_id}, expires: {expires_at.isoformat()}")
                logger.info(f"✅ Session saved: {session_id}")
        except Exception as e:
            logger.error(f"❌ Error saving session {session_id}: {e}")

    def get_session(self, session_id: str) -> Optional[Dict[str, Any]]:
        now = datetime.utcnow().isoformat()
        try:
            with sqlite3.connect(DB_PATH) as conn:
                cursor = conn.cursor()
                # Debug: Log all active sessions
                cursor.execute("SELECT session_id, expires_at FROM sessions")
                active = cursor.fetchall()
                print(f"DEBUG: Active sessions in DB: {len(active)}")
                
                cursor.execute("SELECT data FROM sessions WHERE session_id = ? AND expires_at > ?", (session_id, now))
                row = cursor.fetchone()
                if row:
                    print(f"DEBUG: Session found: {session_id}")
                    logger.info(f"✅ Session found: {session_id}")
                    return json.loads(row[0])
                
                print(f"DEBUG: Session NOT found or expired: {session_id}")
                logger.warning(f"⚠️ Session NOT found or expired: {session_id}")
                return None
        except Exception as e:
            logger.error(f"❌ Error getting session {session_id}: {e}")
            return None

    def delete_session(self, session_id: str):
        try:
            with sqlite3.connect(DB_PATH) as conn:
                cursor = conn.cursor()
                cursor.execute("DELETE FROM sessions WHERE session_id = ?", (session_id,))
                conn.commit()
        except Exception as e:
            logger.error(f"Error deleting session {session_id}: {e}")

session_service = SessionService()
