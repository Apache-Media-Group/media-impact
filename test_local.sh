#!/bin/bash

# Script de Testeo Local - LLYC Intelligence Dashboard
# Este script levanta el backend y el frontend para validación local.

echo "🚀 Iniciando entorno de testeo local..."

# 1. Configuración del Backend
echo "📦 Configurando Backend (puerto 8080)..."
cd backend

if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

source venv/bin/activate
pip install -r requirements.txt --quiet

if [ ! -f ".env" ]; then
    echo "⚠️ ADVERTENCIA: No se encontró el archivo backend/.env"
    echo "Copiando plantilla base..."
    echo "GOOGLE_CLOUD_PROJECT=media-impact-llyc\nGEMINI_API_KEY=tu_api_key_aqui" > .env
fi

# Iniciar backend en segundo plano
uvicorn main:app --host 127.0.0.1 --port 8080 > ../backend.log 2>&1 &
BACKEND_PID=$!
echo "✅ Backend corriendo en http://localhost:8080 (PID: $BACKEND_PID)"

# 2. Configuración del Frontend
echo "🎨 Configurando Frontend (puerto 3000)..."
cd ../frontend/public

# Iniciar servidor estático en segundo plano
python3 -m http.server 3000 > ../../frontend.log 2>&1 &
FRONTEND_PID=$!
echo "✅ Frontend corriendo en http://localhost:3000 (PID: $FRONTEND_PID)"

echo "--------------------------------------------------------"
echo "✅ TODO LISTO: Abre http://localhost:3000 en tu navegador"
echo "Para detener los servidores, usa: kill $BACKEND_PID $FRONTEND_PID"
echo "Los logs están disponibles en backend.log y frontend.log"
echo "--------------------------------------------------------"

# Mantener el script vivo para que no se cierren los procesos hijos inmediatamente si se corre en terminal
wait
