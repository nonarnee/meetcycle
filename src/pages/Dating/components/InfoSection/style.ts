import styled from '@emotion/styled';

import { Gender } from '@/types/participant';

export const PartnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const PartnerInfoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const ParticipantBadge = styled.span<{ gender: Gender }>`
  background-color: ${({ gender }) => (gender === 'male' ? '#90caf9' : '#f06292')};
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  gap: 0.5rem;

  strong {
    min-width: 100px;
  }
`;
