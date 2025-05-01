import { useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns';

export function useCountdown(endTime: string | Date) {
  const [remainingSeconds, setRemainingSeconds] = useState(() => {
    const seconds = Math.max(differenceInSeconds(new Date(endTime), new Date()), 0);
    return isNaN(seconds) ? 0 : seconds;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const seconds = Math.max(differenceInSeconds(new Date(endTime), new Date()), 0);
      setRemainingSeconds(seconds);
      if (seconds === 0) {
        clearInterval(interval); // 타이머 정지
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return {
    remainingSeconds,
    isOver: remainingSeconds <= 0,
    format: {
      hour: String(Math.floor(remainingSeconds / 3600)).padStart(2, '0'),
      minute: String(Math.floor(remainingSeconds / 60)).padStart(2, '0'),
      second: String(remainingSeconds % 60).padStart(2, '0'),
    },
  };
}
