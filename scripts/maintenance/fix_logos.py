from app.services.mcp_analytics.gcs_service import GCSService

gcs = GCSService()
bucket = gcs.client.bucket(gcs.bucket_name)
blobs = bucket.list_blobs(prefix="logos/")

count = 0
for blob in blobs:
    try:
        blob.make_public()
        print(f"Made public: {blob.name}")
        count += 1
    except Exception as e:
        print(f"Failed for {blob.name}: {e}")

print(f"Fixed {count} logos.")
