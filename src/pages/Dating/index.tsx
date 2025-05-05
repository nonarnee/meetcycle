import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Clock, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { useUserStore } from '@/stores/useUserStore';
import { useCountdown } from '@/hooks/useCountdown';
import { MeetingStatus } from '@/types/meeting';

import BaseLayout from '../../components/Layout/BaseLayout';

import useDating from './hooks/queries/useDating';
import MatchModal from './components/MatchModal';
import useLikeMutation from './hooks/mutations/useLikeMutation';
import * as S from './style';

export default function DatingPage() {
  const navigate = useNavigate();
  const { meetingId } = useParams<{ meetingId: string }>();

  const { user } = useUserStore();
  const { data: dating, refetch: refetchDating } = useDating(
    { participantId: user?.id ?? '' },
    {
      refetchInterval: 3000,
    },
  );
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

  const conversationStarters = [
    '최근에 본 영화나 드라마 중 가장 인상 깊었던 것은 무엇인가요?',
    '여행 가고 싶은 곳이 있다면 어디인가요?',
    '주말에는 주로 어떻게 시간을 보내시나요?',
    '좋아하는 음식이나 맛집이 있으신가요?',
    '취미나 관심사는 무엇인가요?',
  ];

  return (
    <BaseLayout>
      <S.DatingContainer>
        {dating?.status !== MeetingStatus.ONGOING && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <S.TimerSection isLow={remainingSeconds < 60}>
              <S.TimerIcon>
                <Clock size={24} />
              </S.TimerIcon>
              <S.TimerDisplay>
                {isOver ? '시간 종료' : `${format.minute}:${format.second}`}
              </S.TimerDisplay>
              <S.CycleIndicator>{dating?.order ?? 0}번 사이클</S.CycleIndicator>
            </S.TimerSection>
          </motion.div>
        )}

        <AnimatePresence mode='wait'>
          {dating?.partner && dating?.status === MeetingStatus.ONGOING && (
            <motion.div
              key='partner-info'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <S.PartnerCard>
                <S.PartnerAvatar gender={dating.partner.gender}>
                  {dating.partner.nickname.charAt(0)}
                </S.PartnerAvatar>
                <S.PartnerInfo>
                  <S.PartnerName>{dating.partner.nickname}</S.PartnerName>
                  <S.PartnerDetails>
                    <S.DetailItem>
                      <S.DetailLabel>나이</S.DetailLabel>
                      <S.DetailValue>{dating.partner.age}세</S.DetailValue>
                    </S.DetailItem>
                    <S.DetailItem>
                      <S.DetailLabel>직업</S.DetailLabel>
                      <S.DetailValue>{dating.partner.job}</S.DetailValue>
                    </S.DetailItem>
                  </S.PartnerDetails>
                  <S.PartnerComment>{dating.partner.comment}</S.PartnerComment>
                </S.PartnerInfo>
              </S.PartnerCard>
            </motion.div>
          )}

          {isCompleted && (
            <motion.div
              key='completed'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              {dating?.status === MeetingStatus.COMPLETED ? (
                <S.CompletionCard>
                  <S.CompletionIcon>✓</S.CompletionIcon>
                  <h2>모든 만남이 종료되었습니다</h2>
                  <p>결과 페이지에서 매칭 결과를 확인해보세요!</p>
                  <S.ResultButton onClick={handleClickResult}>결과 확인하기</S.ResultButton>
                </S.CompletionCard>
              ) : (
                <S.CompletionCard>
                  <h2>대화 완료</h2>
                  <p>다음 단계로 진행될 때 까지 잠시 기다려주세요.</p>
                  <S.WaitingSpinner />
                </S.CompletionCard>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {!isCompleted && dating?.partner && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <S.SelectionButtons>
                <S.SelectionButton onClick={() => handleOpenMatchModal()}>
                  상대방과의 만남 평가하기
                </S.SelectionButton>
              </S.SelectionButtons>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <S.ConversationStarters>
                <S.StarterTitle>
                  <MessageCircle size={20} />
                  대화 주제 추천
                </S.StarterTitle>
                <S.StarterList>
                  {conversationStarters.map((starter, index) => (
                    <S.StarterItem key={index}>{starter}</S.StarterItem>
                  ))}
                </S.StarterList>
              </S.ConversationStarters>
            </motion.div>
          </>
        )}
      </S.DatingContainer>

      {showMatchModal && (
        <MatchModal onClose={handleCloseMatchModal} onSelect={handleSelectMatch} />
      )}
    </BaseLayout>
  );
}
