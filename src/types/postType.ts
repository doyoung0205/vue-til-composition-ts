export interface PostRequest {
  title: string;
  contents: string;
}

export interface PostResponse {
  title: string;
  contents: string;
  createdBy?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface PostListResponse {
  posts: PostResponse[];
}
