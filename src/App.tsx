import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';

import LandingPage from './pages/Landing';
import JoinDatingPage from './pages/JoinDating';
import WaitingRoomPage from './pages/WaitingRoom';
import BoardPage from './pages/Board';
import DatingPage from './pages/Dating';
import ResultsPage from './pages/Results';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import { queryClient } from './lib/queryClient';
import { UserRole, useUserStore } from './stores/useUserStore';
import api from './lib/api';
import { AuthRoute } from './components/AuthRoute';
import { PublicRoute } from './components/PublicRoute';
import { isSafariPrivate } from './utils/isSafariPrivate';
import ErrorPage from './pages/Errors';

function App() {
  const { setUser, clearUser, setLoading } = useUserStore();

  useEffect(() => {
    if (isSafariPrivate()) {
      alert('Safari inPrivate Mode는 지원하지 않습니다.');
      window.location.href = '/error';
    }
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await api.get('/auth/me');
        setUser(response.data);
      } catch (error) {
        console.error('사용자 정보 조회 실패:', error);
        clearUser();
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />

          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route
            path='/join/:meetingId'
            element={
              <PublicRoute requiredRoles={[UserRole.ADMIN, UserRole.PARTICIPANT]}>
                <JoinDatingPage />
              </PublicRoute>
            }
          />

          <Route
            path='/waiting/:meetingId'
            element={
              <AuthRoute requiredRoles={[UserRole.ADMIN, UserRole.PARTICIPANT]}>
                <WaitingRoomPage />
              </AuthRoute>
            }
          />
          <Route
            path='/dating/:meetingId'
            element={
              <AuthRoute requiredRoles={[UserRole.ADMIN, UserRole.PARTICIPANT]}>
                <DatingPage />
              </AuthRoute>
            }
          />
          <Route
            path='/results/:meetingId'
            element={
              <AuthRoute requiredRoles={[UserRole.ADMIN, UserRole.PARTICIPANT]}>
                <ResultsPage />
              </AuthRoute>
            }
          />

          <Route
            path='/board/:meetingId'
            element={
              <AuthRoute requiredRoles={[UserRole.ADMIN, UserRole.HOST]}>
                <BoardPage />
              </AuthRoute>
            }
          />

          <Route path='/error' element={<ErrorPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
