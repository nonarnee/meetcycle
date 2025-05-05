import styled from '@emotion/styled';
import { motion } from 'motion/react';

import { ToastType } from '.';

export const ToastContainer = styled(motion.div)<{ type: ToastType }>`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  min-width: 300px;
  max-width: 90%;

  ${(props) => {
    switch (props.type) {
      case 'success':
        return `
          background-color: #e8f5e9;
          color: #2e7d32;
          border-left: 4px solid #4caf50;
        `;
      case 'error':
        return `
          background-color: #ffebee;
          color: #c62828;
          border-left: 4px solid #f44336;
        `;
      case 'info':
        return `
          background-color: #e3f2fd;
          color: #1565c0;
          border-left: 4px solid #2196f3;
        `;
    }
  }}
`;

export const IconWrapper = styled.div<{ type: ToastType }>`
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    switch (props.type) {
      case 'success':
        return `color: #4caf50;`;
      case 'error':
        return `color: #f44336;`;
      case 'info':
        return `color: #2196f3;`;
    }
  }}
`;

export const ToastMessage = styled.div`
  flex: 1;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  opacity: 0.7;
  cursor: pointer;
  margin-left: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
