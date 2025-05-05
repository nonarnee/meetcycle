import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { colors } from '@/styles/colors';

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

export const Container = styled.div`
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
