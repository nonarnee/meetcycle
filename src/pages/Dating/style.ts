import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

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
  background-color: white;
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
    background-color: #ffebee;
  `}

  @keyframes pulse {
    0% {
      box-shadow: 0 10px 30px rgba(239, 83, 80, 0.1);
    }
    50% {
      box-shadow: 0 10px 30px rgba(239, 83, 80, 0.3);
    }
    100% {
      box-shadow: 0 10px 30px rgba(239, 83, 80, 0.1);
    }
  }
`;

export const TimerIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: #fce4ec;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f06292;
  margin-right: 1rem;
`;

export const TimerDisplay = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  font-variant-numeric: tabular-nums;
`;

export const CycleIndicator = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #f5f5f5;
  padding: 0.5rem 0.75rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #666;
`;

export const PartnerCard = styled.div`
  background-color: white;
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
  background-color: ${(props) => (props.gender === Gender.MALE ? '#bbdefb' : '#f8bbd0')};
  color: ${(props) => (props.gender === Gender.MALE ? '#1976d2' : '#c2185b')};
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
  color: #333;
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
  color: #666;
`;

export const DetailValue = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #333;
`;

export const PartnerComment = styled.p`
  color: #555;
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
  background-color: #f06292;
  color: white;

  &:hover {
    background-color: #ec407a;
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
  color: #333;
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
  background-color: #f9f9f9;
  border-radius: 8px;
  color: #555;
  font-size: 1rem;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
    transform: translateX(5px);
  }
`;

export const CompletionCard = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    color: #666;
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
`;

export const CompletionIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: #e8f5e9;
  color: #388e3c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin: 0 auto 2rem;
`;

export const ResultButton = styled.button`
  padding: 1rem 2rem;
  background-color: #f06292;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #ec407a;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(240, 98, 146, 0.3);
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
  border: 3px solid #fce4ec;
  border-top: 3px solid #f06292;
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  margin: 1rem auto 0;
`;
