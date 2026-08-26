import os
import sys

# Set up environment for importing app modules
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/media_impact/media-impact-test-keys.json"
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"
os.environ["GOOGLE_CLOUD_PROJECT"] = "llyc-ai-first-core"

# Add the backend directory to sys.path so we can import app
sys.path.insert(0, "/Users/santiagorovira/media_impact/backend")

try:
    from app.services.mcp_analytics.secret_manager_service import SecretManagerService
    
    sms = SecretManagerService()
    tenant_id = "vidal-vidal"
    ga4_creds = sms.get_tenant_secret(tenant_id, "ga4-creds")
    
    if ga4_creds:
        import json
        try:
            parsed = json.loads(ga4_creds)
            if 'properties' in parsed:
                print(f"GA4 Properties for {tenant_id}: {parsed['properties']}")
            else:
                print("No 'properties' key in the GA4 credentials JSON")
        except json.JSONDecodeError:
            print("GA4 credentials is not valid JSON")
    else:
        print(f"No GA4 credentials found in Secret Manager for {tenant_id}")
        
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
