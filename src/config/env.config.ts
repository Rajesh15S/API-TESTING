import dotenv from 'dotenv';

dotenv.config();

/**
 * Centralized, type-safe access to environment configuration.
 * Add new env vars here so the rest of the codebase reads from one place.
 */
export const env = {
  baseURL: process.env.BASE_URL ?? 'https://jsonplaceholder.typicode.com',
  apiToken: process.env.API_TOKEN ?? '',
  apiKey: process.env.API_KEY ?? '',
  username: process.env.TEST_USERNAME ?? '',
  password: process.env.TEST_PASSWORD ?? '',
  environment: process.env.ENV ?? 'dev',
} as const;
