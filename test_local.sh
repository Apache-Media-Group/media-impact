#!/bin/bash

# Script de Testeo Local - LLYC Intelligence Dashboard (MIGRADO A REACT)
# Este script levanta el backend (FastAPI) y el frontend (Vite/React).

echo "🚀 Iniciando entorno de testeo local (React Version)..."

# Matar procesos existentes en los puertos 8080 y 3000
echo "🧹 Limpiando procesos antiguos en puertos 8080 y 3000..."
lsof -i :8080 -t | xargs kill -9 2>/dev/null || true
lsof -i :3000 -t | xargs kill -9 2>/dev/null || true

# 1. Configuración del Backend
echo "📦 Configurando Backend (puerto 8080)..."
cd backend

# --- Verificación de Autenticación GCP ---
echo "🔐 Verificando autenticación en GCP..."
ACTIVE_ACCOUNT=$(gcloud config get-value account 2>/dev/null || echo "")
if [[ "$ACTIVE_ACCOUNT" != *"@llyc.global" ]] && [[ "$ACTIVE_ACCOUNT" != *"@llyc.ai" ]]; then
    echo "⚠️ Tu cuenta activa de GCP ($ACTIVE_ACCOUNT) no pertenece a @llyc.global o @llyc.ai"
    echo "🔑 Iniciando proceso de login en gcloud..."
    gcloud auth login
    gcloud auth application-default login
else
    echo "✅ Autenticado en GCP como: $ACTIVE_ACCOUNT"
    # Verificar que el token de ADC esté vigente
    if ! gcloud auth application-default print-access-token &>/dev/null; then
        echo "⚠️ Application Default Credentials (ADC) expiradas o no encontradas. Autenticando..."
        gcloud auth application-default login
    fi
fi

ACTIVE_PROJECT=$(gcloud config get-value project 2>/dev/null || echo "llyc-ai-first-core")
echo "✅ Proyecto GCP activo: $ACTIVE_PROJECT"

# Exportamos explícitamente la Service Account de pruebas para que la API tenga permisos de lectura
export GOOGLE_APPLICATION_CREDENTIALS="/Users/santiagorovira/media_impact/media-impact-test-keys.json"
export GCP_PROJECT_ID="$ACTIVE_PROJECT"
export GOOGLE_CLOUD_PROJECT="$ACTIVE_PROJECT"
# -----------------------------------------

if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

source venv/bin/activate
pip install -r requirements.txt --quiet

if [ ! -f ".env" ]; then
    echo "⚠️ ADVERTENCIA: No se encontró el archivo backend/.env"
    echo "Copiando plantilla base dinámica..."
    printf "GCP_PROJECT_ID=$ACTIVE_PROJECT\nGOOGLE_CLOUD_PROJECT=$ACTIVE_PROJECT\nGEMINI_API_KEY=tu_api_key_aqui\nCORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000,http://localhost:5173\n" > .env
else
    # Restaurar la configuración de credenciales a la Service Account de pruebas si estaba comentada
    sed -i '' 's/^#GOOGLE_APPLICATION_CREDENTIALS=/GOOGLE_APPLICATION_CREDENTIALS=/g' .env 2>/dev/null || true
    
    # Asegurar que CORS_ALLOWED_ORIGINS esté configurado para el entorno local
    if ! grep -q "CORS_ALLOWED_ORIGINS" .env; then
        echo "CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000,http://localhost:5173" >> .env
    fi
fi

# Iniciar backend en segundo plano
uvicorn main:app --host 127.0.0.1 --port 8080 --env-file .env > ../backend.log 2>&1 &
BACKEND_PID=$!
echo "✅ Backend corriendo en http://localhost:8080 (PID: $BACKEND_PID)"

# 2. Configuración del Frontend
echo "⚛️ Configurando Frontend React (puerto 3000)..."
cd ../frontend

# Asegurar dependencias
if [ ! -d "node_modules" ]; then
    echo "Installing frontend dependencies..."
    npm install --silent
fi

# Iniciar servidor de desarrollo Vite en segundo plano
npm run dev > ../frontend.log 2>&1 &
FRONTEND_PID=$!
echo "✅ Frontend React corriendo en http://localhost:3000 (PID: $FRONTEND_PID)"

echo "--------------------------------------------------------"
echo "✅ TODO LISTO: Abre http://localhost:3000 en tu navegador"
echo "Para detener los servidores, usa: kill $BACKEND_PID $FRONTEND_PID"
echo "Los logs están disponibles en backend.log y frontend.log"
echo "--------------------------------------------------------"
echo "📋 Imprimiendo logs en tiempo real (Backend = azul, Frontend = amarillo)..."
echo "Pulsa CTRL+C para detener los servidores y salir."
echo "--------------------------------------------------------"

# Capturar las señales de salida para limpiar los procesos correctamente
trap "kill $BACKEND_PID $FRONTEND_PID; exit" SIGINT SIGTERM

# Mostrar ambos logs en tiempo real
tail -f ../backend.log ../frontend.log &
TAIL_PID=$!

# Esperar a que el usuario presione CTRL+C
wait $TAIL_PID
