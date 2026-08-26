import { describe, it, expect, beforeEach } from 'vitest';
import { getTenantFromUrl, getProxiedLogoUrl, applyTenantTheme } from '../tenantResolver';

describe('tenantResolver', () => {
  beforeEach(() => {
    // Reset window.location
    delete (window as any).location;
    (window as any).location = new URL('https://dashboard.example.com');
  });

  it('extracts tenant_id from search query params', () => {
    window.location.search = '?tenant_id=acme_corp';
    expect(getTenantFromUrl()).toBe('acme_corp');
  });

  it('extracts tenant from path segment', () => {
    window.location.search = '';
    window.location.pathname = '/media-impact/client_alpha';
    expect(getTenantFromUrl()).toBe('client_alpha');
  });

  it('ignores reserved path segments', () => {
    window.location.search = '';
    window.location.pathname = '/media-impact/admin';
    expect(getTenantFromUrl()).toBeNull();
  });

  it('extracts tenant from production subdomain', () => {
    window.location.search = '';
    window.location.pathname = '/';
    (window as any).location = new URL('https://clientbrand.example.com');
    expect(getTenantFromUrl()).toBe('clientbrand');
  });

  it('generates proxied logo url for external URLs', () => {
    const url = 'https://example.com/logo.svg';
    const proxied = getProxiedLogoUrl(url);
    expect(proxied).toContain('/api/v1/mcp-analytics/tenant/proxy-logo?url=');
    expect(proxied).toContain(encodeURIComponent(url));
  });

  it('handles empty logo url', () => {
    expect(getProxiedLogoUrl('')).toBe('');
  });

  it('applies custom CSS variables when primary and secondary colors are provided', () => {
    applyTenantTheme({
      primary_color: '#FF0055',
      secondary_color: '#00DDAA'
    });

    expect(document.documentElement.style.getPropertyValue('--red')).toBe('#FF0055');
    expect(document.documentElement.style.getPropertyValue('--red-light')).toBe('#FF00551A');
    expect(document.documentElement.style.getPropertyValue('--teal')).toBe('#00DDAA');
    expect(document.documentElement.style.getPropertyValue('--teal-light')).toBe('#00DDAA1A');
  });
});
