# backend/main.py - LLYC Intelligence Dashboard FastAPI Backend (GCP Cloud Run Deploy)
import os
import logging
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="LLYC Intelligence Dashboard API")

# Configure CORS
# In production, this defaults to the strict domain. In local dev, we inject localhost via env vars.
cors_origins_env = os.getenv("CORS_ALLOWED_ORIGINS", "https://dashboard.llyc.global")
origins_list = [origin.strip() for origin in cors_origins_env.split(",") if origin.strip()]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Import and include routers
from app.services.mcp_analytics.endpoints import router as mcp_router

# Mount MCP routes: /api/v1 for backwards compatibility, /media-impact/api/v1 to prevent collisions with other modules (e.g. 'campaign')
app.include_router(mcp_router, prefix="/api/v1/mcp-analytics", tags=["MCP Analytics"])
app.include_router(mcp_router, prefix="/media-impact/api/v1/mcp-analytics", tags=["MCP Analytics"])

# Setup static files directory path
STATIC_DIR = os.path.join(os.path.dirname(__file__), "app", "static", "media-impact")

# Serve assets folder statically
assets_dir = os.path.join(STATIC_DIR, "assets")
if os.path.exists(assets_dir):
    app.mount("/media-impact/assets", StaticFiles(directory=assets_dir), name="media_impact_assets")
    logger.info(f"Mounted static assets from: {assets_dir}")

@app.get("/media-impact/{path:path}")
async def serve_media_impact_catchall(request: Request, path: str):
    # Validar que la ruta resuelta no intente escapar del directorio estático
    resolved_path = os.path.abspath(os.path.join(STATIC_DIR, path))
    static_root = os.path.abspath(STATIC_DIR)

    # Si la ruta apunta a un archivo estático físico legítimo dentro de STATIC_DIR
    if resolved_path.startswith(static_root) and os.path.exists(resolved_path) and os.path.isfile(resolved_path):
        return FileResponse(resolved_path)

    # Si es una petición de API fallida, no servir el HTML de la SPA para evitar errores de tipo MIME
    if path.startswith("api/"):
        raise HTTPException(status_code=404, detail="API endpoint not found")

    # Para cualquier otra ruta o subpath de cliente (ej: /media-impact/, /media-impact/sanitas), servir la index.html de la SPA
    spa_html = os.path.join(STATIC_DIR, "index.html")
    if os.path.exists(spa_html):
        return FileResponse(spa_html)
    
    raise HTTPException(status_code=404, detail="Media Impact Dashboard SPA index.html not found")

@app.get("/")
@app.get("/health")
async def root():
    return {"message": "LLYC Intelligence Dashboard API is running", "status": "healthy", "version": "2.4.0"}

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    uvicorn.run(app, host="0.0.0.0", port=port)

