export interface ConfiguredSecrets {
  'brandlight-key'?: boolean;
  'peec-key'?: boolean;
  'ga4-creds'?: boolean;
  'adobe-creds'?: boolean;
}

export interface TenantConfig {
  tenant_id: string;
  tenant_name: string;
  logo_url: string;
  primary_color: string;
  secondary_color: string;
  font_family: string;
  support_email: string;
  ga4_conversion_events?: string[];
  updated_at?: string;
  configured_secrets?: ConfiguredSecrets;
}

export interface AnalyticsState {
  market: string;
  days: number;
  from: string;
  to: string;
  connection_id: string;
  ai_connection_id?: string;
  property_id: string;
  session_id?: string;
  account_id?: string;
  segment_id?: string;
  tenant_id?: string;
  live_api?: boolean;
}

export interface ApiResponse {
  total_sessions: number;
  ai_referred: number;
  ai_inferred: number;
  engagement_score: number;
  visibility_score: number;
  sentiment_score: number;
  total_monitored_domains?: number;
  rows?: any[];
  domains?: any[];
  competitors?: any[];
  visibility_by_engine?: any[];
  behavior_clusters?: any[];
  topics_pr?: any[];
  topics_digital?: any[];
  topics_rows?: any[];
  content_affinity?: any[];
  inferred_traffic?: {
    confidence_index?: {
      is_significant: boolean;
    };
  };
  [key: string]: any;
}

export interface MotorPerformanceRow {
  n: string;
  s: string;
  ds: number;
  d: string;
  c: string;
  sc: number;
  conversionsByEvent?: Record<string, number>;
}

