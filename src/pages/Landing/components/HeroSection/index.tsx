import { UserRole } from '@/stores/useUserStore';

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
    <S.HeroContainer>
      <S.HeroContent>
        <S.HeroTitle>
          특별한 만남의 시작, <S.HighlightText>MeetCycle</S.HighlightText>
        </S.HeroTitle>
        <S.HeroSubtitle>로테이션 소개팅으로 더 많은 인연을 만나보세요</S.HeroSubtitle>
        <S.HeroDescription>
          MeetCycle은 모든 참가자가 서로 만날 수 있는 로테이션 방식의 소개팅 서비스입니다. 간편한
          설정으로 소개팅을 개설하고, 마음에 드는 상대와 연결해보세요.
        </S.HeroDescription>

        <S.ButtonGroup>
          {!userRole && (
            <S.PrimaryButton size='large' onClick={onLoginClick}>
              로그인하기
            </S.PrimaryButton>
          )}

          {(userRole === UserRole.ADMIN || userRole === UserRole.HOST) && (
            <>
              <S.PrimaryButton size='large' onClick={onCreateDatingClick}>
                소개팅 만들기
              </S.PrimaryButton>
              {hasActiveMeeting && (
                <S.PrimaryButton size='large' onClick={onActiveMeetingClick}>
                  진행중인 소개팅으로 이동
                </S.PrimaryButton>
              )}
            </>
          )}

          {userRole === UserRole.PARTICIPANT && (
            <S.PrimaryButton size='large' onClick={onParticipantMeetingClick}>
              참여한 소개팅으로 이동
            </S.PrimaryButton>
          )}
        </S.ButtonGroup>
      </S.HeroContent>
    </S.HeroContainer>
  );
}
