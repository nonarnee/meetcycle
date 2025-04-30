import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { User } from 'lucide-react';

import { MeetingStatus } from '@/types/meeting';
import { useUserStore } from '@/stores/useUserStore';

import BaseLayout from '../../components/Layout/BaseLayout';
import { Participant } from '../../types';
import useMeeting from '../Board/hooks/queries/useMeeting';

import * as S from './style';

export default function WaitingRoomPage() {
  const { meetingId } = useParams<{ meetingId: string }>();
  const navigate = useNavigate();

  const { user } = useUserStore();
  const { data: meeting, refetch: refetchMeeting } = useMeeting({ id: meetingId || '' });

  // 데이터 정기적으로 가져오기
  useEffect(() => {
    const intervalId = setInterval(() => {
      // 소개팅이 시작되면 데이팅 페이지로 이동
      if (meeting?.status === MeetingStatus.ONGOING) {
        navigate(`/dating/${meetingId}`);
      }

      refetchMeeting();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [meetingId, navigate, meeting]);

  const headerRight = <S.ParticipantBadge>{user?.nickname ?? ''}</S.ParticipantBadge>;

  return (
    <BaseLayout rightContent={headerRight}>
      <S.ContentWrapper>
        <S.WaitingCard>
          <S.WaitingCardHeader>
            <h2>소개팅 대기실</h2>
            <S.EventTitle>{meeting?.title ?? ''}</S.EventTitle>
          </S.WaitingCardHeader>

          <S.WaitingInfo>
            <S.StatusSection>
              <S.StatusText>
                호스트가 소개팅을 시작하기를 기다리고 있습니다. 모든 참가자가 입장하면 곧
                시작됩니다.
              </S.StatusText>
            </S.StatusSection>

            <S.CountsSection>
              <S.CountsTitle>참가자 현황</S.CountsTitle>
              <S.CountsGrid>
                <S.CountsItem>
                  <S.CountsLabel>남성</S.CountsLabel>
                  <S.CountsValue>
                    {meeting?.maleParticipants.length} / {meeting?.maleCount}
                  </S.CountsValue>
                </S.CountsItem>
                <S.CountsItem>
                  <S.CountsLabel>여성</S.CountsLabel>
                  <S.CountsValue>
                    {meeting?.femaleParticipants.length} / {meeting?.femaleCount}
                  </S.CountsValue>
                </S.CountsItem>
              </S.CountsGrid>
            </S.CountsSection>

            <S.ParticipantsSection>
              <h3>참가자 목록</h3>
              <S.ParticipantList>
                {[...(meeting?.maleParticipants ?? []), ...(meeting?.femaleParticipants ?? [])].map(
                  (participant: Participant) => (
                    <S.ParticipantItem key={participant.id}>
                      <S.ParticipantAvatar gender={participant.gender}>
                        <User />
                      </S.ParticipantAvatar>
                      <S.ParticipantName>{participant.nickname}</S.ParticipantName>
                    </S.ParticipantItem>
                  ),
                )}
              </S.ParticipantList>
            </S.ParticipantsSection>
          </S.WaitingInfo>
        </S.WaitingCard>
      </S.ContentWrapper>
    </BaseLayout>
  );
}
