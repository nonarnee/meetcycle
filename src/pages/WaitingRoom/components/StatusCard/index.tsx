import { Meeting } from '@/types/meeting';

import * as S from './style';

interface StatusCardProps {
  meeting?: Meeting;
}

export default function StatusCard({ meeting }: StatusCardProps) {
  return (
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
  );
}
