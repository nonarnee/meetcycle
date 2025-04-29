import { useState } from 'react';

import { MeetingStatus } from '@/types/meeting';
import { GenderLabel } from '@/types';
import { Meeting } from '@/types/meeting';
import { Participant } from '@/types';
import Button from '@/components/Common/Button';

import useStartMeetingMutation from '../../hooks/mutations/useStartMeetingMutation';

import * as S from './style';

interface WaitingBoardProps {
  meeting: Meeting;
  onStart: () => void;
}

export default function WaitingBoard({ meeting, onStart }: WaitingBoardProps) {
  const { mutate: startMeeting } = useStartMeetingMutation();

  const totalParticipantsCount = (meeting?.maleCount ?? 0) + (meeting?.femaleCount ?? 0);
  const joinParticipantsCount =
    (meeting?.maleParticipants.length ?? 0) + (meeting?.femaleParticipants.length ?? 0);
  const participants = [
    ...(meeting?.maleParticipants ?? []),
    ...(meeting?.femaleParticipants ?? []),
  ];

  const [copySuccess, setCopySuccess] = useState(false);
  const participantLink = `${window.location.origin}/join/${meeting?.id}`;

  const copyLink = () => {
    navigator.clipboard.writeText(participantLink);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const startDating = () => {
    if (!meeting?.id) return;

    startMeeting(meeting.id, {
      onSuccess: onStart,
    });
  };

  return (
    <>
      <S.ShareSection>
        <h2>참가자 초대하기</h2>
        <S.ShareCard>
          <p>
            아래 링크를 참가자들에게 공유하세요. 참가자들은 링크를 통해 소개팅에 참여할 수 있습니다.
          </p>
          <S.LinkContainer>
            <S.LinkInput value={participantLink} readOnly />
            <S.CopyButton onClick={copyLink}>
              {copySuccess ? '복사 완료!' : '링크 복사'}
            </S.CopyButton>
          </S.LinkContainer>
        </S.ShareCard>
      </S.ShareSection>

      <S.ParticipantsSection>
        <S.SectionHeader>
          <h2>참가자 현황</h2>
          <S.ParticipantCount>
            {joinParticipantsCount}/{totalParticipantsCount}명 참여
          </S.ParticipantCount>
        </S.SectionHeader>

        {joinParticipantsCount === 0 ? (
          <S.EmptyState>
            <p>아직 참가자가 없습니다. 링크를 공유하여 참가자들을 초대해보세요.</p>
          </S.EmptyState>
        ) : (
          <S.ParticipantsList>
            {participants.map((participant: Participant) => (
              <S.ParticipantItem key={participant.id}>
                <S.ParticipantAvatar gender={participant.gender}>
                  {participant.nickname.charAt(0)}
                </S.ParticipantAvatar>
                <S.ParticipantInfo>
                  <S.ParticipantName>{participant.nickname}</S.ParticipantName>
                  <S.ParticipantDetail>{GenderLabel[participant.gender]}</S.ParticipantDetail>
                </S.ParticipantInfo>
              </S.ParticipantItem>
            ))}
          </S.ParticipantsList>
        )}
      </S.ParticipantsSection>

      {meeting?.status === MeetingStatus.PENDING && (
        <S.ActionSection>
          <p>모든 참가자가 입장하면 소개팅을 시작할 수 있습니다.</p>
          <Button
            onClick={startDating}
            disabled={joinParticipantsCount !== totalParticipantsCount}
            size='large'
          >
            소개팅 시작하기
          </Button>
        </S.ActionSection>
      )}
    </>
  );
}
