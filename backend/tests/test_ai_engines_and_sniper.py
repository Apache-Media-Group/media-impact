import pytest
from app.services.mcp_analytics.calculation_service import CalculationService

def test_sniper_score_with_and_without_conversions():
    # Con conversiones (debe tener bono de 70)
    score_conv = CalculationService.calculate_sniper_score(conversions=1, avg_duration=60, pages_per_session=2.0)
    assert 70.0 <= score_conv <= 100.0

    # Sin conversiones (Sanitas en Adobe)
    score_no_conv = CalculationService.calculate_sniper_score(conversions=0, avg_duration=60, pages_per_session=2.0)
    assert 0.0 < score_no_conv < 70.0

    # Duración 0 y páginas 0
    score_zero = CalculationService.calculate_sniper_score(conversions=0, avg_duration=0, pages_per_session=0)
    assert score_zero == 30.0

def test_sniper_score_negative_resilience():
    # Robustez ante valores negativos (anomalías)
    score = CalculationService.calculate_sniper_score(conversions=-1, avg_duration=-50, pages_per_session=-2.0)
    assert score >= 0.0

def test_ai_normalizer_patterns():
    patterns = {
        "chatgpt.com": "ChatGPT",
        "chat.openai.com": "ChatGPT",
        "android-app://com.openai.chatgpt": "ChatGPT",
        "gemini.google.com": "Gemini",
        "bard.google.com": "Gemini",
        "android-app://com.google.android.apps.bard": "Gemini",
        "perplexity.ai": "Perplexity",
        "android-app://ai.perplexity.app": "Perplexity",
        "copilot.microsoft.com": "Copilot",
        "edgeservices.bing.com": "Copilot",
        "claude.ai": "Claude",
        "anthropic.com": "Claude",
        "poe.com": "Other AI",
        "you.com": "Other AI"
    }
    
    def normalize_ai_platform(source: str) -> str:
        s = str(source).lower()
        if any(k in s for k in ["chatgpt", "openai"]): return "ChatGPT"
        if any(k in s for k in ["gemini", "bard"]): return "Gemini"
        if "perplexity" in s: return "Perplexity"
        if any(k in s for k in ["copilot", "bing ai", "edgeservices.bing"]): return "Copilot"
        if any(k in s for k in ["claude", "anthropic"]): return "Claude"
        return "Other AI"

    for src, expected in patterns.items():
        assert normalize_ai_platform(src) == expected

def test_traffic_ia_battle_item_model():
    from app.models.mcp_analytics.core_models import TrafficIABattleItem
    item = TrafficIABattleItem(
        platform="ChatGPT",
        sessions=150,
        avg_duration="02:15",
        raw_avg_duration_sec=135.0,
        pages_per_session=2.5,
        conversions=5,
        conversion_rate="3.33%",
        engagement_score=82.5,
        landing_pages=[
            {"url": "/relojes/hombre", "sessions": 80, "share": "53.3%", "avg_duration": "02:40"}
        ],
        conversion_breakdown={"purchase": 5, "purchase_revenue": 450.0},
        purchase_count=5,
        purchase_revenue=450.0,
        purchase_rate="3.33%"
    )
    assert item.platform == "ChatGPT"
    assert item.purchase_count == 5
    assert item.purchase_revenue == 450.0
    assert len(item.landing_pages) == 1
    assert item.landing_pages[0]["url"] == "/relojes/hombre"

