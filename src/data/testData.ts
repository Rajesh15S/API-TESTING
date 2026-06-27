import type { CreatePostPayload } from '../types/index.js';

/**
 * Static / reusable test data. For dynamic data, generate it inside tests
 * or add a faker-based builder here.
 */
export const newPost: CreatePostPayload = {
  userId: 1,
  title: 'API automation with Playwright',
  body: 'Validating POST /posts end to end.',
};

export const updatedPost: CreatePostPayload = {
  userId: 1,
  title: 'Updated title',
  body: 'Updated body content.',
};
