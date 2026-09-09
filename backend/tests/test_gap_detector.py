# backend/tests/test_gap_detector.py
from datetime import datetime, date, timedelta
from typing import List, Optional, Tuple

def detect_sync_dates(existing_dates_str: List[str], today: date, max_lookback_days: int = 14) -> Tuple[str, str]:
    today_dt = today
    date_to = today_dt.strftime("%Y-%m-%d")
    
    if not existing_dates_str:
        # No hay datos previos en BigQuery -> Backfill completo de 90 días
        date_from = (today_dt - timedelta(days=90)).strftime("%Y-%m-%d")
        return date_from, date_to

    existing_dates = set()
    for d_str in existing_dates_str:
        try:
            existing_dates.add(datetime.strptime(d_str[:10], "%Y-%m-%d").date())
        except ValueError:
            pass

    min_existing = min(existing_dates)
    window_start = max(min_existing, today_dt - timedelta(days=max_lookback_days))
    target_end = today_dt - timedelta(days=1) # Días cerrados hasta ayer

    curr = window_start
    earliest_missing: Optional[date] = None
    while curr <= target_end:
        if curr not in existing_dates:
            earliest_missing = curr
            break
        curr += timedelta(days=1)

    if earliest_missing:
        date_from = earliest_missing.strftime("%Y-%m-%d")
    else:
        # Sin brechas: ventana normal de los últimos 2 días para refrescar
        date_from = (today_dt - timedelta(days=2)).strftime("%Y-%m-%d")

    return date_from, date_to

def test_vidal():
    vidal_dates = ['2026-08-26', '2026-08-27', '2026-08-28', '2026-08-29', '2026-08-30', '2026-08-31', '2026-09-01', '2026-09-07', '2026-09-08', '2026-09-09']
    today = date(2026, 9, 9)
    d_from, d_to = detect_sync_dates(vidal_dates, today)
    print(f"Vidal & Vidal gap detection: {d_from} -> {d_to}")
    assert d_from == "2026-09-02"
    assert d_to == "2026-09-09"

def test_sanitas():
    sanitas_dates = ['2026-08-26', '2026-08-27', '2026-08-28', '2026-08-29', '2026-08-30', '2026-08-31', '2026-09-01', '2026-09-02', '2026-09-03']
    today = date(2026, 9, 9)
    d_from, d_to = detect_sync_dates(sanitas_dates, today)
    print(f"Sanitas gap detection: {d_from} -> {d_to}")
    assert d_from == "2026-09-04"
    assert d_to == "2026-09-09"

def test_no_gaps():
    continuous = [(date(2026, 9, 9) - timedelta(days=i)).strftime("%Y-%m-%d") for i in range(1, 15)]
    today = date(2026, 9, 9)
    d_from, d_to = detect_sync_dates(continuous, today)
    print(f"Continuous gap detection: {d_from} -> {d_to}")
    assert d_from == "2026-09-07"
    assert d_to == "2026-09-09"

if __name__ == "__main__":
    test_vidal()
    test_sanitas()
    test_no_gaps()
    print("ALL GAP DETECTOR TESTS PASSED!")
