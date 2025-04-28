import { create } from 'zustand';
import { AuthState, LoginCredentials, RegisterCredentials, User } from '../types/auth';

interface AuthStore extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  setError: (error: string | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  login: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      // TODO: 실제 API 호출로 대체
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        name: 'Test User',
      };
      
      set({ user: mockUser, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ error: '로그인에 실패했습니다.', isLoading: false });
    }
  },

  register: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      // TODO: 실제 API 호출로 대체
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        name: credentials.name,
      };
      
      set({ user: mockUser, isAuthenticated: true, isLoading: false });
    } catch (error) {
      set({ error: '회원가입에 실패했습니다.', isLoading: false });
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

  setError: (error) => set({ error }),
})); 
