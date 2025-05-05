import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { colors } from '@/styles/colors';

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

export const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${colors.primary.light} 0%, ${colors.secondary.light} 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

export const BackgroundShape = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.5;
  z-index: 0;

  &.shape-1 {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.light} 100%);
    top: -100px;
    right: -100px;
    animation: ${float} 8s ease-in-out infinite;
  }

  &.shape-2 {
    width: 200px;
    height: 200px;
    background: linear-gradient(
      135deg,
      ${colors.secondary.light} 0%,
      ${colors.secondary.main} 100%
    );
    bottom: -50px;
    left: -50px;
    animation: ${float} 10s ease-in-out infinite;
  }

  &.shape-3 {
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, ${colors.warning} 0%, ${colors.neutral[100]} 100%);
    top: 50%;
    left: 10%;
    animation: ${float} 12s ease-in-out infinite;
  }
`;

export const ErrorCard = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: ${colors.neutral[50]};
  border-radius: 16px;
  padding: 3rem 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const ErrorIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

export const ErrorCode = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  color: ${colors.primary.main};
  margin-bottom: 1rem;
  line-height: 1;
`;

export const ErrorTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${colors.neutral[800]};
  margin: 0 0 1rem;
`;

export const ErrorMessage = styled.p`
  font-size: 1rem;
  color: ${colors.neutral[600]};
  margin: 0 0 2rem;
  line-height: 1.6;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;
