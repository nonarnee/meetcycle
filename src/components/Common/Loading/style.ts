import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div<{ fullScreen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.fullScreen &&
    `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 1000;
  `}
`;

export const Spinner = styled.div<{ size: 'small' | 'medium' | 'large' }>`
  border-radius: 50%;
  border: 3px solid #fce4ec;
  border-top: 3px solid #f06292;
  animation: ${spin} 1s linear infinite;

  ${(props) => {
    switch (props.size) {
      case 'small':
        return `
          width: 24px;
          height: 24px;
        `;
      case 'medium':
        return `
          width: 40px;
          height: 40px;
        `;
      case 'large':
        return `
          width: 64px;
          height: 64px;
        `;
    }
  }}
`;

export const LoadingText = styled.p`
  margin-top: 1rem;
  color: #666;
  font-size: 1rem;
  font-weight: 500;
`;
