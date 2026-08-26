import json
from google_auth_oauthlib.flow import Flow

client_config = {
    "installed": {
        "client_id": "dummy",
        "project_id": "dummy",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_secret": "dummy",
        "redirect_uris": ["http://localhost"]
    }
}

flow = Flow.from_client_config(client_config, scopes=["https://www.googleapis.com/auth/analytics.readonly"])
auth_url, state = flow.authorization_url()
print(hasattr(flow, 'code_verifier'))
print(flow.code_verifier)
