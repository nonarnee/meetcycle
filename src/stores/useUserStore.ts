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
  setUser: (user: User) => void;

  clearUser: () => void;
}

export const useUserStore = create<UserState>()((set) => ({
  user: null,
  setUser: (user: User) => set({ user }),

  clearUser: () => {
    set({
      user: null,
    });
  },
}));
