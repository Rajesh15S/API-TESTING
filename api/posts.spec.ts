import { test, expect } from '../fixtures/api.fixture';
import { newPost } from '../src/data/testData';
import type { Post } from '../src/types/index';

test.describe('Posts API', () => {
  test('GET /posts returns a non-empty list @smoke', async ({ postsApi }) => {
    const response = await postsApi.getAll();

    expect(response.status()).toBe(200);
    const posts = (await response.json()) as Post[];
    expect(Array.isArray(posts)).toBeTruthy();
    expect(posts.length).toBeGreaterThan(0);
  });

  test('GET /posts/:id returns the requested post @regression', async ({ postsApi }) => {
    const response = await postsApi.getById(1);

    expect(response.status()).toBe(200);
    const post = (await response.json()) as Post;
    expect(post.id).toBe(1);
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('body');
  });

  test('POST /posts creates a new post @smoke', async ({ postsApi }) => {
    const response = await postsApi.create(newPost);

    expect(response.status()).toBe(201);
    const created = (await response.json()) as Post;
    expect(created.title).toBe(newPost.title);
    expect(created.body).toBe(newPost.body);
    expect(created).toHaveProperty('id');
  });

  test('DELETE /posts/:id succeeds @regression', async ({ postsApi }) => {
    const response = await postsApi.remove(1);
    expect(response.ok()).toBeTruthy();
  });
});
