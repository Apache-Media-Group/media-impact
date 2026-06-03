import os
from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    PROJECT_ID: str = os.getenv("GOOGLE_CLOUD_PROJECT", "media-impact-llyc")
    GEMINI_API_KEY: Optional[str] = os.getenv("GEMINI_API_KEY")
    GOOGLE_CLIENT_ID: Optional[str] = os.getenv("GOOGLE_CLIENT_ID")
    GOOGLE_CLIENT_SECRET: Optional[str] = os.getenv("GOOGLE_CLIENT_SECRET")
    GOOGLE_REDIRECT_URI: Optional[str] = os.getenv("GOOGLE_REDIRECT_URI")
    
    # Auth
    SECRET_KEY: str = os.getenv("SECRET_KEY", "super-secret-key-for-local-dev")
    
    class Config:
        env_file = ".env"

settings = Settings()
