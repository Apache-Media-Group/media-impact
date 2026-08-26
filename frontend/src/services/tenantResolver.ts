// frontend/src/services/tenantResolver.ts
import type { TenantConfig } from '../types';
import { API_BASE_URL } from './apiClient';

/**
 * Detects tenant identifier from query param, pathname or subdomain.
 */
export const getTenantFromUrl = (): string | null => {
  // 1. Detección por query param
  const urlParams = new URLSearchParams(window.location.search);
  const tenantParam = urlParams.get('tenant_id') || urlParams.get('tenant');
  if (tenantParam) {
    return tenantParam.toLowerCase().trim();
  }

  // 2. Detección por path name (ej: /media-impact/sanitas o /media-impact/sanitas/)
  const path = window.location.pathname;
  if (path.startsWith('/media-impact')) {
    const relativePath = path.substring('/media-impact'.length);
    const segments = relativePath.split('/').filter(s => s.length > 0);
    if (segments.length > 0) {
      const firstSegment = segments[0].toLowerCase().trim();
      const reserved = ['admin', 'assets', 'favicon.svg', 'logo_llyc.svg', 'icons.svg', 'index.html'];
      if (!reserved.includes(firstSegment)) {
        return firstSegment;
      }
    }
  }

  // 3. Detección por subdominio (producción)
  const host = window.location.hostname;
  if (host && host !== 'localhost' && host !== '127.0.0.1' && !host.endsWith('web.app')) {
    const parts = host.split('.');
    if (parts.length > 2) {
      const sub = parts[0].toLowerCase().trim();
      if (sub !== 'www' && sub !== 'dashboard' && sub !== 'analytics') {
        return sub;
      }
    }
  }

  return null;
};

/**
 * Returns a proxy URL or relative asset URL for a given logo
 */
export const getProxiedLogoUrl = (url: string): string => {
  if (!url) return '';
  if (url.startsWith('/')) return `${import.meta.env.BASE_URL || '/'}${url.substring(1)}`;
  return `${API_BASE_URL}/api/v1/mcp-analytics/tenant/proxy-logo?url=${encodeURIComponent(url)}`;
};

/**
 * Dynamically applies tenant theme CSS custom properties to :root
 */
export const applyTenantTheme = (tenant: Partial<TenantConfig>): void => {
  if (tenant.primary_color) {
    document.documentElement.style.setProperty('--red', tenant.primary_color);
    document.documentElement.style.setProperty('--red-light', `${tenant.primary_color}1A`);
  }
  if (tenant.secondary_color) {
    document.documentElement.style.setProperty('--teal', tenant.secondary_color);
    document.documentElement.style.setProperty('--teal-light', `${tenant.secondary_color}1A`);
  }
};
