import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { useEffect } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import LandingPage from './pages/Landing';
import JoinDatingPage from './pages/JoinDating';
import WaitingRoomPage from './pages/WaitingRoom';
import BoardPage from './pages/Board';
import DatingPage from './pages/Dating';
import ResultsPage from './pages/Results';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import { setupMockData } from './utils/mockData';
import { queryClient } from './lib/queryClient';

function App() {
  // 앱 시작 시 Mock 데이터 설정
  useEffect(() => {
    setupMockData();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />

          {/* 구현중 */}
          <Route path='/register' element={<RegisterPage />} />

          <Route path='/join/:accessCode' element={<JoinDatingPage />} />
          <Route path='/waiting/:accessCode' element={<WaitingRoomPage />} />
          <Route path='/dating/:accessCode' element={<DatingPage />} />
          <Route path='/results/:accessCode' element={<ResultsPage />} />
          <Route path='/board/:meetingId' element={<BoardPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
