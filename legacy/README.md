# MCP Analytics Standalone Service

This directory contains a standalone version of the MCP Analytics service, extracted from the AIMA 2.0 platform.

## Service Components

### 1. Backend

The backend is built with FastAPI and contains the following components:

-   **`mcp_analytics.py`**: The main FastAPI router that exposes all the API endpoints for the service. It handles user authentication, request validation, and orchestrates the different services.

-   **`services/`**: This directory contains the core business logic of the service, separated into different modules.

-   **`models/`**: Contains the Pydantic models used for data validation and serialization in the API endpoints.

-   **`shared/`**: Contains shared utility modules, like `auth_utils.py` for handling authentication and authorization.

### 2. Frontend

The frontend is a Next.js application that provides the user interface for the MCP Analytics service.

-   **`frontend/`**: This directory contains the Next.js component for the conversational analytics interface.

## How to Run This Service

To run this service in a standalone mode, you will need to set up both the backend and the frontend.

### Backend Setup

1.  **Create a Python Environment**: It is recommended to use a virtual environment.
    ```bash
    python -m venv venv
    source venv/bin/activate
    ```

2.  **Install Dependencies**: You will need to install `fastapi`, `uvicorn`, `google-cloud-firestore`, `google-auth-oauthlib`, and other libraries used in the services. A good starting point is to create a `requirements.txt` file with the following content:
    ```
    fastapi
    uvicorn
    google-cloud-firestore
    google-auth-oauthlib
    pydantic
    requests
    python-jose[cryptography]
    passlib[bcrypt]
    # Add other dependencies from the services here
    ```
    Then, install them using `pip install -r requirements.txt`.

3.  **Configure Environment Variables**: The service relies on several environment variables for its configuration. Create a `.env` file and add the following variables:
    ```
    GOOGLE_CLIENT_ID=<your-google-client-id>
    GOOGLE_CLIENT_SECRET=<your-google-client-secret>
    GOOGLE_REDIRECT_URI=http://localhost:3000/auth/callback
    GCP_PROJECT_ID=<your-gcp-project-id>
    ```
    You will need to create a Google Cloud project and configure OAuth 2.0 credentials to get these values.

4.  **Adapt the Code**: You will need to replace the imports from `app.core.config` and `app.routers.auth` with your own configuration and authentication logic. For example, instead of `from app.core.config import settings`, you would use a library like `pydantic-settings` to load your `.env` file.

5.  **Run the Backend**:
    ```bash
    uvicorn mcp_analytics:router --host 0.0.0.0 --port 8000
    ```

### Frontend Setup

1.  **Create a Next.js Project**: If you don't have one already, create a new Next.js project.
    ```bash
    npx create-next-app@latest my-mcp-analytics-app
    ```

2.  **Copy the Component**: Copy the `page.tsx` file from the `frontend/` directory of this service to the `app/` directory of your new Next.js project.

3.  **Install Dependencies**: Install the necessary npm packages.
    ```bash
    npm install next react react-dom lucide-react tailwind-merge clsx recharts vega vega-lite react-vega chart.js react-chartjs-2 @sgratzl/chartjs-chart-boxplot xlsx
    ```

4.  **Configure Tailwind CSS**: You will need to set up Tailwind CSS in your project if it's not already.

5.  **Run the Frontend**:
    ```bash
    npm run dev
    ```

This will start the frontend development server, usually on `http://localhost:3000`.