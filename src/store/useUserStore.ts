import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  token: string | null;
  userId: string | null;
  isAuthenticated: boolean;

  // 세션 확인 메서드
  validateSession: (meetingId: string) => Promise<boolean>;

  // 로그아웃
  clearSession: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      token: null,
      userId: null,
      isAuthenticated: false,

      // 세션 유효성 검증
      validateSession: async (meetingId) => {
        const { token } = get();
        if (!token) return false;

        try {
          const response = await fetch('/api/meeting/validate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ meetingId }),
          });

          if (!response.ok) {
            // 토큰이 유효하지 않음
            get().clearSession();
            return false;
          }

          return true;
        } catch (error) {
          console.error('세션 검증 에러:', error);
          return false;
        }
      },

      // 세션 클리어
      clearSession: () => {
        set({
          token: null,
          userId: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: 'meeting-user-storage',
      // 저장할 상태 필드 지정
      partialize: (state) => ({
        token: state.token,
        userId: state.userId,
      }),
    },
  ),
);
