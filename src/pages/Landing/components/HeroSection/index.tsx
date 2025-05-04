import { UserRole } from '@/stores/useUserStore';
import Button from '@/components/Common/Button';

import * as S from './style';

interface HeroSectionProps {
  userRole?: UserRole | null;
  hasActiveMeeting?: boolean;
  onLoginClick?: () => void;
  onCreateDatingClick?: () => void;
  onActiveMeetingClick?: () => void;
  onParticipantMeetingClick?: () => void;
}

export default function HeroSection({
  userRole,
  hasActiveMeeting,
  onLoginClick,
  onCreateDatingClick,
  onActiveMeetingClick,
  onParticipantMeetingClick,
}: HeroSectionProps) {
  return (
    <S.HeroSection>
      <S.HeroTitle>로테이션 소개팅을 쉽고 재미있게</S.HeroTitle>
      <S.HeroText>
        MeetCycle과 함께 새로운 만남을 시작하세요. 간편한 설정으로 로테이션 소개팅을 진행하고,
        서로에게 맞는 짝을 찾아보세요.
      </S.HeroText>

      {!userRole && (
        <Button size='large' onClick={onLoginClick}>
          로그인하기
        </Button>
      )}

      {(userRole === UserRole.ADMIN || userRole === UserRole.HOST) && (
        <S.ButtonGroup>
          <Button size='large' onClick={onCreateDatingClick}>
            소개팅 만들기
          </Button>
          {hasActiveMeeting && (
            <Button size='large' onClick={onActiveMeetingClick}>
              진행중인 소개팅으로 이동
            </Button>
          )}
        </S.ButtonGroup>
      )}

      {userRole === UserRole.PARTICIPANT && (
        <Button size='large' onClick={onParticipantMeetingClick}>
          참여한 소개팅으로 이동
        </Button>
      )}
    </S.HeroSection>
  );
}
