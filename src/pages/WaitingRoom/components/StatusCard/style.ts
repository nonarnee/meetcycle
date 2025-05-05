import styled from '@emotion/styled';

export const StatusCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  margin-bottom: 2rem;
`;

export const StatusHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const EventTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const StatusBadge = styled.span`
  background: #e0e7ff;
  color: #3730a3;
  border-radius: 8px;
  padding: 0.25rem 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const StatusContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WaitingAnimation = styled.div`
  margin-bottom: 1rem;
`;

export const Spinner = styled.div`
  width: 32px;
  height: 32px;
  border: 4px solid #e0e7ff;
  border-top: 4px solid #6366f1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StatusMessage = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

export const StatusDescription = styled.div`
  color: #6b7280;
  font-size: 0.95rem;
`;
