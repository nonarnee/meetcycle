import { useEffect } from 'react';
import { useParams } from 'react-router';
import styled from '@emotion/styled';

import { MeetingStatus, MeetingStatusLabel } from '@/types/meeting';

import BaseLayout from '../../components/Layout/BaseLayout';

import useMeeting from './hooks/queries/useMeeting';
import WaitingBoard from './components/WaitingBoard';
import OnGoingBoard from './components/OnGoingBoard';
import CompletedBoard from './components/CompletedBoard';
import useCurrentCycle from './hooks/queries/useCurrentCycle';
import { useCountdown } from './hooks/useCountdown';

export default function BoardPage() {
  const { meetingId } = useParams<{ meetingId: string }>();

  const { data: meeting, refetch: refetchMeeting } = useMeeting({ id: meetingId ?? '' });
  const { data: currentCycle } = useCurrentCycle({ meetingId: meetingId ?? '' });
  const { remainingSeconds } = useCountdown(currentCycle?.endTime ?? '');

  const minutes = String(Math.floor(remainingSeconds / 60)).padStart(2, '0');
  const seconds = String(remainingSeconds % 60).padStart(2, '0');

  useEffect(() => {
    setInterval(() => {
      refetchMeeting();
    }, 30 * 1000);
  }, [refetchMeeting]);

  const headerRight = <HostLabel>호스트 모드</HostLabel>;

  return (
    <BaseLayout rightContent={headerRight}>
      <MainContent>
        <DatingInfoSection>
          <h2>소개팅 정보</h2>
          <DatingInfoCard>
            <DatingTitle>{meeting?.title}</DatingTitle>
            <DatingMeta>
              <MetaItem>
                <Label>참가 코드</Label>
                <Value>{meeting?.id}</Value>
              </MetaItem>
              <MetaItem>
                <Label>참가자</Label>
                <Value>
                  남성 {meeting?.maleCount}명 / 여성 {meeting?.femaleCount}명
                </Value>
              </MetaItem>
              <MetaItem>
                <Label>대화 시간</Label>
                <Value>{meeting?.roundDurationMinutes}분</Value>
              </MetaItem>
              <MetaItem>
                <Label>상태</Label>
                <StatusValue status={meeting?.status ?? MeetingStatus.PENDING}>
                  {MeetingStatusLabel[meeting?.status ?? MeetingStatus.PENDING]}
                </StatusValue>
              </MetaItem>
              {meeting?.status === MeetingStatus.ONGOING && (
                <>
                  <MetaItem>
                    <Label>진행상황</Label>
                    <Value>
                      {meeting?.currentCycleOrder + 1} / {meeting?.totalCycles} 사이클
                    </Value>
                  </MetaItem>
                  <MetaItem>
                    <Label>남은시간</Label>
                    <Value>
                      {remainingSeconds === 0 || isNaN(remainingSeconds)
                        ? '종료'
                        : `${minutes}:${seconds}`}
                    </Value>
                  </MetaItem>
                </>
              )}
            </DatingMeta>
          </DatingInfoCard>
        </DatingInfoSection>
      </MainContent>

      {meeting?.status === MeetingStatus.PENDING && (
        <WaitingBoard meeting={meeting} onStart={() => refetchMeeting()} />
      )}
      {meeting?.status === MeetingStatus.ONGOING && <OnGoingBoard meeting={meeting} />}
      {meeting?.status === MeetingStatus.COMPLETED && <CompletedBoard meeting={meeting} />}
    </BaseLayout>
  );
}

const HostLabel = styled.span`
  background-color: #f06292;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const DatingInfoSection = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

const DatingInfoCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

const DatingTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

const DatingMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const MetaItem = styled.div`
  margin-bottom: 0.5rem;
`;

const Label = styled.div`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

const Value = styled.div`
  font-weight: 500;
  color: #333;
`;

const StatusValue = styled.div<{ status: MeetingStatus }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;

  background-color: ${(props) =>
    props.status === MeetingStatus.PENDING
      ? '#e3f2fd'
      : props.status === MeetingStatus.ONGOING
        ? '#e8f5e9'
        : props.status === MeetingStatus.COMPLETED
          ? '#fff8e1'
          : '#f5f5f5'};

  color: ${(props) =>
    props.status === MeetingStatus.PENDING
      ? '#1976d2'
      : props.status === MeetingStatus.ONGOING
        ? '#388e3c'
        : props.status === MeetingStatus.COMPLETED
          ? '#f57f17'
          : '#757575'};
`;
