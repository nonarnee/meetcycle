import { create } from 'zustand';

import { AuthState, User } from '@/types/auth';

interface AuthStore extends AuthState {
  login: (user: User) => void;
  logout: () => void;
  setAccessToken: (accessToken: string) => void;
  getAccessToken: () => string | null;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isAuthenticated: false,
  accessToken: null,

  setAccessToken: (accessToken: string) => {
    set({ accessToken });
  },

  getAccessToken: () => {
    return get().accessToken;
  },

  login: (user) => {
    if (!user) {
      console.error('Failure to login at Store');
      return;
    }

    set({ user, isAuthenticated: true });
  },

  logout: () => {
    set({ user: null, accessToken: null, isAuthenticated: false });
  },
}));
