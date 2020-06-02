export interface UserData {
  username: string;
  password: string;
  nickname?: string;
}

export interface SignUpRequest extends UserData {
  nickname: string;
}

export type LoginRequest = UserData;

export interface SignUpResponse {
  _id: string;
  username: string;
  password: string;
  insertedDate: string;
  created_at: string;
  updatedAt: string;
}

export interface LoginResponse {
  success: boolean;
  user: UserData;
  message: string;
  token: string;
}
