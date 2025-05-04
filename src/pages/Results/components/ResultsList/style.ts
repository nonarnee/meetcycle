import styled from '@emotion/styled';

export const UserResultsContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

export const MatchList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MatchCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  p {
    font-size: 1.1rem;
  }
`;

export const NoMatchesMessage = styled.p`
  color: #666;
  font-size: 1.1rem;
  text-align: center;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
