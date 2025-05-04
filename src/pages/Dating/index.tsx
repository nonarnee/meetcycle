import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { useUserStore } from '@/stores/useUserStore';
import { useCountdown } from '@/hooks/useCountdown';
import { MeetingStatus } from '@/types/meeting';

import BaseLayout from '../../components/Layout/BaseLayout';
import Button from '../../components/Common/Button';

import useDating from './hooks/queries/useDating';
import InfoSection from './components/InfoSection';
import MatchModal from './components/MatchModal';
import useLikeMutation from './hooks/mutations/useLikeMutation';
import * as S from './style';

export default function DatingPage() {
  const navigate = useNavigate();
  const { meetingId } = useParams<{ meetingId: string }>();

  const { user } = useUserStore();
  const { data: dating, refetch: refetchDating } = useDating({ participantId: user?.id ?? '' });
  const { mutate: likeMutation } = useLikeMutation();
  const { remainingSeconds, format, isOver } = useCountdown(new Date(dating?.endTime ?? ''));

  const [showMatchModal, setShowMatchModal] = useState(false);

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

  const handleSelectMatch = (like: boolean) => {
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
      <S.Container>
        <S.DatingHeader>
          <S.Timer isLow={remainingSeconds < 60}>
            {isOver && '시간 종료'}
            {!isOver && `${format.minute} : ${format.second}`}
          </S.Timer>
        </S.DatingHeader>

        {dating?.partner && dating?.status === MeetingStatus.ONGOING && (
          <InfoSection participant={dating.partner} />
        )}

        {isCompleted && (
          <>
            {dating?.status === MeetingStatus.COMPLETED && (
              <>
                <S.CompletionCard>
                  <h2>모든 만남이 종료되었습니다.</h2>
                </S.CompletionCard>
                <S.ButtonWrapper>
                  <Button variant='primary' size='large' onClick={handleClickResult}>
                    결과 확인하기
                  </Button>
                </S.ButtonWrapper>
              </>
            )}
            {dating?.status !== MeetingStatus.COMPLETED && (
              <S.CompletionCard>
                <h2>대화 완료</h2>
                <p>다음 단계로 진행될 때 까지 잠시 기다려주세요.</p>
              </S.CompletionCard>
            )}
          </>
        )}
        {!isCompleted && (
          <>
            <S.ButtonWrapper>
              <Button
                variant='primary'
                size='large'
                disabled={!dating || !user}
                onClick={handleOpenMatchModal}
              >
                선택하기
              </Button>
            </S.ButtonWrapper>

            <S.DatingContent>
              <S.ConversationTips>
                <h3>대화 도움말</h3>
                <S.TipsList>
                  <S.TipItem>취미나 관심사에 대해 이야기해보세요.</S.TipItem>
                  <S.TipItem>최근에 본 영화나 책에 대해 물어보세요.</S.TipItem>
                  <S.TipItem>좋아하는 음식이나 여행지를 공유해보세요.</S.TipItem>
                  <S.TipItem>평소 주말은 어떻게 보내는지 물어보세요.</S.TipItem>
                </S.TipsList>
              </S.ConversationTips>
            </S.DatingContent>
          </>
        )}
      </S.Container>

      {showMatchModal && (
        <MatchModal onClose={handleCloseMatchModal} onSelect={handleSelectMatch} />
      )}
    </BaseLayout>
  );
}
