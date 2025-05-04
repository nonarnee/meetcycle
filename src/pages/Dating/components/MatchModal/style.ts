import styled from '@emotion/styled';

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

export const ModalContent = styled.div`
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
