import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { colors } from '@/styles/colors';

export const WaitingRoomContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ParticipantBadge = styled.div`
  background-color: ${colors.primary.main};
  color: #fff;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  box-shadow: 0 2px 4px ${colors.primary.main}4D;
`;

export const StatusCard = styled.div`
  background-color: ${colors.neutral[50]};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const StatusHeader = styled.div`
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.primary.dark} 100%);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EventTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

export const StatusBadge = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const StatusContent = styled.div`
  padding: 3rem 2rem;
  text-align: center;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const WaitingAnimation = styled.div`
  margin-bottom: 2rem;
`;

export const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 4px solid ${colors.primary.light};
  border-top: 4px solid ${colors.primary.main};
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  margin: 0 auto;
`;

export const StatusMessage = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${colors.neutral[800]};
  margin-bottom: 1rem;
`;

export const StatusDescription = styled.p`
  color: ${colors.neutral[600]};
  font-size: 1.125rem;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const TipsCard = styled.div`
  background-color: ${colors.neutral[50]};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const TipsTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.neutral[800]};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '💡';
    font-size: 1.5rem;
  }
`;

export const TipsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TipItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: ${colors.neutral[100]};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
    background-color: ${colors.neutral[200]};
  }
`;

export const TipIcon = styled.div`
  width: 36px;
  height: 36px;
  background-color: ${colors.primary.light};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary.main};
  flex-shrink: 0;
`;

export const TipText = styled.p`
  margin: 0;
  color: ${colors.neutral[700]};
  font-size: 1rem;
  line-height: 1.5;
  padding-top: 0.5rem;
`;
