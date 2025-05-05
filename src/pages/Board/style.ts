import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { typography } from '@/styles/typography';
import { MeetingStatus } from '@/types/meeting';

export const HostLabel = styled.span`
  background-color: ${colors.primary.main};
  color: #fff;
  font-size: ${typography.caption.fontSize};
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
    font-size: ${typography.h3.fontSize};
    font-weight: ${typography.h3.fontWeight};
    margin-bottom: 1rem;
  }
`;

export const DatingInfoCard = styled.div`
  background-color: ${colors.neutral[50]};
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const DatingTitle = styled.h3`
  font-size: ${typography.h4.fontSize};
  font-weight: ${typography.h4.fontWeight};
  margin-bottom: 1rem;
  color: ${colors.neutral[800]};
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
  font-size: ${typography.body2.fontSize};
  color: ${colors.neutral[600]};
  margin-bottom: 0.25rem;
`;

export const Value = styled.div`
  font-weight: 500;
  color: ${colors.neutral[800]};
`;

export const StatusValue = styled.div<{ status: MeetingStatus }>`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 500;

  background-color: ${(props) =>
    props.status === MeetingStatus.PENDING
      ? colors.secondary.light
      : props.status === MeetingStatus.ONGOING
        ? colors.success + '20'
        : props.status === MeetingStatus.COMPLETED
          ? colors.warning + '20'
          : colors.neutral[100]};

  color: ${(props) =>
    props.status === MeetingStatus.PENDING
      ? colors.secondary.main
      : props.status === MeetingStatus.ONGOING
        ? colors.success
        : props.status === MeetingStatus.COMPLETED
          ? colors.warning
          : colors.neutral[700]};
`;
