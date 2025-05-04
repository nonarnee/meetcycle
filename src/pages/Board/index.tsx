import { useParams } from 'react-router';

import { MeetingStatus, MeetingStatusLabel } from '@/types/meeting';

import BaseLayout from '../../components/Layout/BaseLayout';
import { useCountdown } from '../../hooks/useCountdown';

import useMeeting from './hooks/queries/useMeeting';
import WaitingBoard from './components/WaitingBoard';
import OnGoingBoard from './components/OnGoingBoard';
import CompletedBoard from './components/CompletedBoard';
import useCurrentCycle from './hooks/queries/useCurrentCycle';
import * as S from './style';

export default function BoardPage() {
  const { meetingId } = useParams<{ meetingId: string }>();

  const { data: meeting, refetch: refetchMeeting } = useMeeting(
    { id: meetingId ?? '' },
    { refetchInterval: 3000 },
  );
  const { data: currentCycle } = useCurrentCycle(
    { meetingId: meetingId ?? '' },
    {
      enabled: !!meetingId && meeting?.status === MeetingStatus.ONGOING,
    },
  );
  const { remainingSeconds } = useCountdown(currentCycle?.endTime ?? '');

  const totalCycles = Math.max(meeting?.maleCount ?? 0, meeting?.femaleCount ?? 0);
  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, '0');
  const seconds = String(remainingSeconds % 60).padStart(2, '0');

  const headerRight = <S.HostLabel>호스트 모드</S.HostLabel>;

  return (
    <BaseLayout rightContent={headerRight}>
      <S.MainContent>
        <S.DatingInfoSection>
          <h2>소개팅 정보</h2>
          <S.DatingInfoCard>
            <S.DatingTitle>{meeting?.title}</S.DatingTitle>
            <S.DatingMeta>
              <S.MetaItem>
                <S.Label>참가 코드</S.Label>
                <S.Value>{meeting?._id}</S.Value>
              </S.MetaItem>
              <S.MetaItem>
                <S.Label>참가자</S.Label>
                <S.Value>
                  남성 {meeting?.maleCount}명 / 여성 {meeting?.femaleCount}명
                </S.Value>
              </S.MetaItem>
              <S.MetaItem>
                <S.Label>대화 시간</S.Label>
                <S.Value>{meeting?.roomDurationMinutes}분</S.Value>
              </S.MetaItem>
              <S.MetaItem>
                <S.Label>상태</S.Label>
                <S.StatusValue status={meeting?.status ?? MeetingStatus.PENDING}>
                  {MeetingStatusLabel[meeting?.status ?? MeetingStatus.PENDING]}
                </S.StatusValue>
              </S.MetaItem>
              {meeting?.status === MeetingStatus.ONGOING && (
                <>
                  <S.MetaItem>
                    <S.Label>진행상황</S.Label>
                    <S.Value>
                      {meeting?.currentCycleOrder} / {totalCycles} 사이클
                    </S.Value>
                  </S.MetaItem>
                  <S.MetaItem>
                    <S.Label>남은시간</S.Label>
                    <S.Value>
                      {remainingSeconds === 0 || isNaN(remainingSeconds)
                        ? '종료'
                        : `${minutes}:${seconds}`}
                    </S.Value>
                  </S.MetaItem>
                </>
              )}
            </S.DatingMeta>
          </S.DatingInfoCard>
        </S.DatingInfoSection>
      </S.MainContent>

      {meeting?.status === MeetingStatus.PENDING && (
        <WaitingBoard meeting={meeting} onStart={() => refetchMeeting()} />
      )}
      {meeting?.status === MeetingStatus.ONGOING && <OnGoingBoard meeting={meeting} />}
      {meeting?.status === MeetingStatus.COMPLETED && <CompletedBoard meeting={meeting} />}
    </BaseLayout>
  );
}
