import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import LandingPage from './pages/Landing';
import JoinDatingPage from './pages/JoinDating';
import WaitingRoomPage from './pages/WaitingRoom';
import BoardPage from './pages/Board';
import DatingPage from './pages/Dating';
import ResultsPage from './pages/Results';
import { setupMockData, resetMockData, updateMockDatingStatus, getMockDating } from './utils/mockData';
import Button from './components/Common/Button';

// 개발 모드에서만 표시될 테스트 패널
function DevPanel() {
  const navigate = useNavigate();
  const [datingStatus, setDatingStatus] = useState('');

  // 현재 소개팅 상태 로드
  useEffect(() => {
    const dating = getMockDating();
    setDatingStatus(dating.status);
  }, []);

  // 데이터 리셋
  const handleReset = () => {
    resetMockData();
    window.location.href = '/';
  };

  // 소개팅 상태 변경
  const changeStatus = (status: 'created' | 'in_progress' | 'completed') => {
    updateMockDatingStatus(status);
    setDatingStatus(status);
  };

  return (
    <DevPanelContainer>
      <DevPanelTitle>개발 테스트 패널</DevPanelTitle>
      <StatusInfo>
        현재 상태: <StatusBadge status={datingStatus}>{datingStatus}</StatusBadge>
      </StatusInfo>
      <ButtonGroup>
        <DevButton onClick={() => navigate('/')}>홈</DevButton>
        <DevButton onClick={() => navigate('/board/MEET123')}>대시보드</DevButton>
        <DevButton onClick={() => navigate('/join/MEET123')}>참가하기</DevButton>
      </ButtonGroup>
      <ButtonGroup>
        <DevButton status="created" current={datingStatus} onClick={() => changeStatus('created')}>대기 상태</DevButton>
        <DevButton status="in_progress" current={datingStatus} onClick={() => changeStatus('in_progress')}>진행 상태</DevButton>
        <DevButton status="completed" current={datingStatus} onClick={() => changeStatus('completed')}>완료 상태</DevButton>
      </ButtonGroup>
      <ResetButton onClick={handleReset}>데이터 초기화</ResetButton>
    </DevPanelContainer>
  );
}

function App() {
  // 앱 시작 시 Mock 데이터 설정
  useEffect(() => {
    setupMockData();
  }, []);

  return (
    <Router>
      {true && <DevPanel />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/join/:accessCode" element={<JoinDatingPage />} />
        <Route path="/waiting/:accessCode" element={<WaitingRoomPage />} />
        <Route path="/dating/:accessCode" element={<DatingPage />} />
        <Route path="/results/:accessCode" element={<ResultsPage />} />
        <Route path="/board/:accessCode" element={<BoardPage />} />
      </Routes>
    </Router>
  );
}

// 스타일 컴포넌트
const DevPanelContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DevPanelTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  color: #333;
`;

const StatusInfo = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StatusBadge = styled.span<{ status: string }>`
  display: inline-block;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  
  background-color: ${props =>
    props.status === 'created' ? '#e3f2fd' :
      props.status === 'in_progress' ? '#e8f5e9' :
        props.status === 'completed' ? '#fff8e1' : '#f5f5f5'};
  
  color: ${props =>
    props.status === 'created' ? '#1976d2' :
      props.status === 'in_progress' ? '#388e3c' :
        props.status === 'completed' ? '#f57f17' : '#757575'};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const DevButton = styled.button<{ status?: string; current?: string }>`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  background-color: ${props =>
    props.status ? (
      props.status === props.current ?
        (props.status === 'created' ? '#bbdefb' :
          props.status === 'in_progress' ? '#c8e6c9' :
            props.status === 'completed' ? '#ffecb3' : '#e0e0e0')
        : '#f5f5f5'
    ) : '#f5f5f5'};
  
  color: ${props =>
    props.status ? (
      props.status === 'created' ? '#1976d2' :
        props.status === 'in_progress' ? '#388e3c' :
          props.status === 'completed' ? '#f57f17' : '#757575'
    ) : '#757575'};
  
  &:hover {
    opacity: 0.8;
  }
`;

const ResetButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  background-color: #ffcdd2;
  color: #d32f2f;
  cursor: pointer;
  
  &:hover {
    background-color: #ef9a9a;
  }
`;

export default App;
