import firebase_admin
from firebase_admin import credentials, firestore
import sys

try:
    if not firebase_admin._apps:
        firebase_admin.initialize_app()
    
    db = firestore.client()
    
    connections = db.collection('connections').get()
    print("All Connections:")
    for c in connections:
        data = c.to_dict()
        print(f"- {c.id}: tenant_id={data.get('tenant_id')}, tenant={data.get('tenant')}")

except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
