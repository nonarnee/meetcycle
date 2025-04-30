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
