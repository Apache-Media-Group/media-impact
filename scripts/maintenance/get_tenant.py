import sys
from app.services.auth_utils import TokenManager
tm = TokenManager()
if tm.db:
    doc = tm.db.collection("tenants").document("vidal-vidal").get()
    print(doc.to_dict())
