import { GenderShortLabel, Participant } from '@/types/participant';

interface Props {
  participant: Participant;
}

import * as S from './style';

export default function InfoSection({ participant }: Props) {
  return (
    <S.PartnerInfo>
      <S.PartnerInfoTitle>상대방 정보</S.PartnerInfoTitle>
      <S.InfoRow>
        <strong>닉네임</strong>
        {participant.nickname}
        <S.ParticipantBadge gender={participant.gender}>
          {GenderShortLabel[participant.gender]}
        </S.ParticipantBadge>
      </S.InfoRow>
      <S.InfoRow>
        <strong>나이</strong>
        {participant.age}
      </S.InfoRow>
      <S.InfoRow>
        <strong>직업</strong>
        {participant.job}
      </S.InfoRow>
      <S.InfoRow>
        <strong>코멘트</strong>
        {participant.comment}
      </S.InfoRow>
    </S.PartnerInfo>
  );
}
