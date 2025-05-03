import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useUserStore } from '@/stores/useUserStore';
import { useCountdown } from '@/hooks/useCountdown';
import { MeetingStatus } from '@/types/meeting';

import BaseLayout from '../../components/Layout/BaseLayout';
import Button from '../../components/Common/Button';

import useDating from './hooks/queries/useDating';
import InfoSection from './components/InfoSection';
import useLikeMutation from './hooks/mutations/useLikeMutation';

export default function DatingPage() {
  const navigate = useNavigate();
  const { meetingId } = useParams<{ meetingId: string }>();

  const { user } = useUserStore();
  const { data: dating, refetch: refetchDating } = useDating({ participantId: user?.id ?? '' });
  const { mutate: likeMutation } = useLikeMutation();
  const { remainingSeconds, format, isOver } = useCountdown(new Date(dating?.endTime ?? ''));

  const [showMatchModal, setShowMatchModal] = useState(false);
  const [like, setLike] = useState<boolean | null>(null);

  const isCompleted = dating?.result !== null;

  const handleOpenMatchModal = () => {
    setShowMatchModal(true);
  };

  const handleCloseMatchModal = () => {
    setShowMatchModal(false);
  };

  const handleClickResult = () => {
    navigate(`/results/${meetingId}`, { replace: true });
  };

  const handleSelectMatch = () => {
    if (like === null) {
      alert('선택을 해주세요.');
      return;
    }

    if (window.confirm('선택을 완료하시겠습니까?')) {
      likeMutation(
        {
          roomId: dating?.roomId ?? '',
          from: user?.id ?? '',
          to: dating?.partner?._id ?? '',
          result: like,
        },
        {
          onSuccess: () => {
            refetchDating();
            setShowMatchModal(false);
          },
        },
      );
    }
  };

  return (
    <BaseLayout>
      <Container>
        <DatingHeader>
          <Timer isLow={remainingSeconds < 60}>
            {isOver && '시간 종료'}
            {!isOver && `${format.minute} : ${format.second}`}
          </Timer>
        </DatingHeader>

        {dating?.partner && dating?.status === MeetingStatus.ONGOING && (
          <InfoSection participant={dating.partner} />
        )}

        {isCompleted && (
          <>
            {dating?.status === MeetingStatus.COMPLETED && (
              <>
                <CompletionCard>
                  <h2>모든 만남이 종료되었습니다.</h2>
                </CompletionCard>
                <ButtonWrapper>
                  <Button variant='primary' size='large' fullWidth onClick={handleClickResult}>
                    결과 확인하기
                  </Button>
                </ButtonWrapper>
              </>
            )}
            {dating?.status !== MeetingStatus.COMPLETED && (
              <CompletionCard>
                <h2>대화 완료</h2>
                <p>다음 단계로 진행될 때 까지 잠시 기다려주세요.</p>
              </CompletionCard>
            )}
          </>
        )}
        {!isCompleted && (
          <>
            <ButtonWrapper>
              <Button
                variant='primary'
                size='large'
                disabled={!dating || !user}
                fullWidth
                onClick={handleOpenMatchModal}
              >
                선택하기
              </Button>
            </ButtonWrapper>

            <DatingContent>
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
          </>
        )}
      </Container>

      {/* 매치 선택 모달 */}
      {showMatchModal && (
        <ModalOverlay>
          <MatchModal>
            <h2>상대방과의 시간은 마음에 드셨나요?</h2>

            <MatchChoices>
              <MatchChoice selected={like === true} positive={true} onClick={() => setLike(true)}>
                <span>👍</span> 네, 더 알아가고 싶어요
              </MatchChoice>

              <MatchChoice
                selected={like === false}
                positive={false}
                onClick={() => setLike(false)}
              >
                <span>👎</span> 아니오, 저와는 잘 맞지 않아요
              </MatchChoice>
            </MatchChoices>

            <ModalActions>
              <Button onClick={handleCloseMatchModal} variant='secondary' size='large' fullWidth>
                취소
              </Button>
              <Button onClick={handleSelectMatch} variant='primary' size='large' fullWidth>
                선택 완료
              </Button>
            </ModalActions>
          </MatchModal>
        </ModalOverlay>
      )}
    </BaseLayout>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
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

const ButtonWrapper = styled.div`
  margin: 2rem 0;
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
  margin: 3rem 0;
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

const ModalActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const CompletionCard = styled.div`
  margin-top: 2rem;
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
    line-height: 1.4;
  }
`;
