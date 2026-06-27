import type { APIResponse } from '@playwright/test';
import { BaseApiClient } from './BaseApiClient.js';
import type { CreatePostPayload } from '../types/index.js';

/**
 * Endpoint-specific client for the /posts resource.
 * One class per resource/service keeps tests readable and DRY.
 */
export class PostsApi extends BaseApiClient {
  private readonly resource = '/posts';

  getAll(): Promise<APIResponse> {
    return this.get(this.resource);
  }

  getById(id: number): Promise<APIResponse> {
    return this.get(`${this.resource}/${id}`);
  }

  create(payload: CreatePostPayload): Promise<APIResponse> {
    return this.post(this.resource, payload);
  }

  update(id: number, payload: CreatePostPayload): Promise<APIResponse> {
    return this.put(`${this.resource}/${id}`, payload);
  }

  remove(id: number): Promise<APIResponse> {
    return this.delete(`${this.resource}/${id}`);
  }
}
