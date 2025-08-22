import { useCallback, useMemo, useRef } from 'react';

// Hook for memoizing expensive calculations
export const useOptimizedData = <T>(data: T, dependencies: any[]): T => {
  return useMemo(() => data, [data, ...dependencies]);
};

// Hook for debouncing functions
export const useDebounce = (callback: Function, delay: number) => {
  return useCallback(
    (...args: any[]) => {
      const timeoutId = setTimeout(() => callback(...args), delay);
      return () => clearTimeout(timeoutId);
    },
    [callback, delay]
  );
};

// Hook for throttling functions
export const useThrottle = (callback: Function, limit: number) => {
  const inThrottleRef = useRef(false);
  
  return useCallback(
    (...args: any[]) => {
      if (!inThrottleRef.current) {
        callback(...args);
        inThrottleRef.current = true;
        setTimeout(() => (inThrottleRef.current = false), limit);
      }
    },
    [callback, limit]
  );
};

// Hook for preloading images
export const useImagePreloader = (imageUrls: string[]) => {
  const preloadImages = useCallback(() => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [imageUrls]);

  return preloadImages;
};
