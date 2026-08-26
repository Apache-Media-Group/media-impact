import sys
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/santiagorovira/media_impact/media-impact-ai-first-core.json"
os.environ["GCP_PROJECT_ID"] = "llyc-ai-first-core"

from google.cloud import scheduler_v1

client = scheduler_v1.CloudSchedulerClient()
project_id = "llyc-ai-first-core"
location_id = "europe-west1"
parent = f"projects/{project_id}/locations/{location_id}"

print("Listing jobs in europe-west1...")
try:
    jobs = client.list_jobs(parent=parent)
    for job in jobs:
        print(f"Name: {job.name}, Schedule: {job.schedule}, State: {job.state}")
except Exception as e:
    print(f"Error Europe: {e}")

location_id_us = "us-central1"
parent_us = f"projects/{project_id}/locations/{location_id_us}"
print("\nListing jobs in us-central1...")
try:
    jobs = client.list_jobs(parent=parent_us)
    for job in jobs:
        print(f"Name: {job.name}, Schedule: {job.schedule}, State: {job.state}")
except Exception as e:
    print(f"Error US: {e}")
