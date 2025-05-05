import { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, Users } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

import { GenderLabel } from '@/types';
import { Meeting } from '@/types/meeting';
import { Participant } from '@/types';

import useStartMeetingMutation from '../../hooks/mutations/useStartMeetingMutation';
import useParticipants from '../../hooks/queries/useParticipants';

import * as S from './style';
interface WaitingBoardProps {
  meeting: Meeting;
  onStart: () => void;
}

export default function WaitingBoard({ meeting, onStart }: WaitingBoardProps) {
  const { data: participants } = useParticipants(
    { meetingId: meeting._id },
    {
      refetchInterval: 3000,
    },
  );

  const { mutate: startMeeting } = useStartMeetingMutation();

  const totalParticipantsCount = (meeting?.maleCount ?? 0) + (meeting?.femaleCount ?? 0);

  const [copySuccess, setCopySuccess] = useState(false);
  const participantLink = `${window.location.origin}/join/${meeting?._id}`;

  const copyLink = () => {
    navigator.clipboard.writeText(participantLink);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const startDating = () => {
    if (!meeting?._id) return;

    if (window.confirm('소개팅을 시작하시겠습니까?')) {
      startMeeting(meeting._id, {
        onSuccess: onStart,
      });
    }
  };

  return (
    <S.BoardContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <S.ShareSection>
          <S.SectionTitle>참가자 초대하기</S.SectionTitle>
          <S.ShareCard>
            <S.ShareDescription>
              아래 링크를 참가자들에게 공유하세요. 참가자들은 링크를 통해 소개팅에 참여할 수
              있습니다.
            </S.ShareDescription>
            <S.LinkContainer>
              <S.QRCode>
                <QRCodeSVG value={participantLink} />
              </S.QRCode>
              <S.LinkDetails>
                <S.LinkInput value={participantLink} readOnly />
                <S.CopyButton onClick={copyLink}>
                  {copySuccess ? (
                    <>
                      <Check size={16} /> 복사 완료
                    </>
                  ) : (
                    <>
                      <Copy size={16} /> 링크 복사
                    </>
                  )}
                </S.CopyButton>
              </S.LinkDetails>
            </S.LinkContainer>
          </S.ShareCard>
        </S.ShareSection>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <S.ParticipantsSection>
          <S.SectionHeader>
            <S.SectionTitle>참가자 현황</S.SectionTitle>
            <S.ParticipantCount>
              <Users size={16} />
              {participants?.length}/{totalParticipantsCount}명 참여
            </S.ParticipantCount>
          </S.SectionHeader>

          {participants?.length === 0 ? (
            <S.EmptyState>
              <S.EmptyIcon>👥</S.EmptyIcon>
              <S.EmptyText>
                아직 참가자가 없습니다. 링크를 공유하여 참가자들을 초대해보세요.
              </S.EmptyText>
            </S.EmptyState>
          ) : (
            <S.ParticipantsList>
              {participants?.map((participant: Participant, index) => (
                <motion.div
                  key={participant._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <S.ParticipantItem>
                    <S.ParticipantAvatar gender={participant.gender}>
                      {participant.nickname.charAt(0)}
                    </S.ParticipantAvatar>
                    <S.ParticipantInfo>
                      <S.ParticipantName>{participant.nickname}</S.ParticipantName>
                      <S.ParticipantDetail>
                        {GenderLabel[participant.gender]} • {participant.age}세 • {participant.job}
                      </S.ParticipantDetail>
                    </S.ParticipantInfo>
                  </S.ParticipantItem>
                </motion.div>
              ))}
            </S.ParticipantsList>
          )}
        </S.ParticipantsSection>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <S.ActionSection>
          <S.StartButton
            onClick={startDating}
            disabled={participants?.length !== totalParticipantsCount}
          >
            소개팅 시작하기
          </S.StartButton>
          {participants?.length !== totalParticipantsCount && (
            <S.RequirementMessage>
              모든 참가자({totalParticipantsCount}명)가 입장해야 시작할 수 있습니다.
            </S.RequirementMessage>
          )}
        </S.ActionSection>
      </motion.div>
    </S.BoardContainer>
  );
}
