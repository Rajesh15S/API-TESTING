import { test as base } from '@playwright/test';
import { PostsApi } from '../../src/api/PostsApi.js';
import { env } from '../../src/config/env.config.js';

/**
 * Custom fixtures expose ready-to-use API clients to every test.
 * Extend this `test` instead of importing from @playwright/test directly.
 */
type ApiFixtures = {
  postsApi: PostsApi;
};

export const test = base.extend<ApiFixtures>({
  postsApi: async ({ request }, use) => {
    const client = new PostsApi(request, env.apiToken);
    await use(client);
  },
});

export { expect } from '@playwright/test';
