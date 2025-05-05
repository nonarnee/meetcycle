import styled from '@emotion/styled';

export const TipsCard = styled.div`
  background: #f9fafb;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  padding: 1.5rem 2rem;
`;

export const TipsTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
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
  color: #6366f1;
  display: flex;
  align-items: center;
`;

export const TipText = styled.span`
  font-size: 1rem;
  color: #374151;
`;
