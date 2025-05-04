import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
`;

export const DatingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  background-color: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;

export const Timer = styled.div<{ isLow: boolean }>`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) => (props.isLow ? '#f44336' : '#333')};
  animation: ${(props) => (props.isLow ? 'pulse 1s infinite' : 'none')};

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const DatingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ButtonWrapper = styled.div`
  margin: 2rem 0;
`;

export const ConversationTips = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: #333;
  }
`;

export const TipsList = styled.ul`
  margin: 0;
`;

export const TipItem = styled.li`
  margin-bottom: 0.5rem;
  color: #555;
  line-height: 1.4;
`;

export const CompletionCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    color: #666;
    font-size: 1.125rem;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const MatchModal = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
  }
`;

export const MatchChoices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const MatchChoice = styled.div<{ selected: boolean; positive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid
    ${(props) => (props.selected ? (props.positive ? '#4caf50' : '#f44336') : '#e0e0e0')};
  background-color: ${(props) =>
    props.selected ? (props.positive ? '#e8f5e9' : '#ffebee') : 'white'};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${(props) => (props.positive ? '#4caf50' : '#f44336')};
    background-color: ${(props) => (props.positive ? '#e8f5e9' : '#ffebee')};
  }

  span {
    font-size: 1.5rem;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  button {
    flex: 1;
  }
`;
