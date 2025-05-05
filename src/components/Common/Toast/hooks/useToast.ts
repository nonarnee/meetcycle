import { useState } from 'react';

import { ToastType } from '../index';

interface ToastState {
  visible: boolean;
  message: string;
  type: ToastType;
}

export function useToast() {
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    message: '',
    type: 'info',
  });

  const showToast = (message: string, type: ToastType = 'info', duration: number = 3000) => {
    setToast({ visible: true, message, type });

    if (duration > 0) {
      setTimeout(() => {
        hideToast();
      }, duration);
    }
  };

  const hideToast = () => {
    setToast((prev) => ({ ...prev, visible: false }));
  };

  return {
    toast,
    showToast,
    hideToast,
  };
}
