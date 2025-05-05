import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { typography } from '@/styles/typography';

export const TipsCard = styled.div`
  background: ${colors.neutral[100]};
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  padding: 1.5rem 2rem;
  font-family: ${typography.fontFamily};
`;

export const TipsTitle = styled.h3`
  font-size: ${typography.h4.fontSize};
  font-weight: ${typography.h4.fontWeight};
  line-height: ${typography.h4.lineHeight};
  margin-bottom: 1rem;
  font-family: ${typography.fontFamily};
`;

export const TipsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TipItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const TipIcon = styled.span`
  margin-right: 0.75rem;
  color: ${colors.primary.main};
  display: flex;
  align-items: center;
`;

export const TipText = styled.span`
  font-size: ${typography.body1.fontSize};
  color: ${colors.neutral[800]};
  font-family: ${typography.fontFamily};
`;
