import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';

import { useUserStore } from '@/stores/useUserStore';

interface PublicOnlyRouteProps {
  children: ReactNode;
  redirectTo?: string; // 로그인된 사용자를 리다이렉트할 경로
  fallback?: ReactNode; // 로딩 중일 때 표시할 컴포넌트
}

/**
 * 비로그인 사용자만 접근할 수 있는 라우트
 * 로그인된 사용자는 redirectTo로 리다이렉트됨
 */
export function PublicOnlyRoute({
  children,
  redirectTo = '/',
  fallback = <div>로딩 중...</div>,
}: PublicOnlyRouteProps) {
  const { user } = useUserStore();
  const location = useLocation();

  // 사용자 정보 로딩 중
  if (user === undefined) {
    return <>{fallback}</>;
  }

  // 이미 로그인된 경우 리다이렉트
  if (user !== null) {
    // location.state?.from이 있다면 그곳으로, 없으면 redirectTo로 이동
    const redirectPath = location.state?.from?.pathname || redirectTo;
    return <Navigate to={redirectPath} replace />;
  }

  // 로그인되지 않은 상태 - 정상 렌더링
  return <>{children}</>;
}
