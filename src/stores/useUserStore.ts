import { create } from 'zustand';

export enum UserRole {
  ADMIN = 'admin',
  HOST = 'host',
  PARTICIPANT = 'participant',
}

export interface User {
  id: string;
  nickname: string;
  role: UserRole;
}

interface UserState {
  user: User | null;
  isLoading: boolean;
  setUser: (user: User) => void;
  setLoading: (isLoading: boolean) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  isLoading: true,
  setUser: (user: User) => set({ user }),
  setLoading: (isLoading: boolean) => set({ isLoading }),
  clearUser: () => {
    set({
      user: null,
    });
  },
}));
