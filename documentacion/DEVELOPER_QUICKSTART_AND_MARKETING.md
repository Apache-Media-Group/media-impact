# 🚀 LLYC Media Impact — Developer Quickstart & GEO Intelligence Guide
> **Track, attribute, and monetize Generative AI referral traffic (ChatGPT, Gemini, Perplexity, Claude, Copilot) in under 5 minutes.**

---

## ⚡ What is Media Impact?
**Media Impact** by LLYC is an enterprise-grade Generative Engine Optimization (GEO) and AI Traffic Intelligence platform. It connects directly to your existing Google Analytics 4, Adobe Analytics, and BigQuery data pipelines to automatically classify, attribute, and score traffic originating from AI assistants.

### Why Media Impact?
* 🔍 **Stop Flying Blind in GEO**: Traditional analytics tools group AI traffic into generic referrers or unassigned direct traffic. Media Impact identifies every model (ChatGPT, Gemini, Perplexity, Copilot, Claude).
* 🎯 **Sniper Score™ Intent Metric**: Proprietary logarithmic scoring (0–100) that balances time-on-site, scroll depth, and commercial conversion.
* 🛍️ **Revenue & Transaction Attribution**: Direct mapping of purchases, revenue in EUR, and landing pages recommended by each AI engine.
* 🛡️ **Zero-Mock Policy & Enterprise Security**: 100% mathematically calculated from real data, secured via Google Cloud Secret Manager and multi-tenant Firestore.

---

## ⏱️ The 5-Minute Quickstart

Get your first AI traffic and engine performance report using cURL or Python in under 5 minutes.

### Prerequisites
- Node.js 18+ or Python 3.10+ (optional, or just `curl`)
- A valid LLYC Intelligence API key or local development environment (`http://localhost:8080`)
- Your tenant identifier (e.g., `vidal-vidal` or `sanitas`)

---

### Step 1: Check System Health

Verify that the analytics backend is responsive:

```bash
curl -X GET "http://localhost:8080/health" \
  -H "Accept: application/json"
```

**Expected Response:**
```json
{
  "status": "healthy",
  "version": "2.4.0",
  "environment": "production"
}
```

---

### Step 2: Query the Battle of AIs (AI Engine Performance)

Execute a live report requesting AI engine breakdown, Sniper Scores, top landing pages, and ecommerce purchases:

```bash
curl -X POST "http://localhost:8080/api/v1/mcp-analytics/run-report" \
  -H "Content-Type: application/json" \
  -H "X-Tenant-ID: vidal-vidal" \
  -d '{
    "property_id": "properties/354728564",
    "date_ranges": [
      {
        "start_date": "30daysAgo",
        "end_date": "today"
      }
    ],
    "dimensions": ["sessionSource", "landingPagePlusQueryString"],
    "metrics": ["sessions", "userEngagementDuration", "conversions", "purchaseRevenue"]
  }'
```

---

### Step 3: Inspect the Response (The Payoff)

The API returns normalized AI engine metrics, e-commerce transactions, and recommended landing pages ready for visualization:

```json
{
  "metadata": {
    "engagement_score": 77,
    "battle_of_ais": [
      {
        "platform": "ChatGPT",
        "sessions": 3030,
        "avg_duration": "01:57",
        "raw_avg_duration_sec": 117.4,
        "engagement_score": 83,
        "purchase_count": 5,
        "purchase_revenue": 420.50,
        "purchase_rate": "0.17%",
        "landing_pages": [
          {
            "url": "/",
            "sessions": 578,
            "share": "19.1%",
            "avg_duration": "40s"
          },
          {
            "url": "/collections/rebajas-en-joyeria",
            "sessions": 70,
            "share": "2.3%",
            "avg_duration": "01:01"
          }
        ]
      },
      {
        "platform": "Gemini",
        "sessions": 16,
        "avg_duration": "01:22",
        "engagement_score": 13,
        "purchase_count": 0,
        "purchase_rate": "0.0%"
      }
    ]
  }
}
```

🎉 **What Just Happened?**  
You extracted 30 days of Generative AI referral traffic, identified 3,030 ChatGPT sessions generating 5 confirmed orders (€420.50 revenue), and retrieved the top pages ChatGPT is actively recommending to prospective buyers.

---

## 💻 Code Recipes (Copy-Paste That Works)

### Python (FastAPI / Requests / Pandas)

```python
import requests
import json

API_URL = "http://localhost:8080/api/v1/mcp-analytics/run-report"
HEADERS = {
    "Content-Type": "application/json",
    "X-Tenant-ID": "vidal-vidal"
}

payload = {
    "property_id": "properties/354728564",
    "date_ranges": [{"start_date": "30daysAgo", "end_date": "today"}],
    "dimensions": ["sessionSource"],
    "metrics": ["sessions", "conversions", "purchaseRevenue"]
}

response = requests.post(API_URL, headers=HEADERS, json=payload)
data = response.json()

print(f"Engagement Score: {data['metadata']['engagement_score']}/100")
print("--- AI Engine Performance ---")
for engine in data['metadata']['battle_of_ais']:
    print(f"[{engine['platform']}] {engine['sessions']} sessions | Score: {engine['engagement_score']} | Orders: {engine.get('purchase_count', 0)}")
```

---

### TypeScript / React (Frontend Consumer)

```typescript
import { useState, useEffect } from 'react';

interface EnginePerformance {
  platform: string;
  sessions: number;
  avg_duration: string;
  engagement_score: number;
  purchase_count?: number;
}

export function useAIEngineReport(tenantId: string) {
  const [engines, setEngines] = useState<EnginePerformance[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReport() {
      const res = await fetch('/api/v1/mcp-analytics/run-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Tenant-ID': tenantId
        },
        body: JSON.stringify({
          date_ranges: [{ start_date: '30daysAgo', end_date: 'today' }]
        })
      });
      const json = await res.json();
      setEngines(json.metadata?.battle_of_ais || []);
      setLoading(false);
    }
    fetchReport();
  }, [tenantId]);

  return { engines, loading };
}
```

---

## 🧠 Core Methodology & Mathematics

### The Sniper Score™ Formula
Unlike basic bounce rates that treat brief, highly effective sessions as failures, Media Impact calculates the **Sniper Score v3+**:

$$S(c, d, p) = B(c) + \frac{30}{\log_{10}((d \times p) + 10)}$$

Where:
- $c$ = Number of confirmed conversions/purchases
- $d$ = Average engagement duration in seconds
- $p$ = Pages viewed per session
- $B(c)$ = Conversion Base Bonus (**70 points** if $c > 0$, **0 points** if $c = 0$)
- The denominator $\log_{10}((d \times p) + 10)$ dampens extreme browsing times and rewards frictionless, efficient customer journeys.

---

## 🗺️ Documentation Architecture (Diátaxis Framework)

Our documentation is structured to support developers across every stage of adoption:

| Documentation Type | Document Link | Goal |
| :--- | :--- | :--- |
| **Tutorial** | [Quickstart (This Guide)](#-the-5-minute-quickstart) | Get first meaningful API result in < 5 minutes |
| **How-To Guide** | [Admin & Connection Manual](file:///Users/santiagorovira/media_impact/documentacion/manuales_de_uso/ADMIN_MANUAL.md) | Connect a new GA4 Property or Adobe Report Suite |
| **Explanation** | [KPI Methodology](file:///Users/santiagorovira/media_impact/documentacion/metodologias/metodologia_actual.md) | Deep dive into Sniper Score and Behavioral Clusters |
| **Reference** | [Technical Architecture & Data Dictionary](file:///Users/santiagorovira/media_impact/documentacion/arquitectura/TECHNICAL_MANUAL.md) | Full schemas, BigQuery table DDL, and API models |

---

## 🔍 Frequently Asked Questions (Developer FAQ)

<details>
<summary><b>How does Media Impact classify AI engines vs generic search traffic?</b></summary>
<p>
The system uses a multi-tier regex and domain fingerprinting pipeline. Traffic matching known assistant hosts (<code>chatgpt.com</code>, <code>android-app://com.openai.chatgpt</code>, <code>gemini.google.com</code>, <code>perplexity.ai</code>, <code>copilot.microsoft.com</code>, <code>claude.ai</code>) is isolated into deterministic platform buckets before downstream analytics processing.
</p>
</details>

<details>
<summary><b>Does Media Impact support Adobe Analytics in addition to GA4?</b></summary>
<p>
Yes. The <code>AdobeAnalyticsService</code> translates standard schema calls into Adobe 2.0 Discovery and Reporting API requests, mapping <code>variables/referrer</code> to AI platforms and calculating identical Sniper Scores and behavioral clusters.
</p>
</details>

<details>
<summary><b>Can we white-label the dashboard for our own clients?</b></summary>
<p>
Yes. Tenant configurations in Firestore inject custom logos, brand typography, and CSS variables in under 1 millisecond at runtime, supporting multi-tenant wildcard subdomains (<code>tenant.analytics.llyc.global</code>).
</p>
</details>

---

## 📈 Next Steps
- 📖 Read the [Data Dictionary](file:///Users/santiagorovira/media_impact/documentacion/metodologias/diccionario_de_datos_actual.md) for full field definitions.
- ⚙️ Explore the [DevOps & DNS Setup](file:///Users/santiagorovira/media_impact/documentacion/arquitectura/DEVOPS_DNS_GUIDE.md) to route your domain.
- 🤝 Contact the LLYC Intelligence engineering team at `developer@llyc.global`.
