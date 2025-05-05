import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { MessageCircle, Users, Clock } from 'lucide-react';
import { motion } from 'motion/react';

import { MeetingStatus } from '@/types/meeting';
import { useUserStore } from '@/stores/useUserStore';

import BaseLayout from '../../components/Layout/BaseLayout';
import useMeeting from '../Board/hooks/queries/useMeeting';

import * as S from './style';

export default function WaitingRoomPage() {
  const { meetingId } = useParams<{ meetingId: string }>();
  const navigate = useNavigate();

  const { user } = useUserStore();
  const { data: meeting } = useMeeting({ id: meetingId || '' }, { refetchInterval: 3000 });

  const tips = [
    {
      icon: <MessageCircle size={20} />,
      text: '자연스러운 대화를 위해 미리 주제를 생각해두세요.',
    },
    {
      icon: <Users size={20} />,
      text: '첫인상이 중요해요. 밝은 표정으로 시작하세요.',
    },
    {
      icon: <Clock size={20} />,
      text: '시간이 제한되어 있으니 핵심적인 대화를 나눠보세요.',
    },
  ];

  // 데이터 정기적으로 가져오기
  useEffect(() => {
    if (meeting?.status === MeetingStatus.ONGOING) {
      navigate(`/dating/${meetingId}`);
    }
  }, [meetingId, navigate, meeting]);

  const headerRight = <S.ParticipantBadge>{user?.nickname ?? ''}</S.ParticipantBadge>;

  return (
    <BaseLayout rightContent={headerRight}>
      <S.WaitingRoomContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <S.StatusCard>
            <S.StatusHeader>
              <S.EventTitle>{meeting?.title ?? ''}</S.EventTitle>
              <S.StatusBadge>대기 중</S.StatusBadge>
            </S.StatusHeader>

            <S.StatusContent>
              <S.WaitingAnimation>
                <S.Spinner />
              </S.WaitingAnimation>
              <S.StatusMessage>호스트가 소개팅을 시작하기를 기다리고 있습니다</S.StatusMessage>
              <S.StatusDescription>
                모든 참가자가 입장하면 곧 시작됩니다. 잠시만 기다려주세요.
              </S.StatusDescription>
            </S.StatusContent>
          </S.StatusCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <S.TipsCard>
            <S.TipsTitle>소개팅 팁</S.TipsTitle>
            <S.TipsList>
              {tips.map((tip, index) => (
                <S.TipItem key={index}>
                  <S.TipIcon>{tip.icon}</S.TipIcon>
                  <S.TipText>{tip.text}</S.TipText>
                </S.TipItem>
              ))}
            </S.TipsList>
          </S.TipsCard>
        </motion.div>
      </S.WaitingRoomContainer>
    </BaseLayout>
  );
}
