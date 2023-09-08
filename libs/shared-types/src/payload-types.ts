/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    categories: Category;
    pages: Page;
    posts: Post;
    tags: Tag;
  };
  globals: {};
}
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  verified: boolean;
  roles: ('admin' | 'user')[];
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  _verified: boolean;
  _verificationToken?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Category {
  id: string;
  name?: string;
}
export interface Page {
  id: string;
  title?: string;
  publishedDate?: string;
  tags?: string[] | Tag[];
  content?: {
    [k: string]: unknown;
  }[];
  status?: 'draft' | 'published';
  updatedAt: string;
  createdAt: string;
}
export interface Tag {
  id: string;
  name?: string;
}
export interface Post {
  id: string;
  title?: string;
  author?: string | User;
  publishedDate?: string;
  category?: string | Category;
  tags?: string[] | Tag[];
  content?: {
    [k: string]: unknown;
  }[];
  status?: 'draft' | 'published';
  updatedAt: string;
  createdAt: string;
}
