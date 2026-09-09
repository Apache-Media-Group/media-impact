# backend/tests/diagnose_sanitas_adobe.py
import os
from google.cloud import firestore

project_id = os.getenv("GCP_PROJECT_ID", "llyc-ai-first-core")
db = firestore.Client(project=project_id)

def check_sanitas():
    t_doc = db.collection("tenants").document("sanitas").get()
    if t_doc.exists:
        data = t_doc.to_dict()
        print("Sanitas Tenant Data:")
        for k, v in data.items():
            if k not in ["authorized_emails"]:
                print(f"  {k}: {v}")
    else:
        print("Sanitas tenant doc NOT found!")

    for run_id in ["2vjvcaeaHdlHY0zHI4fD", "IsNdZYmdpKgtk3XvoUZT"]:
        doc = db.collection("etl_runs").document(run_id).get()
        if doc.exists:
            print(f"\n=== Run Doc: {run_id} ===")
            import pprint
            pprint.pprint(doc.to_dict())



if __name__ == "__main__":
    check_sanitas()
