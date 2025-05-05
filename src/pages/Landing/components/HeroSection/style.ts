import styled from '@emotion/styled';

import Button from '@/components/Common/Button';
import { colors } from '@/styles/colors';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1.5rem;
  background: linear-gradient(135deg, ${colors.primary.light} 0%, ${colors.secondary.light} 100%);

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 6rem 2rem;
    min-height: 80vh;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    padding-right: 2rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const HighlightText = styled.span`
  color: #f06292;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: rgba(240, 98, 146, 0.2);
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #555;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${colors.primary.main};
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px ${colors.primary.main}33;

  &:hover:not(:disabled) {
    background-color: ${colors.primary.dark};
    transform: translateY(-2px);
    box-shadow: 0 6px 8px ${colors.primary.main}4D;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${colors.primary.main};
  border: 2px solid ${colors.primary.main};
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: ${colors.primary.main}1A;
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;

export const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 400px;

  @media (min-width: 768px) {
    max-height: 500px;
  }
`;
