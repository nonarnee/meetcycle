import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { typography } from '@/styles/typography';

export const StatusCard = styled.div`
  background: ${colors.neutral[50]};
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  margin-bottom: 2rem;
  font-family: ${typography.fontFamily};
`;

export const StatusHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const EventTitle = styled.h2`
  font-size: ${typography.h4.fontSize};
  font-weight: ${typography.h4.fontWeight};
  line-height: ${typography.h4.lineHeight};
  font-family: ${typography.fontFamily};
`;

export const StatusBadge = styled.span`
  background: ${colors.primary.light};
  color: ${colors.primary.dark};
  border-radius: 8px;
  padding: 0.25rem 0.75rem;
  font-size: ${typography.body2.fontSize};
  font-weight: 600;
  font-family: ${typography.fontFamily};
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
  border: 4px solid ${colors.primary.light};
  border-top: 4px solid ${colors.primary.main};
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
  font-size: ${typography.body1.fontSize};
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-family: ${typography.fontFamily};
`;

export const StatusDescription = styled.div`
  color: ${colors.neutral[600]};
  font-size: ${typography.body2.fontSize};
  font-family: ${typography.fontFamily};
`;
