import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';

import LandingPage from './pages/Landing';
import JoinDatingPage from './pages/JoinDating';
import WaitingRoomPage from './pages/WaitingRoom';
import BoardPage from './pages/Board';
import DatingPage from './pages/Dating';
import ResultsPage from './pages/Results';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import { queryClient } from './lib/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          <Route path='/join/:meetingId' element={<JoinDatingPage />} />
          <Route path='/waiting/:meetingId' element={<WaitingRoomPage />} />
          <Route path='/dating/:meetingId' element={<DatingPage />} />
          <Route path='/results/:meetingId' element={<ResultsPage />} />
          <Route path='/board/:meetingId' element={<BoardPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
