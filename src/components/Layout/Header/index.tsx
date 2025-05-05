import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { ReactNode } from 'react';

import * as S from './style';

interface HeaderProps {
  rightContent?: ReactNode;
}

export default function Header({ rightContent }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <S.LogoLink to='/'>
          <S.Logo>MeetCycle</S.Logo>
        </S.LogoLink>

        <S.DesktopNav>
          {rightContent && <S.RightContentContainer>{rightContent}</S.RightContentContainer>}
        </S.DesktopNav>

        <S.MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
          <Menu size={24} />
        </S.MobileMenuButton>
      </S.HeaderContent>

      <S.MobileMenu isOpen={isMobileMenuOpen}>
        <S.MobileMenuHeader>
          <S.Logo>MeetCycle</S.Logo>
          <S.CloseButton onClick={() => setIsMobileMenuOpen(false)}>
            <X size={24} />
          </S.CloseButton>
        </S.MobileMenuHeader>

        <S.MobileMenuContent>{rightContent}</S.MobileMenuContent>
      </S.MobileMenu>

      {isMobileMenuOpen && <S.Overlay onClick={() => setIsMobileMenuOpen(false)} />}
    </S.HeaderContainer>
  );
}
