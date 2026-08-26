#!/usr/bin/env python3
import os
import sys
import requests
import json
import time
from datetime import datetime, timedelta

# Simple .env parser to avoid external dependencies (like python-dotenv)
def load_env(env_path=".env"):
    if os.path.exists(env_path):
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("#"):
                    continue
                if "=" in line:
                    key, value = line.split("=", 1)
                    key = key.strip()
                    if key not in os.environ:
                        os.environ[key] = value.strip()

class BrandlightAPI:
    def __init__(self, base_url="https://bi.brandlight.ai/v1", api_key=None):
        self.base_url = base_url.rstrip("/")
        self.api_key = api_key or os.environ.get("BRANDLIGHT_API_KEY")
        if not self.api_key:
            raise ValueError("Error: BRANDLIGHT_API_KEY not found in environment or .env file.")
        
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
            "Accept": "application/json"
        }

    def _request(self, method, endpoint, params=None, data=None):
        url = f"{self.base_url}{endpoint}"
        print(f"\n[Request] {method} {url}")
        if params:
            print(f"  Params: {params}")
        # Rate-limiting throttle: wait 1.5 seconds between requests
        time.sleep(1.5)
        try:
            response = requests.request(method, url, headers=self.headers, params=params, json=data)
            print(f"[Response] Status: {response.status_code}")
            response.raise_for_status()
            return response.json()
        except requests.exceptions.HTTPError as e:
            print(f"[Error] HTTP Error: {e}")
            if response.text:
                try:
                    print(f"  Details: {json.dumps(response.json(), indent=2)}")
                except Exception:
                    print(f"  Details (Raw): {response.text}")
            raise e
        except Exception as e:
            print(f"[Error] Failed to connect: {e}")
            raise e

    def list_brands(self):
        """1. GET /v1/brands"""
        return self._request("GET", "/brands")

    def list_reports(self, brand_name):
        """2. GET /v1/brands/:brandName/reports"""
        return self._request("GET", f"/brands/{brand_name}/reports")

    def get_visibility_ranking(self, brand_name, start_date, end_date, location):
        """3. GET /v1/brands/:brandName/visibility/ranking"""
        params = {
            "startDate": start_date,
            "endDate": end_date,
            "location": location
        }
        return self._request("GET", f"/brands/{brand_name}/visibility/ranking", params=params)

    def get_ranking_by_category(self, brand_name, start_date, end_date, location):
        """4. GET /v1/brands/:brandName/visibility/ranking-by-category"""
        params = {
            "startDate": start_date,
            "endDate": end_date,
            "location": location
        }
        return self._request("GET", f"/brands/{brand_name}/visibility/ranking-by-category", params=params)

    def get_share_of_voice(self, brand_name, start_date, end_date, location):
        """5. GET /v1/brands/:brandName/visibility/share-of-voice"""
        params = {
            "startDate": start_date,
            "endDate": end_date,
            "location": location
        }
        return self._request("GET", f"/brands/{brand_name}/visibility/share-of-voice", params=params)

    def get_new_content_opportunities(self, brand_name, location):
        """6. GET /v1/brands/:brandName/recommendations/new-content-opportunities"""
        params = {"location": location}
        return self._request("GET", f"/brands/{brand_name}/recommendations/new-content-opportunities", params=params)

    def get_my_content_recommendations(self, brand_name, location):
        """7. GET /v1/brands/:brandName/recommendations/my-content"""
        params = {"location": location}
        return self._request("GET", f"/brands/{brand_name}/recommendations/my-content", params=params)


def run_tests():
    print("=" * 60)
    print("   BRANDLIGHT BI API - AUTOMATED TEST CLIENT")
    print("=" * 60)
    
    # Load environment variables
    load_env()
    
    try:
        api = BrandlightAPI()
        print("✔ API Client initialized successfully.")
    except Exception as e:
        print(f"❌ Initialization failed: {e}")
        sys.exit(1)

    # 1. Test List Brands
    print("\n--- Testing: 1. List Brands ---")
    try:
        brands_data = api.list_brands()
        print(json.dumps(brands_data, indent=2))
    except Exception:
        print("❌ Failed to list brands. Aborting further tests.")
        sys.exit(1)

    brands = brands_data.get("data", [])
    if not brands:
        print("⚠ No brands returned for this account. Cannot proceed with brand-specific endpoints.")
        sys.exit(0)

    # We use the first brand returned
    brand_name = brands[0]["name"]
    print(f"\n👉 Selected Brand for testing: '{brand_name}'")

    # 2. Test List Reports
    print("\n--- Testing: 2. List Reports ---")
    try:
        reports_data = api.list_reports(brand_name)
        print(json.dumps(reports_data, indent=2))
    except Exception:
        print(f"❌ Failed to list reports for brand '{brand_name}'. Aborting further tests.")
        sys.exit(1)

    reports = reports_data.get("data", [])
    if not reports:
        print(f"⚠ No reports available for brand '{brand_name}'. Cannot proceed with report-specific endpoints.")
        sys.exit(0)

    # Use details from the most recent report to perform subsequent queries
    latest_report = reports[0]
    generated_at = latest_report.get("generatedAt")
    locations = latest_report.get("locations", [])

    if not locations:
        print("⚠ No locations available in the latest report. Defaulting to 'global'.")
        location_id = "global"
    else:
        # Use first available location (e.g., US, global)
        location_id = locations[0]["id"]
        print(f"👉 Selected Location from report: '{location_id}' (Name: {locations[0]['name']})")

    # Format dates for API queries (e.g., startDate as 30 days before generated_at, endDate as generated_at)
    try:
        # Parse ISO timestamp to YYYY-MM-DD
        dt_end = datetime.fromisoformat(generated_at.replace("Z", "+00:00"))
        dt_start = dt_end - timedelta(days=30)
        
        start_date = dt_start.strftime("%Y-%m-%d")
        end_date = dt_end.strftime("%Y-%m-%d")
    except Exception:
        # Fallback to hardcoded/current dates if parsing fails
        start_date = "2026-03-01"
        end_date = "2026-04-01"

    print(f"👉 Date Range for queries: {start_date} to {end_date}")

    # 3. Test Visibility Ranking
    print("\n--- Testing: 3. Visibility Ranking ---")
    try:
        visibility = api.get_visibility_ranking(brand_name, start_date, end_date, location_id)
        print(json.dumps(visibility, indent=2))
    except Exception as e:
        print(f"❌ Failed to get visibility ranking: {e}")

    # 4. Test Ranking by Category
    print("\n--- Testing: 4. Ranking by Category ---")
    try:
        ranking_by_cat = api.get_ranking_by_category(brand_name, start_date, end_date, location_id)
        print(json.dumps(ranking_by_cat, indent=2))
    except Exception as e:
        print(f"❌ Failed to get ranking by category: {e}")

    # 5. Test Share of Voice
    print("\n--- Testing: 5. Share of Voice ---")
    try:
        sov = api.get_share_of_voice(brand_name, start_date, end_date, location_id)
        print(json.dumps(sov, indent=2))
    except Exception as e:
        print(f"❌ Failed to get share of voice: {e}")

    # 6. Test New Content Opportunities
    print("\n--- Testing: 6. New Content Opportunities ---")
    try:
        opps = api.get_new_content_opportunities(brand_name, location_id)
        print(json.dumps(opps, indent=2))
    except Exception as e:
        print(f"❌ Failed to get new content opportunities: {e}")

    # 7. Test My Content Recommendations
    print("\n--- Testing: 7. My Content Recommendations ---")
    try:
        recs = api.get_my_content_recommendations(brand_name, location_id)
        print(json.dumps(recs, indent=2))
    except Exception as e:
        print(f"❌ Failed to get my content recommendations: {e}")

    print("\n" + "=" * 60)
    print("   TEST RUN COMPLETED")
    print("=" * 60)

if __name__ == "__main__":
    run_tests()
