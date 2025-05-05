import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

import * as S from './style';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
  message: string;
  type: ToastType;
  duration?: number;
  onClose?: () => void;
}

export default function Toast({ message, type, duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);

      if (onClose) {
        setTimeout(onClose, 300);
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} />;
      case 'error':
        return <AlertCircle size={20} />;
      case 'info':
        return <Info size={20} />;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <S.ToastContainer type={type}>
            <S.IconWrapper type={type}>{getIcon()}</S.IconWrapper>
            <S.ToastMessage>{message}</S.ToastMessage>
            <S.CloseButton onClick={() => setIsVisible(false)}>
              <X size={16} />
            </S.CloseButton>
          </S.ToastContainer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
