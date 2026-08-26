import { describe, it, expect, vi, beforeEach } from 'vitest';
import { secureFetch } from '../apiClient';

vi.mock('../../firebase', () => ({
  auth: {
    currentUser: null
  }
}));

describe('apiClient - secureFetch', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ status: 'success' })
    } as any);
  });

  it('automatically sets Content-Type to application/json for string body', async () => {
    await secureFetch('/api/test', {
      method: 'POST',
      body: JSON.stringify({ key: 'value' })
    });

    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
    const [, options] = (globalThis.fetch as any).mock.calls[0];
    const headers = options.headers as Headers;
    expect(headers.get('Content-Type')).toBe('application/json');
  });

  it('preserves existing custom headers', async () => {
    await secureFetch('/api/test', {
      headers: {
        'X-Custom-Header': 'CustomValue'
      }
    });

    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
    const [, options] = (globalThis.fetch as any).mock.calls[0];
    const headers = options.headers as Headers;
    expect(headers.get('X-Custom-Header')).toBe('CustomValue');
  });

  it('injects Authorization Bearer token when Firebase user is present', async () => {
    const { auth } = await import('../../firebase');
    (auth as any).currentUser = {
      getIdToken: vi.fn().mockResolvedValue('mock-firebase-jwt-token-123')
    };

    await secureFetch('/api/protected-endpoint');

    expect(globalThis.fetch).toHaveBeenCalledTimes(1);
    const [, options] = (globalThis.fetch as any).mock.calls[0];
    const headers = options.headers as Headers;
    expect(headers.get('Authorization')).toBe('Bearer mock-firebase-jwt-token-123');
  });
});
