export interface User {
  id: string;
  email: string;
  nickname: string;
  profileImage?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  accessToken: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  nickname: string;
  profileImage?: string;
}

export interface RegisterForm {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}
