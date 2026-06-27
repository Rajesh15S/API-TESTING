import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

export default defineConfig({
  testDir: './tests',
  // Run tests in files in parallel
  fullyParallel: true,
  // Fail the build on CI if test.only is left in the source code
  forbidOnly: !!process.env.CI,
  // Retry failed tests
  retries: process.env.CI ? 2 : 0,
  // Limit parallel workers on CI
  workers: process.env.CI ? 1 : undefined,
  // Reporters
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'test-results/results.json' }],
  ],
  // Shared settings for all projects
  use: {
    // Base URL for API requests
    baseURL: "https://restful-booker.herokuapp.com",
    // Default headers sent with every request
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization : "Basic YWRtaW46cGFzc3dvcmQxMjM=",
    },
    // Capture trace on failure for debugging
    trace: 'on-first-retry',
    // Ignore HTTPS errors (useful for internal/test environments)
    ignoreHTTPSErrors: true,
  },
  // Global timeout per test
  timeout: 30_000,
  expect: {
    timeout: 10_000,
  },
  // Test projects
  projects: [
    {
      name: 'api',
      testDir: './tests/api',
    },
  ],
});
