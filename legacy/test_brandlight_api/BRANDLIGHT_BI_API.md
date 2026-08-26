# Brandlight BI API Reference

**Developer Reference**  
*Last updated:* April 20, 2026  
*Version:* `v1`

---

## Quick Reference
* **Base URL:** `https://bi.brandlight.ai/v1`
* **Authentication:** Bearer token in the `Authorization` header:
  ```http
  Authorization: Bearer <your_token>
  ```

---

## Contents
1. [List Brands](#1-list-brands) (`GET /v1/brands`)
2. [List Reports](#2-list-reports) (`GET /v1/brands/:brandName/reports`)
3. [Visibility Ranking](#3-visibility-ranking) (`GET /v1/brands/:brandName/visibility/ranking`)
4. [Ranking by Category](#4-ranking-by-category) (`GET /v1/brands/:brandName/visibility/ranking-by-category`)
5. [Share of Voice](#5-share-of-voice) (`GET /v1/brands/:brandName/visibility/share-of-voice`)
6. [New Content Opportunities](#6-new-content-opportunities) (`GET /v1/brands/:brandName/recommendations/new-content-opportunities`)
7. [My Content Recommendations](#7-my-content-recommendations) (`GET /v1/brands/:brandName/recommendations/my-content`)

---

## 1. List Brands
Returns all brands associated with your account. Use the returned `name` as the `brandName` path parameter on every other endpoint.

* **Method:** `GET`
* **Endpoint:** `/v1/brands`
* **Input:** No input parameters. The endpoint results are scoped to the Bearer token.

### Response Fields
| Field | Type | Description |
| :--- | :--- | :--- |
| `data` | array | List of brands. |
| `data[].name` | string | Brand name. Use this as the `brandName` path parameter in other endpoints. |

### Sample Response (`200 OK`)
```json
{
  "data": [
    {
      "name": "Acme Corp"
    }
  ],
  "meta": {}
}
```

---

## 2. List Reports
Returns a paginated list of reports for a brand, including the dates each was generated and the locations available for that report.

* **Method:** `GET`
* **Endpoint:** `/v1/brands/:brandName/reports`

### Query Parameters
| Parameter | Type | Required | Default | Description |
| :--- | :--- | :---: | :--- | :--- |
| `page` | integer | No | `1` | Page number. |
| `pageSize` | integer | No | `20` | Results per page (max 100). |

### Response Fields
| Field | Type | Description |
| :--- | :--- | :--- |
| `data` | array | List of reports. |
| `data[].generatedAt` | string | Date/time the report was generated (ISO 8601). |
| `data[].locations` | array | Available locations for this report. |
| `data[].locations[].id` | string | Location identifier (e.g., `US`, `GB`, `global`). |
| `data[].locations[].name` | string | Location display name (e.g., `United States`, `United Kingdom`, `Global`). |
| `meta.page` | integer | Current page number. |
| `meta.pageSize` | integer | Results per page. |
| `meta.total` | integer | Total number of reports available. |

### Sample Response (`200 OK`)
```json
{
  "data": [
    {
      "generatedAt": "2026-04-01T00:00:00.000Z",
      "locations": [
        {"id": "US", "name": "United States"},
        {"id": "GB", "name": "United Kingdom"},
        {"id": "global", "name": "Global"}
      ]
    }
  ],
  "meta": {
    "page": 1,
    "pageSize": 20,
    "total": 85
  }
}
```

---

## 3. Visibility Ranking
Returns per-report visibility scores for your brand and competitors over a date range. Always cite the time window when reporting these in dashboards or decks.

* **Method:** `GET`
* **Endpoint:** `/v1/brands/:brandName/visibility/ranking`

### Query Parameters
| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `startDate` | string | Yes | Start of date range (ISO 8601). |
| `endDate` | string | Yes | End of date range (ISO 8601, max 1 year span). |
| `location` | string | Yes | Location ID (e.g., `US`, `global`). Available locations come from the List Reports endpoint. |

### Response Fields
| Field | Type | Description |
| :--- | :--- | :--- |
| `data` | array | List of visibility reports. |
| `data[].reportDate` | string | Date of the report (ISO 8601). |
| `data[].scores` | array | Visibility scores for all brands in this report. |
| `data[].scores[].name` | string | Brand name. |
| `data[].scores[].visibilityScore`| string | Visibility percentage (0 - 100). |

### Sample Response (`200 OK`)
```json
{
  "data": [
    {
      "reportDate": "2026-03-15T00:00:00.000Z",
      "scores": [
        {
          "name": "Acme Corp",
          "visibilityScore": "45.50"
        },
        {
          "name": "Competitor A",
          "visibilityScore": "32.20"
        }
      ]
    }
  ],
  "meta": {}
}
```

---

## 4. Ranking by Category
Returns visibility ranking per category, showing your brand's score alongside competitors in each category.

* **Method:** `GET`
* **Endpoint:** `/v1/brands/:brandName/visibility/ranking-by-category`

### Query Parameters
| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `startDate` | string | Yes | Start of date range (ISO 8601). |
| `endDate` | string | Yes | End of date range (ISO 8601, max 1 year span). |
| `location` | string | Yes | Location ID (e.g., `US`, `global`). |

### Response Fields
| Field | Type | Description |
| :--- | :--- | :--- |
| `data` | array | List of category rankings. |
| `data[].categoryName` | string | Category name. |
| `data[].myBrand` | object | Your brand's visibility in this category. |
| `data[].myBrand.name` | string | Your brand name. |
| `data[].myBrand.score` | string | Visibility percentage (0 - 100). |
| `data[].competitors` | array | Competitor brands, sorted by score (highest first). |
| `data[].competitors[].name` | string | Competitor name. |
| `data[].competitors[].score` | string | Visibility percentage (0 - 100). |

### Sample Response (`200 OK`)
```json
{
  "data": [
    {
      "categoryName": "Enterprise Software",
      "myBrand": {
        "name": "Acme Corp",
        "score": "42.53"
      },
      "competitors": [
        {
          "name": "Competitor A",
          "score": "38.10"
        },
        {
          "name": "Competitor B",
          "score": "25.70"
        }
      ]
    }
  ],
  "meta": {}
}
```

---

## 5. Share of Voice
Returns per-report share of voice percentages for your brand and competitors.

* **Method:** `GET`
* **Endpoint:** `/v1/brands/:brandName/visibility/share-of-voice`

### Query Parameters
| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `startDate` | string | Yes | Start of date range (ISO 8601). |
| `endDate` | string | Yes | End of date range (ISO 8601, max 1 year span). |
| `location` | string | Yes | Location ID (e.g., `US`, `global`). |

### Response Fields
| Field | Type | Description |
| :--- | :--- | :--- |
| `data` | array | List of Share of Voice reports. |
| `data[].reportDate` | string | Date of the report (ISO 8601). |
| `data[].scores` | array | Share of voice for all brands in this report. |
| `data[].scores[].name` | string | Brand name. |
| `data[].scores[].shareOfVoice` | string | Share of voice percentage (0 - 100). |

### Sample Response (`200 OK`)
```json
{
  "data": [
    {
      "reportDate": "2026-03-15T00:00:00.000Z",
      "scores": [
        {
          "name": "Acme Corp",
          "shareOfVoice": "38.92"
        },
        {
          "name": "Competitor A",
          "shareOfVoice": "28.15"
        }
      ]
    }
  ],
  "meta": {}
}
```

---

## 6. New Content Opportunities
Returns content recommendations for new topics your brand should create, grouped by category. Automatically uses the latest report.

* **Method:** `GET`
* **Endpoint:** `/v1/brands/:brandName/recommendations/new-content-opportunities`

### Query Parameters
| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `location` | string | Yes | Location ID (e.g., `US`, `global`). Available locations come from the List Reports endpoint. |

### Response Fields
| Field | Type | Description |
| :--- | :--- | :--- |
| `data` | array | List of categories with opportunities. |
| `data[].categoryName` | string | Category name. |
| `data[].recommendations` | array | List of content recommendations for this category. |
| `data[].recommendations[].topicName` | string | The topic this recommendation targets. |
| `data[].recommendations[].priority` | string | Priority level: `VERY-HIGH`, `HIGH`, `MEDIUM`, or `LOW`. |
| `data[].recommendations[].recommendationType` | string | Type of recommendation (e.g., `NEW_CONTENT_CREATION`). |
| `data[].recommendations[].recommendationAction` | string | Actionable description of what to do. |
| `data[].recommendations[].impactPotential` | array | Expected impact metrics (may be empty). |
| `data[].recommendations[].impactPotential[].percentage` | number | Impact percentage (0 - 100). |
| `data[].recommendations[].impactPotential[].type` | string | Impact type (e.g., `visibility`). |
| `data[].recommendations[].suggestions` | object | Detailed suggestions where keys are strategy names and values are arrays of actionable instructions. |

### Sample Response (`200 OK`)
```json
{
  "data": [
    {
      "categoryName": "Enterprise Software",
      "recommendations": [
        {
          "topicName": "Best Banks in Canada for Identity Theft Support",
          "priority": "HIGH",
          "recommendationType": "NEW_CONTENT_CREATION",
          "recommendationAction": "Instruct content team to write a concise H2 led guide…",
          "impactPotential": [],
          "suggestions": {
            "Use a Clear How-To Format": [
              "Structure the page as a step-by-step How-To Guide…"
            ],
            "Use Simple, Precise Language": [
              "Write in clear, straightforward sentences…"
            ],
            "Incorporate Short, Direct Bullets": [
              "Use concise bullet points highlighting key features…"
            ],
            "Include Calls to Action": [
              "End sections with actionable tips guiding users…"
            ]
          }
        }
      ]
    }
  ],
  "meta": {}
}
```

---

## 7. My Content Recommendations
Returns recommendations for your brand's existing content sources, including citation frequency data. Automatically uses the latest report.

* **Method:** `GET`
* **Endpoint:** `/v1/brands/:brandName/recommendations/my-content`

### Query Parameters
| Parameter | Type | Required | Description |
| :--- | :--- | :---: | :--- |
| `location` | string | Yes | Location ID (e.g., `US`, `global`). Available locations come from the List Reports endpoint. |

### Response Fields
| Field | Type | Description |
| :--- | :--- | :--- |
| `data` | array | List of existing content recommendations. |
| `data[].url` | string | URL of the content source. |
| `data[].domain` | string | Domain name. |
| `data[].citationFrequency` | number | Number of times this source is cited across AI engine answers. |
| `data[].citationChangePercent` | number | Percentage change in citation frequency vs. previous report. |
| `data[].recommendation` | object | Content recommendation for this source. |
| `data[].recommendation.recommendationType` | string | Type of recommendation (e.g., `OPTIMIZE`, `NEW_CONTENT_CREATION`). |
| `data[].recommendation.recommendationAction` | string | Actionable description of what to improve. |
| `data[].recommendation.impactPotential` | array | Expected impact metrics (may be empty). |
| `data[].recommendation.suggestions` | object | Detailed suggestions where keys are strategy names and values are arrays of actionable instructions. |

### Sample Response (`200 OK`)
```json
{
  "data": [
    {
      "url": "https://acme.com/blog/pricing-guide",
      "domain": "acme.com",
      "citationFrequency": 42,
      "citationChangePercent": 12.5,
      "recommendation": {
        "recommendationType": "OPTIMIZE",
        "recommendationAction": "Page is comprehensive but lacks structure…",
        "impactPotential": [],
        "suggestions": {
          "Add Clear Headings": [
            "Introduce descriptive H2 sections…"
          ],
          "Add Summary Sections": [
            "Include brief summaries at the top of sections…"
          ],
          "Create FAQ Section": [
            "Add FAQs to target LLM query patterns…"
          ],
          "Include Comparison Tables": [
            "Add side-by-side spec tables…"
          ],
          "Incorporate Lists": [
            "Use bulleted or numbered lists for key features…"
          ],
          "Use Short Paragraphs": [
            "Break long paragraphs into 3-5 sentences…"
          ],
          "Clear Call to Action": [
            "Add compelling CTAs to guide user action…"
          ]
        }
      }
    }
  ],
  "meta": {}
}
```
