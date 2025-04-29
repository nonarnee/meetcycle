import styled from '@emotion/styled';

export const ShareSection = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

export const ShareCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  p {
    margin-bottom: 1rem;
    color: #666;
    line-height: 1.5;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const LinkInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  background-color: #f9f9f9;
  font-size: 0.875rem;

  &:focus {
    outline: none;
  }
`;

export const CopyButton = styled.button`
  background-color: #f06292;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  padding: 0 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ec407a;
  }
`;

export const ParticipantsSection = styled.section`
  margin-bottom: 2rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const ParticipantCount = styled.div`
  font-size: 0.875rem;
  color: #666;
`;

export const EmptyState = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  p {
    color: #666;
  }
`;

export const ParticipantsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ActionSection = styled.section`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-top: 2rem;

  p {
    margin-bottom: 1rem;
    color: #666;
  }
`;

export const ParticipantItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ParticipantAvatar = styled.div<{ gender: string }>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => (props.gender === 'male' ? '#bbdefb' : '#f8bbd0')};
  color: ${(props) => (props.gender === 'male' ? '#1976d2' : '#c2185b')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-right: 1rem;
`;

export const ParticipantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ParticipantName = styled.div`
  font-weight: 500;
  color: #333;
`;

export const ParticipantDetail = styled.div`
  font-size: 0.875rem;
  color: #757575;
`;
