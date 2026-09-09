#!/usr/bin/env python3
"""
scripts/setup_orchestrator_scheduler.py

Aprovisiona el ÚNICO Cloud Scheduler horario en Google Cloud Platform
y elimina los schedulers individuales por cliente que hayan quedado obsoletos.

Uso:
    python3 scripts/setup_orchestrator_scheduler.py [--dry-run] [--region europe-west1]
"""

import os
import sys
import argparse
import logging
from google.cloud import scheduler_v1
from google.protobuf import duration_pb2

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")
logger = logging.getLogger("setup_scheduler")

DEFAULT_PROJECT = os.getenv("GCP_PROJECT_ID", "llyc-ai-first-core")
DEFAULT_REGION = os.getenv("GCP_REGION", "europe-west1")
DEFAULT_TARGET_URL = (
    os.getenv("CLOUD_RUN_SERVICE_URL")
    or "https://llyc-intelligence-api-qm35p5kpgq-ew.a.run.app/media-impact/api/v1/mcp-analytics/orchestrator/tick"
)


def setup_orchestrator_scheduler(project_id: str, location_id: str, target_url: str, dry_run: bool = False):
    client = scheduler_v1.CloudSchedulerClient()
    parent = f"projects/{project_id}/locations/{location_id}"
    logger.info(f"🔍 Conectando a GCP Cloud Scheduler en '{parent}'...")

    # 1. Escanear y limpiar jobs obsoletos por inquilino
    try:
        logger.info("📋 Inspeccionando jobs existentes en Cloud Scheduler...")
        existing_jobs = list(client.list_jobs(parent=parent))
        logger.info(f"Se encontraron {len(existing_jobs)} jobs en {location_id}.")

        for job in existing_jobs:
            job_name = job.name.split("/")[-1]
            # Detectar jobs individuales antiguos
            if (job_name.startswith("mcp-analytics-") or job_name.startswith("mcp-etl-")) and job_name != "mcp-etl-hourly-orchestrator":
                logger.info(f"🗑️ Detectado scheduler individual obsoleto: '{job_name}'")
                if not dry_run:
                    try:
                        client.delete_job(name=job.name)
                        logger.info(f"   ✅ Job obsoleto '{job_name}' eliminado.")
                    except Exception as de:
                        logger.warning(f"   ⚠️ No se pudo eliminar '{job_name}': {de}")
                else:
                    logger.info(f"   [DRY-RUN] Se eliminaría '{job_name}'.")

    except Exception as e:
        logger.warning(f"No se pudo listar/limpiar jobs obsoletos: {e}")

    # 2. Configurar el Job Centralizado
    job_id = "mcp-etl-hourly-orchestrator"
    job_full_path = f"{parent}/jobs/{job_id}"

    cron_secret = os.getenv("CRON_SECRET") or os.getenv("SECRET_KEY") or f"mcp-scheduler-{project_id}"
    headers = {
        "Content-Type": "application/json",
        "X-CloudScheduler": "true",
        "X-Cron-Secret": cron_secret
    }

    job_spec = scheduler_v1.Job(
        name=job_full_path,
        description="LLYC MCP Centralized ETL Orchestrator - Single Hourly Heartbeat Worker",
        http_target=scheduler_v1.HttpTarget(
            uri=target_url,
            http_method=scheduler_v1.HttpMethod.POST,
            headers=headers,
            body=b'{"source": "hourly-cloud-scheduler"}'
        ),
        schedule="0 * * * *",  # Minuto 0 de cada hora
        time_zone="UTC",
        attempt_deadline=duration_pb2.Duration(seconds=1500)  # 25 minutos estricto
    )

    logger.info(f"⚙️ Configurando job centralizado: '{job_id}'")
    logger.info(f"   - Frecuencia: 0 * * * * (Cada hora)")
    logger.info(f"   - Target: {target_url}")
    logger.info(f"   - Attempt Deadline: 1500 segundos (25 min)")

    if dry_run:
        logger.info("✨ [DRY-RUN] Finalizado sin realizar modificaciones en GCP.")
        return

    try:
        client.update_job(job=job_spec)
        logger.info(f"✅ Job centralizado '{job_id}' actualizado con éxito en GCP.")
    except Exception:
        try:
            client.create_job(parent=parent, job=job_spec)
            logger.info(f"✅ Job centralizado '{job_id}' creado con éxito en GCP.")
        except Exception as ce:
            logger.error(f"❌ Error al crear/actualizar job centralizado en GCP: {ce}")
            raise ce


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Aprovisionar Cloud Scheduler centralizado de ETL")
    parser.add_argument("--project", default=DEFAULT_PROJECT, help="GCP Project ID")
    parser.add_argument("--region", default=DEFAULT_REGION, help="GCP Region (ej. europe-west1)")
    parser.add_argument("--url", default=DEFAULT_TARGET_URL, help="Target URL de Cloud Run")
    parser.add_argument("--dry-run", action="store_true", help="Simular sin aplicar cambios")

    args = parser.parse_args()
    setup_orchestrator_scheduler(
        project_id=args.project,
        location_id=args.region,
        target_url=args.url,
        dry_run=args.dry_run
    )
