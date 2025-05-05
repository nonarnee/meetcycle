import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { colors } from '@/styles/colors';
import { Gender } from '@/types/participant';

export const DatingContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TimerSection = styled.div<{ isLow: boolean }>`
  background-color: ${colors.neutral[50]};
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;

  ${(props) =>
    props.isLow &&
    `
    animation: pulse 1s infinite;
    background-color: ${colors.error}1A;
  `}

  @keyframes pulse {
    0% {
      box-shadow: 0 10px 30px ${colors.error}1A;
    }
    50% {
      box-shadow: 0 10px 30px ${colors.error}4D;
    }
    100% {
      box-shadow: 0 10px 30px ${colors.error}1A;
    }
  }
`;

export const TimerIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${colors.primary.light};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary.main};
  margin-right: 1rem;
`;

export const TimerDisplay = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.neutral[800]};
  font-variant-numeric: tabular-nums;
`;

export const CycleIndicator = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${colors.neutral[100]};
  padding: 0.5rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${colors.neutral[600]};
`;

export const PartnerCard = styled.div`
  background-color: ${colors.neutral[50]};
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
`;

export const PartnerAvatar = styled.div<{ gender: Gender }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.gender === Gender.MALE ? colors.secondary.light : colors.primary.light};
  color: ${(props) => (props.gender === Gender.MALE ? colors.secondary.main : colors.primary.dark)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: 700;
  flex-shrink: 0;
`;

export const PartnerInfo = styled.div`
  flex: 1;
`;

export const PartnerName = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${colors.neutral[800]};
  margin: 0 0 1rem;
`;

export const PartnerDetails = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const DetailLabel = styled.div`
  font-size: 0.875rem;
  color: ${colors.neutral[600]};
`;

export const DetailValue = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${colors.neutral[800]};
`;

export const PartnerComment = styled.p`
  color: ${colors.neutral[700]};
  line-height: 1.6;
  font-size: 1.125rem;
  margin: 0;
`;

export const SelectionButtons = styled.div`
  display: flex;
`;

export const SelectionButton = styled.button`
  flex: 1;
  padding: 1.25rem;
  border-radius: 16px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${colors.primary.main};
  color: #fff;

  &:hover {
    background-color: ${colors.primary.dark};
  }
`;

export const ConversationStarters = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const StarterTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.neutral[800]};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const StarterList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const StarterItem = styled.div`
  padding: 1rem;
  background-color: ${colors.neutral[100]};
  border-radius: 8px;
  color: ${colors.neutral[700]};
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${colors.neutral[200]};
    transform: translateX(5px);
  }
`;

export const CompletionCard = styled.div`
  background-color: ${colors.neutral[50]};
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${colors.neutral[800]};
  }

  p {
    color: ${colors.neutral[600]};
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
`;

export const CompletionIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${colors.success}1A;
  color: ${colors.success};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: 0 auto 2rem;
`;

export const ResultButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${colors.primary.main};
  color: #fff;
  border: none;
  border-radius: 50px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${colors.primary.dark};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${colors.primary.main}4D;
  }

  &:active {
    transform: translateY(0);
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const WaitingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${colors.primary.light};
  border-top: 3px solid ${colors.primary.main};
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  margin: 1rem auto 0;
`;
