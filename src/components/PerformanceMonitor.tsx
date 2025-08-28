import React, { useEffect, useState } from "react";

interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  videoLoadTime: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    videoLoadTime: 0,
  });

  useEffect(() => {
    // Monitor Core Web Vitals
    if ("web-vitals" in window) {
      import("web-vitals").then(({ getLCP, getFID, getCLS }) => {
        getLCP((metric) => {
          setMetrics((prev) => ({ ...prev, lcp: metric.value }));
        });

        getFID((metric) => {
          setMetrics((prev) => ({ ...prev, fid: metric.value }));
        });

        getCLS((metric) => {
          setMetrics((prev) => ({ ...prev, cls: metric.value }));
        });
      });
    }

    // Monitor video load times
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
      const startTime = performance.now();
      video.addEventListener("loadeddata", () => {
        const loadTime = performance.now() - startTime;
        setMetrics((prev) => ({ ...prev, videoLoadTime: loadTime }));
      });
    });
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        background: "rgba(0,0,0,0.8)",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        fontSize: "12px",
        zIndex: 9999,
      }}
    >
      <h4>Performance Metrics</h4>
      <p>LCP: {metrics.lcp.toFixed(2)}ms</p>
      <p>FID: {metrics.fid.toFixed(2)}ms</p>
      <p>CLS: {metrics.cls.toFixed(4)}</p>
      <p>Video Load: {metrics.videoLoadTime.toFixed(2)}ms</p>
    </div>
  );
};

export default PerformanceMonitor;
