// frontend/src/components/admin/types.ts

export interface TenantConfig {
  tenant_id: string;
  tenant_name: string;
  logo_url: string;
  primary_color: string;
  secondary_color: string;
  font_family: string;
  support_email: string;
  authorized_emails?: string[];
  authorized_domains?: string[];
  ga4_conversion_events?: string[];
  updated_at?: string;
  configured_secrets?: {
    'brandlight-key'?: boolean;
    'peec-key'?: boolean;
    'ga4-creds'?: boolean;
    'adobe-creds'?: boolean;
  };
  deployment_status?: {
    status?: 'deploying' | 'success' | 'failed';
    step?: string;
    message?: string;
    updated_at?: string;
  };
  sync_cadence?: 'daily' | 'every_6h' | 'hourly';
  preferred_hour_utc?: number;
  last_successful_execution?: string;
  last_attempt_at?: string;
  last_execution_status?: 'SUCCESS' | 'FAILED' | 'TIMEOUT' | 'ERROR_SUSPENDED';
  consecutive_failures?: number;
  is_running_now?: boolean;
}

export const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
  ? 'http://localhost:8080' 
  : '';
