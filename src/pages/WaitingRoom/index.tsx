import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import BaseLayout from '../../components/Layout/BaseLayout';
import { getMockDating, getMockParticipants, updateMockDatingStatus } from '../../utils/mockData';
import { Participant } from '../../types';

interface LocationState {
  participantId: string;
  nickname: string;
  gender?: 'male' | 'female';
}

const WaitingRoomPage = () => {
  const { accessCode } = useParams<{ accessCode: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;

  // Mock 데이터 사용
  const [dating, setDating] = useState(getMockDating());
  const [participants, setParticipants] = useState<Participant[]>(getMockParticipants());
  const [currentParticipant, setCurrentParticipant] = useState<Participant | null>(null);

  // 현재 참가자 정보 찾기
  useEffect(() => {
    if (state?.participantId) {
      const participant = participants.find(p => p.id === state.participantId);
      if (participant) {
        setCurrentParticipant(participant);
      }
    }
  }, [state, participants]);

  // 데이터 정기적으로 가져오기
  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedDating = getMockDating();
      const updatedParticipants = getMockParticipants();

      setDating(updatedDating);
      setParticipants(updatedParticipants);

      // 소개팅이 시작되면 데이팅 페이지로 이동
      if (updatedDating.status === 'in_progress') {
        navigate(`/dating/${accessCode}`, {
          state: {
            participant: currentParticipant || {
              id: state?.participantId || 'unknown',
              nickname: state?.nickname || '참가자',
              gender: state?.gender || 'male',
              matches: {}
            }
          }
        });
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, [accessCode, navigate, state, currentParticipant]);

  const maleCounts = participants.filter(p => p.gender === 'male').length;
  const femaleCounts = participants.filter(p => p.gender === 'female').length;

  const headerRight = (
    <ParticipantBadge>{state?.nickname || '참가자'}</ParticipantBadge>
  );

  return (
    <BaseLayout rightContent={headerRight}>
      <ContentWrapper>
        <WaitingCard>
          <WaitingCardHeader>
            <h2>소개팅 대기실</h2>
            <EventTitle>{dating.title}</EventTitle>
          </WaitingCardHeader>

          <WaitingInfo>
            <StatusSection>
              <h3>소개팅 상태</h3>
              <StatusBadge status={dating.status}>
                {dating.status === 'created' ? '대기 중' :
                  dating.status === 'in_progress' ? '진행 중' : '완료됨'}
              </StatusBadge>
              <StatusText>
                호스트가 소개팅을 시작하기를 기다리고 있습니다.
                모든 참가자가 입장하면 곧 시작됩니다.
              </StatusText>
            </StatusSection>

            <CountsSection>
              <CountsTitle>참가자 현황</CountsTitle>
              <CountsGrid>
                <CountsItem>
                  <CountsLabel>남성</CountsLabel>
                  <CountsValue>{maleCounts} / {dating.maleCount}</CountsValue>
                </CountsItem>
                <CountsItem>
                  <CountsLabel>여성</CountsLabel>
                  <CountsValue>{femaleCounts} / {dating.femaleCount}</CountsValue>
                </CountsItem>
                <CountsItem>
                  <CountsLabel>전체</CountsLabel>
                  <CountsValue>
                    {participants.length} / {dating.maleCount + dating.femaleCount}
                  </CountsValue>
                </CountsItem>
              </CountsGrid>
            </CountsSection>

            <ParticipantsSection>
              <h3>참가자 목록</h3>
              <ParticipantList>
                {participants.map((participant: Participant) => (
                  <ParticipantItem key={participant.id}>
                    <ParticipantAvatar gender={participant.gender}>
                      {participant.nickname.charAt(0)}
                    </ParticipantAvatar>
                    <ParticipantName>
                      {participant.nickname}
                    </ParticipantName>
                    <ParticipantGender>
                      {participant.gender === 'male' ? '남성' : '여성'}
                    </ParticipantGender>
                  </ParticipantItem>
                ))}
              </ParticipantList>
            </ParticipantsSection>
          </WaitingInfo>
        </WaitingCard>
      </ContentWrapper>
    </BaseLayout>
  );
};

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ParticipantBadge = styled.div`
  background-color: #f06292;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const WaitingCard = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const WaitingCardHeader = styled.div`
  padding: 1.5rem;
  background-color: #f8f8f8;
  border-bottom: 1px solid #eee;
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
    color: #333;
  }
`;

const EventTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
  color: #f06292;
`;

const WaitingInfo = styled.div`
  padding: 1.5rem;
`;

const StatusSection = styled.section`
  margin-bottom: 2rem;
  
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: #333;
  }
`;

const StatusBadge = styled.div<{ status: string }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
  
  background-color: ${props =>
    props.status === 'created' ? '#e3f2fd' :
      props.status === 'in_progress' ? '#e8f5e9' : '#fff8e1'};
  
  color: ${props =>
    props.status === 'created' ? '#1976d2' :
      props.status === 'in_progress' ? '#388e3c' : '#f57f17'};
`;

const StatusText = styled.p`
  color: #666;
  line-height: 1.5;
`;

const CountsSection = styled.section`
  margin-bottom: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
`;

const CountsTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: #333;
`;

const CountsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const CountsItem = styled.div`
  text-align: center;
`;

const CountsLabel = styled.div`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

const CountsValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
`;

const ParticipantsSection = styled.section`
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: #333;
  }
`;

const ParticipantList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ParticipantItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const ParticipantAvatar = styled.div<{ gender: string }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  font-weight: 600;
  
  background-color: ${props => props.gender === 'male' ? '#bbdefb' : '#f8bbd0'};
  color: ${props => props.gender === 'male' ? '#1565c0' : '#c2185b'};
`;

const ParticipantName = styled.div`
  font-weight: 500;
  flex: 1;
`;

const ParticipantGender = styled.div`
  font-size: 0.75rem;
  color: #666;
  background-color: #f1f1f1;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

export default WaitingRoomPage; 
