"""Gestor de Notificaciones - Alertas por Email.

Sistema para notificar a stakeholders cuando el sistema aprende nuevas reglas.
Utiliza SendGrid o SMTP según configuración.
"""

import os
import logging
from typing import Optional, Dict, Any, List
from datetime import datetime

logger = logging.getLogger(__name__)


class NotificationManager:
    """
    Gestor de notificaciones para cambios en reglas aprendidas.
    
    Envía emails a cesar.diez@llyc.global cuando se aceptan nuevas reglas.
    """
    
    def __init__(self):
        """Inicializa el gestor de notificaciones."""
        self.recipient_email = "cesar.diez@llyc.global"
        self.sender_email = os.getenv("SENDER_EMAIL", "noreply@llyc.global")
        self.sendgrid_api_key = os.getenv("SENDGRID_API_KEY")
        self.smtp_server = os.getenv("SMTP_SERVER")
        self.smtp_port = int(os.getenv("SMTP_PORT", "587"))
        self.smtp_user = os.getenv("SMTP_USER")
        self.smtp_password = os.getenv("SMTP_PASSWORD")
        
        # Detectar qué método usar
        self.use_sendgrid = bool(self.sendgrid_api_key)
        self.use_smtp = bool(self.smtp_server and self.smtp_user and self.smtp_password)
        
        if not self.use_sendgrid and not self.use_smtp:
            logger.warning("No email credentials found. Notifications will be logged only.")
    
    async def notify_rule_accepted(
        self,
        rule_id: str,
        rule_description: str,
        original_feedback: str,
        reasoning: str,
        confidence: float,
    ) -> bool:
        """
        Notifica que se ha aceptado una nueva regla.
        
        Args:
            rule_id: ID de la regla
            rule_description: Descripción clara de la regla
            original_feedback: El feedback que generó la regla
            reasoning: Explicación del Judge
            confidence: Nivel de confianza (0-1)
        
        Returns:
            True si el email fue enviado exitosamente
        """
        subject = f"🎓 Nueva Regla Aprendida: {rule_description[:50]}"
        html_content = self._build_html_email(
            rule_id=rule_id,
            rule_description=rule_description,
            original_feedback=original_feedback,
            reasoning=reasoning,
            confidence=confidence,
            verdict_type="ACCEPTED"
        )
        
        return await self._send_email(subject, html_content)
    
    async def notify_rule_rejected(
        self,
        rule_id: str,
        original_feedback: str,
        reasoning: str,
    ) -> bool:
        """
        Notifica que se ha rechazado un feedback.
        
        Args:
            rule_id: ID de la evaluación
            original_feedback: El feedback que fue rechazado
            reasoning: Explicación del rechazo
        
        Returns:
            True si el email fue enviado exitosamente
        """
        subject = f"❌ Feedback Rechazado: {original_feedback[:50]}"
        html_content = self._build_html_email(
            rule_id=rule_id,
            rule_description="N/A",
            original_feedback=original_feedback,
            reasoning=reasoning,
            confidence=0.0,
            verdict_type="REJECTED"
        )
        
        return await self._send_email(subject, html_content)
    
    def _build_html_email(
        self,
        rule_id: str,
        rule_description: str,
        original_feedback: str,
        reasoning: str,
        confidence: float,
        verdict_type: str,
    ) -> str:
        """Construye el HTML del email."""
        
        verdict_badge = "🎓 ACEPTADO" if verdict_type == "ACCEPTED" else "❌ RECHAZADO"
        verdict_color = "#28a745" if verdict_type == "ACCEPTED" else "#dc3545"
        
        timestamp = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")
        
        html = f"""
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {{ font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }}
        .container {{ max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5; }}
        .header {{ background-color: {verdict_color}; color: white; padding: 20px; border-radius: 5px 5px 0 0; }}
        .content {{ background-color: white; padding: 20px; border-radius: 0 0 5px 5px; }}
        .rule-box {{ background-color: #f0f8ff; padding: 15px; border-left: 4px solid {verdict_color}; margin: 15px 0; }}
        .feedback-box {{ background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 15px 0; }}
        .reasoning-box {{ background-color: #e8f5e9; padding: 15px; border-left: 4px solid #4caf50; margin: 15px 0; }}
        .metadata {{ font-size: 12px; color: #666; margin-top: 20px; padding-top: 15px; border-top: 1px solid #ddd; }}
        .confidence-bar {{
            width: 100%;
            height: 20px;
            background-color: #ddd;
            border-radius: 10px;
            overflow: hidden;
            margin: 10px 0;
        }}
        .confidence-fill {{
            height: 100%;
            background-color: {verdict_color};
            width: {confidence * 100:.0f}%;
            transition: width 0.3s ease;
        }}
        h2 {{ color: {verdict_color}; margin: 0; }}
        code {{ background-color: #f4f4f4; padding: 2px 6px; border-radius: 3px; font-family: 'Courier New'; }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0;">{verdict_badge}</h1>
            <p style="margin: 5px 0 0 0; font-size: 14px;">Evaluación de Feedback del Sistema de Aprendizaje</p>
        </div>
        
        <div class="content">
            <h2>Detalles de la Evaluación</h2>
            
            <div class="rule-box">
                <strong>ID de Regla:</strong> <code>{rule_id}</code><br>
                <strong>Estado:</strong> {verdict_badge}<br>
                <strong>Confianza:</strong> {confidence:.1%}
                <div class="confidence-bar">
                    <div class="confidence-fill"></div>
                </div>
            </div>
            
            {f'<div class="rule-box"><strong>📋 Descripción de la Regla:</strong><br>{rule_description}</div>' if verdict_type == "ACCEPTED" else ''}
            
            <div class="feedback-box">
                <strong>📝 Feedback Original del Usuario:</strong><br>
                "{original_feedback}"
            </div>
            
            <div class="reasoning-box">
                <strong>🔬 Razonamiento del Evaluador:</strong><br>
                {reasoning}
            </div>
            
            <div class="metadata">
                <strong>Información Técnica:</strong><br>
                Timestamp: {timestamp}<br>
                Sistema: Critical Learning System (CLS)<br>
                Versión: 1.0<br>
                <br>
                <em>Este email fue generado automáticamente por el sistema de aprendizaje. 
                No responder a este email. Para preguntas, contacta con el equipo técnico.</em>
            </div>
        </div>
    </div>
</body>
</html>
"""
        return html
    
    async def _send_email(self, subject: str, html_content: str) -> bool:
        """
        Envía el email usando el backend disponible.
        
        Args:
            subject: Asunto del email
            html_content: Contenido HTML
        
        Returns:
            True si fue exitoso
        """
        if self.use_sendgrid:
            return await self._send_via_sendgrid(subject, html_content)
        elif self.use_smtp:
            return await self._send_via_smtp(subject, html_content)
        else:
            # Fallback: solo loguear
            logger.warning(f"Email no enviado (credenciales no configuradas): {subject}")
            return False
    
    async def _send_via_sendgrid(self, subject: str, html_content: str) -> bool:
        """Envía email usando SendGrid API."""
        try:
            from sendgrid import SendGridAPIClient
            from sendgrid.helpers.mail import Mail, Email, To, Content
            
            mail = Mail(
                from_email=Email(self.sender_email),
                to_emails=To(self.recipient_email),
                subject=subject,
                html_content=html_content
            )
            
            sg = SendGridAPIClient(self.sendgrid_api_key)
            response = sg.send(mail)
            
            if response.status_code in [200, 201, 202]:
                logger.info(f"Email enviado exitosamente a {self.recipient_email}")
                return True
            else:
                logger.error(f"Error enviando email: {response.status_code}")
                return False
        
        except Exception as e:
            logger.error(f"Error enviando email vía SendGrid: {e}")
            return False
    
    async def _send_via_smtp(self, subject: str, html_content: str) -> bool:
        """Envía email usando SMTP."""
        try:
            import smtplib
            from email.mime.text import MIMEText
            from email.mime.multipart import MIMEMultipart
            
            msg = MIMEMultipart("alternative")
            msg["Subject"] = subject
            msg["From"] = self.sender_email
            msg["To"] = self.recipient_email
            
            html_part = MIMEText(html_content, "html")
            msg.attach(html_part)
            
            with smtplib.SMTP(self.smtp_server, self.smtp_port) as server:
                server.starttls()
                server.login(self.smtp_user, self.smtp_password)
                server.sendmail(self.sender_email, self.recipient_email, msg.as_string())
            
            logger.info(f"Email enviado exitosamente a {self.recipient_email}")
            return True
        
        except Exception as e:
            logger.error(f"Error enviando email vía SMTP: {e}")
            return False
