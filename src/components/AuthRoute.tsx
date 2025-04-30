import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';

import { UserRole, useUserStore } from '@/stores/useUserStore';

interface AuthRouteProps {
  children: ReactNode;
  requiredRoles?: UserRole[];
  redirectTo?: string;
  fallback?: ReactNode;
}

export function AuthRoute({
  children,
  requiredRoles,
  redirectTo = '/login',
  fallback = <div>로딩 중...</div>,
}: AuthRouteProps) {
  const { user } = useUserStore();
  const location = useLocation();

  // 사용자 정보 로딩 중
  if (user === undefined) {
    return <>{fallback}</>;
  }

  // 로그인 체크
  if (user === null) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // 권한 체크
  if (requiredRoles && requiredRoles.length > 0) {
    const hasRequiredRole = requiredRoles.includes(user.role);
    if (!hasRequiredRole) {
      return <Navigate to={redirectTo} state={{ from: location }} replace />;
    }
  }

  // 정상 렌더링
  return <>{children}</>;
}
