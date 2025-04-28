import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import styled from '@emotion/styled';

import BaseLayout from '../../components/Layout/BaseLayout';
import Button from '../../components/Common/Button';

// 가상 데이터 타입 정의
interface Participant {
  id: string;
  name: string;
  gender: 'male' | 'female';
  likes: string[]; // 관심있는 참가자들의 ID
  matches: string[]; // 상호 매칭된 참가자들의 ID
}

interface DatingEvent {
  id: string;
  accessCode: string;
  title: string;
  date: string;
  status: 'completed' | 'in-progress' | 'pending';
  hostId: string;
  participants: Participant[];
}

// 가상 데이터
const MOCK_DATING: DatingEvent = {
  id: '1',
  accessCode: 'ABC123',
  title: '봄맞이 스피드 데이팅',
  date: '2023-04-15',
  status: 'completed',
  hostId: 'host1',
  participants: [
    { id: 'p1', name: '김민준', gender: 'male', likes: ['p3', 'p5'], matches: ['p3'] },
    { id: 'p2', name: '이지훈', gender: 'male', likes: ['p5'], matches: [] },
    { id: 'p3', name: '박지은', gender: 'female', likes: ['p1', 'p4'], matches: ['p1'] },
    { id: 'p4', name: '최현우', gender: 'male', likes: ['p5', 'p7'], matches: ['p7'] },
    { id: 'p5', name: '정수아', gender: 'female', likes: ['p2', 'p6'], matches: [] },
    { id: 'p6', name: '강준호', gender: 'male', likes: ['p7'], matches: [] },
    { id: 'p7', name: '윤서연', gender: 'female', likes: ['p4', 'p6'], matches: ['p4'] },
  ],
};

const ResultsPage: React.FC = () => {
  const { accessCode } = useParams<{ accessCode: string }>();
  const navigate = useNavigate();
  const [dating, setDating] = useState<DatingEvent | null>(null);
  const [isHost] = useState(false); // 호스트 여부 판단 (실제로는 로그인 정보 등으로 판단)
  const [userId] = useState('p1'); // 임시 사용자 ID (실제로는 로그인 정보 등으로 판단)

  useEffect(() => {
    // 실제 구현에서는 서버에서 데이터를 가져오는 API 호출이 필요합니다
    if (accessCode) {
      setDating(MOCK_DATING);
    }
  }, [accessCode]);

  // 매칭률 계산 함수
  const calculateMatchRate = () => {
    if (!dating) return 0;

    const totalParticipants = dating.participants.length;
    const totalPossibleMatches = (totalParticipants * (totalParticipants - 1)) / 2;
    const actualMatches = new Set();

    dating.participants.forEach((p) => {
      p.matches.forEach((matchId) => {
        const matchPair = [p.id, matchId].sort().join('-');
        actualMatches.add(matchPair);
      });
    });

    return Math.round((actualMatches.size / totalPossibleMatches) * 100);
  };

  // 사용자의 매칭 결과 렌더링
  const renderUserResults = () => {
    if (!dating) return null;

    const currentUser = dating.participants.find((p) => p.id === userId);
    if (!currentUser) return <div>참가자 정보를 찾을 수 없습니다.</div>;

    return (
      <UserResultsContainer>
        <h2>나의 매칭 결과</h2>
        {currentUser.matches.length > 0 ? (
          <MatchList>
            {currentUser.matches.map((matchId) => {
              const matchedUser = dating.participants.find((p) => p.id === matchId);
              return (
                <MatchCard key={matchId}>
                  <p>
                    <strong>{matchedUser?.name}</strong>님과 매칭되었습니다!
                  </p>
                </MatchCard>
              );
            })}
          </MatchList>
        ) : (
          <NoMatchesMessage>매칭된 참가자가 없습니다.</NoMatchesMessage>
        )}
      </UserResultsContainer>
    );
  };

  // 호스트 뷰 - 모든 참가자의 매칭 결과 렌더링
  const renderHostResults = () => {
    if (!dating) return null;

    const matchRate = calculateMatchRate();

    return (
      <HostResultsContainer>
        <SummarySection>
          <SummaryCard>
            <h3>총 참가자</h3>
            <p>{dating.participants.length}명</p>
          </SummaryCard>
          <SummaryCard>
            <h3>매칭 성사율</h3>
            <p>{matchRate}%</p>
          </SummaryCard>
          <SummaryCard>
            <h3>매칭 성사 수</h3>
            <p>{dating.participants.reduce((acc, p) => acc + p.matches.length, 0) / 2}쌍</p>
          </SummaryCard>
        </SummarySection>

        <ParticipantResultsSection>
          <h2>참가자 결과</h2>
          <ParticipantTable>
            <thead>
              <tr>
                <th>이름</th>
                <th>성별</th>
                <th>관심 표현</th>
                <th>매칭 결과</th>
                <th>매칭율</th>
              </tr>
            </thead>
            <tbody>
              {dating.participants.map((participant) => {
                const likedParticipants = participant.likes
                  .map((id) => dating.participants.find((p) => p.id === id)?.name)
                  .filter(Boolean);

                const matchedParticipants = participant.matches
                  .map((id) => dating.participants.find((p) => p.id === id)?.name)
                  .filter(Boolean);

                const matchRate =
                  participant.likes.length > 0
                    ? Math.round((participant.matches.length / participant.likes.length) * 100)
                    : 0;

                return (
                  <tr key={participant.id}>
                    <td>{participant.name}</td>
                    <td>{participant.gender === 'male' ? '남성' : '여성'}</td>
                    <td>{likedParticipants.join(', ') || '없음'}</td>
                    <td>{matchedParticipants.join(', ') || '없음'}</td>
                    <td>{matchRate}%</td>
                  </tr>
                );
              })}
            </tbody>
          </ParticipantTable>
        </ParticipantResultsSection>
      </HostResultsContainer>
    );
  };

  if (!dating) {
    return (
      <BaseLayout>
        <LoadingContainer>데이터를 불러오는 중...</LoadingContainer>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <ResultsContainer>
        <ResultsHeader>
          <h1>{dating.title} 결과</h1>
          <ResultsDate>{dating.date} 진행</ResultsDate>
        </ResultsHeader>

        {isHost ? renderHostResults() : renderUserResults()}

        <ActionButtons>
          <Button onClick={() => navigate('/')} variant='outline'>
            홈으로
          </Button>
          {isHost && (
            <Button onClick={() => navigate(`/board/${accessCode}`)} variant='primary'>
              이벤트 관리로 돌아가기
            </Button>
          )}
        </ActionButtons>
      </ResultsContainer>
    </BaseLayout>
  );
};

// 스타일 컴포넌트
const ResultsContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
`;

const ResultsHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

const ResultsDate = styled.p`
  color: #666;
  font-size: 1rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.2rem;
`;

const UserResultsContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

const MatchList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MatchCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  p {
    font-size: 1.1rem;
  }
`;

const NoMatchesMessage = styled.p`
  color: #666;
  font-size: 1.1rem;
  text-align: center;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HostResultsContainer = styled.div`
  margin-bottom: 2rem;
`;

const SummarySection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SummaryCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1rem;
    color: #666;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
    color: #007bff;
  }
`;

const ParticipantResultsSection = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

const ParticipantTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f1f1f1;
    font-weight: 600;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:hover td {
    background-color: #f1f1f1;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export default ResultsPage;
