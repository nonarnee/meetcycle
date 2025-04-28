import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Link } from 'react-router';

interface HeaderProps {
  rightContent?: ReactNode;
}

const Header = ({ rightContent }: HeaderProps) => {
  return (
    <HeaderContainer>
      <LogoLink to='/'>
        <Logo>MeetCycle</Logo>
      </LogoLink>
      {rightContent && <RightContentContainer>{rightContent}</RightContentContainer>}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #f06292;
`;

const RightContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
