import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';

import { UserRole, useUserStore } from '@/stores/useUserStore';

interface PublicRouteProps {
  children: ReactNode;
  requiredRoles?: UserRole[];
  redirectTo?: string;
}

export function PublicRoute({ children, requiredRoles, redirectTo = '/' }: PublicRouteProps) {
  const { user } = useUserStore();
  const location = useLocation();

  if (user !== null && !requiredRoles?.includes(user?.role)) {
    // location.state?.from이 있다면 그곳으로, 없으면 redirectTo로 이동
    const redirectPath = location.state?.from?.pathname || redirectTo;
    return <Navigate to={redirectPath} replace />;
  }

  // 로그인되지 않은 상태 - 정상 렌더링
  return <>{children}</>;
}
