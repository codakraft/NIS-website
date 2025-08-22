import { useEffect, useState } from 'react';

/**
 * Progressive loading hook that delays non-critical content
 * until the main thread is free
 */
export const useProgressiveLoading = (delay: number = 0) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback if available, otherwise fallback to setTimeout
    const scheduleLoad = () => {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          setTimeout(() => setIsReady(true), delay);
        });
      } else {
        setTimeout(() => setIsReady(true), delay + 100);
      }
    };

    scheduleLoad();
  }, [delay]);

  return isReady;
};

/**
 * Hook to detect if the user is on a slow connection
 */
export const useConnectionSpeed = () => {
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const checkConnection = () => {
        // Consider 2G, slow-2g as slow connections
        const slowConnections = ['slow-2g', '2g'];
        setIsSlowConnection(
          slowConnections.includes(connection.effectiveType) || 
          connection.saveData
        );
      };
      
      checkConnection();
      connection.addEventListener('change', checkConnection);
      
      return () => connection.removeEventListener('change', checkConnection);
    }
  }, []);

  return isSlowConnection;
};

/**
 * Critical resource preloader
 */
export const preloadCriticalResources = () => {
  // Preload the hero fallback image
  const heroImage = new Image();
  heroImage.src = 'https://res.cloudinary.com/dgslbycvk/image/upload/v1754753061/_OP_9309_fdqvmd.jpg';
  
  // Preload key fonts
  if ('fonts' in document) {
    document.fonts.load('1em Effra');
  }
};

/**
 * Performance monitoring utility
 */
export const measurePerformance = (name: string) => {
  if ('performance' in window && 'mark' in performance) {
    performance.mark(`${name}-start`);
    
    return () => {
      performance.mark(`${name}-end`);
      try {
        performance.measure(name, `${name}-start`, `${name}-end`);
        const measure = performance.getEntriesByName(name, 'measure')[0];
        console.log(`${name} took ${measure.duration.toFixed(2)}ms`);
      } catch (error) {
        console.warn('Performance measurement failed:', error);
      }
    };
  }
  
  // Fallback for browsers without performance API
  const start = Date.now();
  return () => {
    const duration = Date.now() - start;
    console.log(`${name} took ${duration}ms`);
  };
};
