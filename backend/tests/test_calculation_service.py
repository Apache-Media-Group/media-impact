import pytest
from decimal import Decimal
from app.services.mcp_analytics.calculation_service import CalculationService


class TestCalculationServiceToDecimal:
    def test_valid_numeric_inputs(self):
        assert CalculationService.to_decimal(10) == Decimal('10')
        assert CalculationService.to_decimal(3.14) == Decimal('3.14')
        assert CalculationService.to_decimal('42.55') == Decimal('42.55')

    def test_none_input(self):
        assert CalculationService.to_decimal(None) == Decimal('0')

    def test_invalid_input(self):
        assert CalculationService.to_decimal('not_a_number') == Decimal('0')
        assert CalculationService.to_decimal([]) == Decimal('0')


class TestCalculationServicePercentages:
    def test_calculate_percentage_normal(self):
        result = CalculationService.calculate_percentage(25, 100, 2)
        assert result == 25.0

        result = CalculationService.calculate_percentage(1234, 7943, 2)
        assert result == 15.54

    def test_calculate_percentage_zero_denominator(self):
        assert CalculationService.calculate_percentage(50, 0, 2) == 0.0

    def test_calculate_ratio_normal(self):
        assert CalculationService.calculate_ratio(10, 2, 2) == 5.0
        assert CalculationService.calculate_ratio(1, 3, 2) == 0.33
        assert CalculationService.calculate_ratio(1, 3, 4) == 0.3333

    def test_calculate_ratio_zero_denominator(self):
        assert CalculationService.calculate_ratio(10, 0, 2) == 0.0


class TestCalculationServiceRates:
    def test_conversion_rate(self):
        assert CalculationService.calculate_conversion_rate(5, 100) == 5.0
        assert CalculationService.calculate_conversion_rate(0, 100) == 0.0
        assert CalculationService.calculate_conversion_rate(5, 0) == 0.0

    def test_drop_rate(self):
        # 10000 -> 7500 => drop of 2500 (25%)
        assert CalculationService.calculate_drop_rate(10000, 7500) == 25.0
        # If current > previous, drop is 0%
        assert CalculationService.calculate_drop_rate(50, 100) == 0.0
        # Zero previous
        assert CalculationService.calculate_drop_rate(0, 50) == 0.0

    def test_engagement_and_bounce_rate(self):
        assert CalculationService.calculate_engagement_rate(70, 100) == 70.0
        assert CalculationService.calculate_bounce_rate(30, 100) == 30.0

    def test_convert_ga4_rate_to_percentage(self):
        assert CalculationService.convert_ga4_rate_to_percentage(0.6543) == 65.43
        assert CalculationService.convert_ga4_rate_to_percentage(1.0) == 100.0
        assert CalculationService.convert_ga4_rate_to_percentage(0.0) == 0.0


class TestCalculationServiceAveragesAndScores:
    def test_calculate_average_and_aov(self):
        assert CalculationService.calculate_average(1000, 10) == 100.0
        assert CalculationService.calculate_aov(500.50, 2) == 250.25
        assert CalculationService.calculate_aov(500.50, 0) == 0.0

    def test_calculate_sniper_score(self):
        # High intent with conversions
        score_with_conv = CalculationService.calculate_sniper_score(conversions=10, avg_duration=120, pages_per_session=4)
        assert 70.0 <= score_with_conv <= 100.0

        # No conversions
        score_no_conv = CalculationService.calculate_sniper_score(conversions=0, avg_duration=120, pages_per_session=4)
        assert 0.0 <= score_no_conv < 70.0

        # Zero / Edge friction
        score_zero = CalculationService.calculate_sniper_score(conversions=0, avg_duration=0, pages_per_session=0)
        assert score_zero > 0.0

    def test_calculate_confidence_index(self):
        result = CalculationService.calculate_confidence_index(
            known_ai_sessions=150,
            total_sessions=1000,
            conversions=15
        )
        assert isinstance(result, dict)
        assert 'score' in result
        assert 'label' in result
        assert 0.0 <= result['score'] <= 1.0
