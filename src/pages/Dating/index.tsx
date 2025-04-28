import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router';
import styled from '@emotion/styled';

import { Participant, Round, Table } from '../../types';
import { generateAllRounds, updateParticipantMatch } from '../../utils';
import { getMockDating, updateMockParticipant, updateMockDatingStatus } from '../../utils/mockData';
import BaseLayout from '../../components/Layout/BaseLayout';
import Button from '../../components/Common/Button';

interface LocationState {
  isHost?: boolean;
  participant?: Participant;
}

const DatingPage = () => {
  const { accessCode } = useParams<{ accessCode: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const state = (location.state as LocationState) || {};

  // Mock 데이터 사용
  const [dating, setDating] = useState(getMockDating());
  const [currentParticipant, setCurrentParticipant] = useState<Participant | null>(
    state.participant || null,
  );
  const [isHost] = useState<boolean>(state.isHost || false);

  const [rounds, setRounds] = useState<Round[]>([]);
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [currentTable, setCurrentTable] = useState<Table | null>(null);
  const [remainingTime, setRemainingTime] = useState(dating.timeLimit * 60); // 초 단위
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [wantsToMatch, setWantsToMatch] = useState<boolean>(false);
  const [allRoundsCompleted, setAllRoundsCompleted] = useState(false);

  // 상태 변경시 데이터 갱신
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDating(getMockDating());
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  // 호스트 모드인 경우 상태 확인
  useEffect(() => {
    if (isHost && !currentParticipant) {
      // 호스트 모드로 설정했지만 참가자 정보가 없으면 생성
      setCurrentParticipant({
        id: 'host',
        nickname: '호스트',
        gender: 'male', // 기본값 설정
        matches: {},
      });
    }
  }, [isHost, currentParticipant]);

  // 소개팅 라운드 생성
  useEffect(() => {
    if (dating && dating.participants.length > 0) {
      const maleParticipants = dating.participants.filter((p: Participant) => p.gender === 'male');
      const femaleParticipants = dating.participants.filter(
        (p: Participant) => p.gender === 'female',
      );
      const generatedRounds = generateAllRounds(maleParticipants, femaleParticipants);
      setRounds(generatedRounds);
    }
  }, [dating]);

  // 현재 테이블 찾기
  useEffect(() => {
    if (!currentParticipant || rounds.length === 0 || currentRoundIndex >= rounds.length) {
      return;
    }

    const currentRound = rounds[currentRoundIndex];
    const table = currentRound.tables.find(
      (table) =>
        table.maleParticipant.id === currentParticipant.id ||
        table.femaleParticipant.id === currentParticipant.id,
    );

    setCurrentTable(table || null);
  }, [currentParticipant, rounds, currentRoundIndex]);

  // 타이머 설정
  useEffect(() => {
    if (allRoundsCompleted) return;

    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          setShowMatchModal(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentRoundIndex, allRoundsCompleted]);

  // 타이머 포맷팅
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // 다음 라운드로 이동
  const moveToNextRound = () => {
    if (currentRoundIndex + 1 < rounds.length) {
      setCurrentRoundIndex((prev) => prev + 1);
      setRemainingTime(dating.timeLimit * 60);
      setShowMatchModal(false);
    } else {
      setAllRoundsCompleted(true);
      // 호스트인 경우 소개팅 상태를 완료로 변경
      if (isHost) {
        updateMockDatingStatus('completed');
      }
    }
  };

  // 매치 선택 제출 함수 수정
  const submitMatchChoice = () => {
    if (!currentParticipant || !currentTable) return;

    const targetParticipant =
      currentParticipant.gender === 'male'
        ? currentTable.femaleParticipant
        : currentTable.maleParticipant;

    // 현재 참가자 정보 업데이트
    const updatedParticipant = updateParticipantMatch(
      currentParticipant,
      targetParticipant.id,
      wantsToMatch,
    );

    // Mock 데이터에 업데이트
    updateMockParticipant(currentParticipant.id, {
      ...currentParticipant,
      matches: {
        ...currentParticipant.matches,
        [targetParticipant.id]: wantsToMatch,
      },
    });

    setCurrentParticipant(updatedParticipant);

    console.log(
      `${currentParticipant.nickname}이(가) ${targetParticipant.nickname}과(와)의 매치를 ${wantsToMatch ? '원합니다' : '원하지 않습니다'}.`,
    );

    moveToNextRound();
  };

  // 결과 페이지로 이동
  const navigateToResults = () => {
    navigate(`/results/${accessCode}`, {
      state: {
        participant: currentParticipant,
        isHost,
      },
    });
  };

  // 대시보드로 돌아가기 (호스트용)
  const navigateToBoard = () => {
    navigate(`/board/${accessCode}`);
  };

  // 상대방 정보 표시
  const getPartnerInfo = () => {
    if (!currentParticipant || !currentTable) return null;

    const partner =
      currentParticipant.gender === 'male'
        ? currentTable.femaleParticipant
        : currentTable.maleParticipant;

    return (
      <PartnerInfo>
        <PartnerAvatar>{partner.nickname.charAt(0)}</PartnerAvatar>
        <PartnerName>{partner.nickname}</PartnerName>
      </PartnerInfo>
    );
  };

  // 헤더 우측 컨텐츠 (참가자 정보)
  const headerRight = currentParticipant ? (
    <ParticipantBadge>{isHost ? '호스트 모드' : currentParticipant.nickname}</ParticipantBadge>
  ) : null;

  if (!currentParticipant && !isHost) {
    return (
      <BaseLayout>
        <ErrorMessage>
          <h2>참가자 정보를 찾을 수 없습니다.</h2>
          <p>올바른 경로로 접근했는지 확인해주세요.</p>
          <Button onClick={() => navigate('/')} variant='outline'>
            홈으로 돌아가기
          </Button>
        </ErrorMessage>
      </BaseLayout>
    );
  }

  if (!rounds.length && dating.status === 'in_progress') {
    return (
      <BaseLayout rightContent={headerRight}>
        <Container>
          <LoadingCard>
            <h2>소개팅 준비 중...</h2>
            <p>참가자 정보를 불러오는 중입니다. 잠시만 기다려주세요.</p>
            {isHost && (
              <Button onClick={navigateToBoard} variant='outline'>
                대시보드로 돌아가기
              </Button>
            )}
          </LoadingCard>
        </Container>
      </BaseLayout>
    );
  }

  if (allRoundsCompleted) {
    return (
      <BaseLayout rightContent={headerRight}>
        <Container>
          <CompletionCard>
            <h2>모든 라운드가 끝났습니다!</h2>
            <p>모든 소개팅 라운드가 완료되었습니다. 결과 페이지로 이동하세요.</p>
            <Button onClick={navigateToResults} variant='primary' size='large'>
              결과 확인하기
            </Button>
          </CompletionCard>
        </Container>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout rightContent={headerRight}>
      <Container>
        <DatingHeader>
          <RoundInfo>
            <h2>
              라운드 {currentRoundIndex + 1}/{rounds.length}
            </h2>
            <p>테이블 {currentTable?.id}</p>
          </RoundInfo>
          <Timer isLow={remainingTime < 60}>{formatTime(remainingTime)}</Timer>
        </DatingHeader>

        <DatingContent>
          {getPartnerInfo()}

          <ConversationTips>
            <h3>대화 도움말</h3>
            <TipsList>
              <TipItem>취미나 관심사에 대해 이야기해보세요.</TipItem>
              <TipItem>최근에 본 영화나 책에 대해 물어보세요.</TipItem>
              <TipItem>좋아하는 음식이나 여행지를 공유해보세요.</TipItem>
              <TipItem>평소 주말은 어떻게 보내는지 물어보세요.</TipItem>
            </TipsList>
          </ConversationTips>
        </DatingContent>
      </Container>

      {/* 매치 선택 모달 */}
      {showMatchModal && currentParticipant && (
        <ModalOverlay>
          <MatchModal>
            <h2>매치 선택하기</h2>
            <p>
              {currentParticipant.gender === 'male' ? '여성' : '남성'} 참가자와 더 만남을 이어가고
              싶으신가요?
            </p>

            <MatchChoices>
              <MatchChoice
                selected={wantsToMatch}
                positive={true}
                onClick={() => setWantsToMatch(true)}
              >
                <span>👍</span> 네, 더 만나고 싶어요
              </MatchChoice>

              <MatchChoice
                selected={!wantsToMatch}
                positive={false}
                onClick={() => setWantsToMatch(false)}
              >
                <span>👎</span> 아니오, 다른 분과 만나고 싶어요
              </MatchChoice>
            </MatchChoices>

            <Button onClick={submitMatchChoice} variant='primary' size='large' fullWidth>
              선택 완료
            </Button>
          </MatchModal>
        </ModalOverlay>
      )}
    </BaseLayout>
  );
};

// 스타일 컴포넌트
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`;

const ParticipantBadge = styled.div`
  background-color: #f06292;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const DatingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const RoundInfo = styled.div`
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.25rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin: 0;
  }
`;

const Timer = styled.div<{ isLow: boolean }>`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => (props.isLow ? '#f44336' : '#333')};
  animation: ${(props) => (props.isLow ? 'pulse 1s infinite' : 'none')};

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const DatingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PartnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const PartnerAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: #f06292;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const PartnerName = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;

const ConversationTips = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: #333;
  }
`;

const TipsList = styled.ul`
  padding-left: 1.5rem;
  margin: 0;
`;

const TipItem = styled.li`
  margin-bottom: 0.5rem;
  color: #555;
  line-height: 1.4;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const MatchModal = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }
`;

const MatchChoices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const MatchChoice = styled.div<{ selected: boolean; positive: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${(props) =>
    props.selected ? (props.positive ? '#e8f5e9' : '#ffebee') : '#f5f5f5'};
  border: 2px solid
    ${(props) => (props.selected ? (props.positive ? '#66bb6a' : '#ef5350') : 'transparent')};
  cursor: pointer;
  transition: all 0.2s;

  span {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: ${(props) => (props.positive ? '#e8f5e9' : '#ffebee')};
  }
`;

const CompletionCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }
`;

const LoadingCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: #333;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
    line-height: 1.4;
  }
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;

  h2 {
    font-size: 1.5rem;
    color: #d32f2f;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
  }
`;

export default DatingPage;
