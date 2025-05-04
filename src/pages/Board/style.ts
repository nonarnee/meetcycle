import styled from '@emotion/styled';

import { MeetingStatus } from '@/types/meeting';

export const HostLabel = styled.span`
  background-color: #f06292;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

export const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const DatingInfoSection = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

export const DatingInfoCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const DatingTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
`;

export const DatingMeta = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

export const MetaItem = styled.div`
  margin-bottom: 0.5rem;
`;

export const Label = styled.div`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.25rem;
`;

export const Value = styled.div`
  font-weight: 500;
  color: #333;
`;

export const StatusValue = styled.div<{ status: MeetingStatus }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;

  background-color: ${(props) =>
    props.status === MeetingStatus.PENDING
      ? '#e3f2fd'
      : props.status === MeetingStatus.ONGOING
        ? '#e8f5e9'
        : props.status === MeetingStatus.COMPLETED
          ? '#fff8e1'
          : '#f5f5f5'};

  color: ${(props) =>
    props.status === MeetingStatus.PENDING
      ? '#1976d2'
      : props.status === MeetingStatus.ONGOING
        ? '#388e3c'
        : props.status === MeetingStatus.COMPLETED
          ? '#f57f17'
          : '#757575'};
`;
