import asyncio
import aiohttp
import json
import os
from dotenv import load_dotenv

from app.services.mcp_analytics.secret_manager_service import SecretManagerService

load_dotenv(dotenv_path="/Users/santiagorovira/media_impact/backend/.env")

async def test_peec_api():
    sms = SecretManagerService()
    api_key = sms.get_tenant_secret("vidal-vidal", "peec-key")
    
    if not api_key:
        print("PEEC_API_KEY not found in Secret Manager for vidal-vidal")
        return
        
    headers = {
        "x-api-key": api_key,
        "Content-Type": "application/json"
    }
    
    base_url = "https://api.peec.ai/customer/v1"
    
    async with aiohttp.ClientSession() as session:
        print(f"Testing {base_url}/reports/citations directly with project ID...")
        payload = {"limit": 10, "projectId": "24"} # We know from previous tests that "24" is the Sanitas Peec projectId
        async with session.post(f"{base_url}/reports/citations", headers=headers, json=payload) as t_resp:
            print(f"Status: {t_resp.status}")
            if t_resp.status == 200:
                t_data = await t_resp.json()
                print(f"Citations Response: {json.dumps(t_data, indent=2)}")
            else:
                print(f"Citations Error: {await t_resp.text()}")
                
        print(f"Testing {base_url}/reports/domains directly with project ID...")
        payload = {"limit": 10, "projectId": "24"}
        async with session.post(f"{base_url}/reports/domains", headers=headers, json=payload) as d_resp:
            print(f"Status: {d_resp.status}")
            if d_resp.status == 200:
                d_data = await d_resp.json()
                print(f"Domains Response: {json.dumps(d_data, indent=2)}")
            else:
                print(f"Domains Error: {await d_resp.text()}")

if __name__ == "__main__":
    asyncio.run(test_peec_api())
