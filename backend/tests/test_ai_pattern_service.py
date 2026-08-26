import pytest
from unittest.mock import MagicMock
from app.services.mcp_analytics.ai_pattern_service import AIPatternService


@pytest.fixture
def mock_ga_service():
    return MagicMock()


@pytest.fixture
def pattern_service(mock_ga_service):
    return AIPatternService(ga_service=mock_ga_service)


class TestAIPatternService:
    def test_ai_sources_initialization(self, pattern_service):
        assert 'chatgpt' in pattern_service.ai_sources
        assert 'claude' in pattern_service.ai_sources
        assert 'gemini' in pattern_service.ai_sources
        assert 'perplexity' in pattern_service.ai_sources
        # bing should not be present
        assert 'bing' not in pattern_service.ai_sources

    def test_find_pattern_matches_empty_benchmark(self, pattern_service):
        empty_benchmark = {'volumen': {'sesiones': 0}}
        comparison_data = [
            {'kpis': {'volumen': {'sesiones': 100}}}
        ]
        matches = pattern_service._find_pattern_matches(empty_benchmark, comparison_data)
        assert matches == []

    def test_find_pattern_matches_thresholds(self, pattern_service):
        benchmark = {
            'volumen': {'sesiones': 500},
            'conversion': {'cr': 5.0},
            'calidad': {'bounce_rate': 40.0},
            'engagement': {'paginas_sesion': 3.5},
            'valor': {'aov': 100.0}
        }

        comparison_data = [
            # Segment matching close to benchmark
            {
                'channel': 'Direct',
                'landing_page': '/pricing',
                'kpis': {
                    'volumen': {'sesiones': 120},
                    'conversion': {'cr': 4.8},
                    'calidad': {'bounce_rate': 38.0},
                    'engagement': {'paginas_sesion': 3.6},
                    'valor': {'aov': 95.0}
                }
            },
            # Segment too small
            {
                'channel': 'Referral',
                'landing_page': '/blog',
                'kpis': {
                    'volumen': {'sesiones': 2},
                    'conversion': {'cr': 5.0},
                    'calidad': {'bounce_rate': 40.0},
                    'engagement': {'paginas_sesion': 3.5},
                    'valor': {'aov': 100.0}
                }
            }
        ]

        matches = pattern_service._find_pattern_matches(benchmark, comparison_data)
        assert len(matches) == 1
        assert matches[0]['landing_page'] == '/pricing'
        assert matches[0]['channel'] == 'Direct'
        assert 'similarity_score' in matches[0]
