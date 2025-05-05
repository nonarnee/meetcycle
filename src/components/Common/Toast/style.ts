import styled from '@emotion/styled';
import { motion } from 'motion/react';

import { colors } from '@/styles/colors';

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
          background-color: ${colors.success}1A;
          color: ${colors.success};
          border-left: 4px solid ${colors.success};
        `;
      case 'error':
        return `
          background-color: ${colors.error}1A;
          color: ${colors.error};
          border-left: 4px solid ${colors.error};
        `;
      case 'info':
        return `
          background-color: ${colors.secondary.light};
          color: ${colors.secondary.dark};
          border-left: 4px solid ${colors.info};
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
        return `color: ${colors.success};`;
      case 'error':
        return `color: ${colors.error};`;
      case 'info':
        return `color: ${colors.info};`;
    }
  }}
`;

export const ToastMessage = styled.div`
  flex: 1;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: pre-line;
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
    background-color: ${colors.neutral[200]};
  }
`;
