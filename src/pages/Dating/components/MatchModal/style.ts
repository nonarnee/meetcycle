import styled from '@emotion/styled';
import { motion } from 'motion/react';
import { keyframes } from '@emotion/react';

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

export const ModalContent = styled(motion.div)`
  background-color: white;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
`;

export const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const HeartIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fce4ec;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f06292;

  svg {
    animation: ${pulse} 1.5s infinite;
  }
`;

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
    color: #333;
  }
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
`;

export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ChoiceOption = styled(motion.div)<{ selected: boolean; positive: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid
    ${(props) => (props.selected ? (props.positive ? '#4caf50' : '#f44336') : '#e0e0e0')};
  background-color: ${(props) =>
    props.selected
      ? props.positive
        ? 'rgba(76, 175, 80, 0.1)'
        : 'rgba(244, 67, 54, 0.1)'
      : 'white'};

  &:hover {
    border-color: ${(props) => (props.positive ? '#4caf50' : '#f44336')};
    background-color: ${(props) =>
      props.positive ? 'rgba(76, 175, 80, 0.05)' : 'rgba(244, 67, 54, 0.05)'};
  }
`;

export const ChoiceIconWrapper = styled.div<{ positive: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${(props) =>
    props.positive ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)'};
  color: ${(props) => (props.positive ? '#4caf50' : '#f44336')};
`;

export const ChoiceContent = styled.div`
  flex: 1;
`;

export const ChoiceTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const ChoiceDescription = styled.p`
  font-size: 0.875rem;
  color: #666;
  line-height: 1.5;
`;

export const ModalFooter = styled.div`
  padding: 1.25rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  border-top: 1px solid #f0f0f0;
`;
