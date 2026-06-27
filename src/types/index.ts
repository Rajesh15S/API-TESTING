/**
 * Shared types for request payloads and response models.
 * Add interfaces for the resources your API exposes.
 */

// Example resource model (matches jsonplaceholder /posts)
export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export type CreatePostPayload = Omit<Post, 'id'>;

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Generic API error shape
export interface ApiError {
  status: number;
  message: string;
  details?: unknown;
}
