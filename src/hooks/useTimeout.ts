import { useCallback, useEffect, useRef } from 'react';

export const useTimeout = (): ((ms: number) => Promise<void>) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const setTimeoutPromise = useCallback((ms: number) => {
    return new Promise<void>((resolve) => {
      timeoutRef.current = setTimeout(() => {
        resolve();
      }, ms);
    });
  }, []);

  return setTimeoutPromise;
};
