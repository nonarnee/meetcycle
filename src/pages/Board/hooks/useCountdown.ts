import { useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns';

export function useCountdown(endTime: string | Date) {
  const [remainingSeconds, setRemainingSeconds] = useState(() => {
    return Math.max(differenceInSeconds(new Date(endTime), new Date()), 0);
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

  return { remainingSeconds };
}
