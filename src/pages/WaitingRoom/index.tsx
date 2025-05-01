import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';

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

  // 데이터 정기적으로 가져오기
  useEffect(() => {
    if (meeting?.status === MeetingStatus.ONGOING) {
      navigate(`/dating/${meetingId}`);
    }
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
          </S.WaitingInfo>
        </S.WaitingCard>
      </S.ContentWrapper>
    </BaseLayout>
  );
}
