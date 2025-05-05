import styled from '@emotion/styled';
import { Link } from 'react-router';

export const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 1.75rem;
  font-weight: 800;
  background: linear-gradient(135deg, #f06292 0%, #ec407a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightContentContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 200;
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  transition: transform 0.3s ease;
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
`;

export const MobileMenuContent = styled.div`
  padding: 1.5rem;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 150;
`;
