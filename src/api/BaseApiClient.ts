import type { APIRequestContext, APIResponse } from '@playwright/test';
import { logger } from '../utils/logger';

/**
 * Thin wrapper around Playwright's APIRequestContext.
 * Centralizes logging, auth headers, and default options so individual
 * service/endpoint classes stay focused on business logic.
 */
export class BaseApiClient {
  protected readonly request: APIRequestContext;
  private readonly authHeaders: Record<string, string>;

  constructor(request: APIRequestContext, token?: string) {
    this.request = request;
    this.authHeaders = token ? { Authorization: `Bearer ${token}` } : {};
  }

  async get(url: string, params?: Record<string, string | number | boolean>): Promise<APIResponse> {
    logger.debug(`GET ${url}`, params ?? '');
    return this.request.get(url, { headers: this.authHeaders, params });
  }

  async post(url: string, data?: unknown): Promise<APIResponse> {
    logger.debug(`POST ${url}`, data ?? '');
    return this.request.post(url, { headers: this.authHeaders, data });
  }

  async put(url: string, data?: unknown): Promise<APIResponse> {
    logger.debug(`PUT ${url}`, data ?? '');
    return this.request.put(url, { headers: this.authHeaders, data });
  }

  async patch(url: string, data?: unknown): Promise<APIResponse> {
    logger.debug(`PATCH ${url}`, data ?? '');
    return this.request.patch(url, { headers: this.authHeaders, data });
  }

  async delete(url: string): Promise<APIResponse> {
    logger.debug(`DELETE ${url}`);
    return this.request.delete(url, { headers: this.authHeaders });
  }
}
