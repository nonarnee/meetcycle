import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import BoardPage from './pages/Board';
import JoinDatingPage from './pages/JoinDating';
import WaitingRoomPage from './pages/WaitingRoom';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/board/:accessCode" element={<BoardPage />} />
        <Route path="/join/:accessCode" element={<JoinDatingPage />} />
        <Route path="/waiting/:accessCode" element={<WaitingRoomPage />} />
      </Routes>
    </Router>
  );
}

export default App;
