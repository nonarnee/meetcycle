import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ParticipantBadge = styled.div`
  background-color: #f06292;
  color: white;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

export const WaitingCard = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const WaitingCardHeader = styled.div`
  padding: 1.5rem;
  background-color: #f8f8f8;
  border-bottom: 1px solid #eee;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
    color: #333;
  }
`;

export const EventTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
  color: #f06292;
`;

export const WaitingInfo = styled.div`
  padding: 1.5rem;
`;

export const StatusSection = styled.section`
  margin-bottom: 2rem;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: #333;
  }
`;

export const StatusText = styled.p`
  color: #666;
  line-height: 1.5;
`;
