/* eslint-disable no-console */

/**
 * Lightweight logger. Swap for winston/pino later if structured logs are needed.
 */
const timestamp = (): string => new Date().toISOString();

export const logger = {
  info: (message: string, ...args: unknown[]): void => {
    console.log(`[INFO]  ${timestamp()} ${message}`, ...args);
  },
  warn: (message: string, ...args: unknown[]): void => {
    console.warn(`[WARN]  ${timestamp()} ${message}`, ...args);
  },
  error: (message: string, ...args: unknown[]): void => {
    console.error(`[ERROR] ${timestamp()} ${message}`, ...args);
  },
  debug: (message: string, ...args: unknown[]): void => {
    if (process.env.DEBUG) {
      console.debug(`[DEBUG] ${timestamp()} ${message}`, ...args);
    }
  },
};
