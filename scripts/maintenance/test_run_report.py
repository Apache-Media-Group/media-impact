import requests

url = "http://localhost:8080/api/v1/mcp-analytics/run-report"
payload = {
    "property_id": "test",
    "date_ranges": [{"start_date": "30daysAgo", "end_date": "today"}],
    "metrics": [],
    "dimensions": [],
    "tenant_id": "sanitas"
}
try:
    response = requests.post(url, json=payload)
    print("Status:", response.status_code)
    print("Response:", response.json())
except Exception as e:
    print("Error:", e)
