import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const ResultsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const ResultsHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const ResultsTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const ResultsSummary = styled.p`
  font-size: 1.25rem;
  color: #666;
`;

export const MatchesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const MatchCard = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const MatchAnimation = styled.div`
  width: 80px;
  height: 80px;
  background-color: #fce4ec;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    animation: ${pulse} 1.5s infinite;
  }
`;

export const MatchInfo = styled.div`
  flex: 1;
`;

export const MatchName = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 1rem;
`;

export const MatchDetails = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;

export const MatchDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #555;
  font-size: 1rem;
`;

export const MatchContact = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #f06292;
  margin-bottom: 1rem;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;

export const MatchComment = styled.p`
  color: #555;
  line-height: 1.6;
  margin: 0;
`;

export const NoMatchesCard = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const NoMatchesIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
`;

export const NoMatchesTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

export const NoMatchesMessage = styled.p`
  color: #666;
  font-size: 1.125rem;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
`;
