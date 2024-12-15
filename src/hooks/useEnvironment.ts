import { useMemo } from 'react';

export const useEnvironment = () => {
  return useMemo(() => {
    const hostname = window?.location.hostname;
    const isDevelopment = hostname === 'localhost';
    const isProduction = !isDevelopment;
    return { isDevelopment, isProduction };
  }, [location.hostname]);
};
