import sys
import os
sys.path.append('/Users/santiagorovira/media_impact/backend')
from app.services.auth_utils import TokenManager

tm = TokenManager()
if tm.db:
    doc = tm.db.collection("tenants").document("sanitas").get()
    if doc.exists:
        print(doc.to_dict())
    else:
        print("Not found")
else:
    print("No DB")
