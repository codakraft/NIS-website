import React, { useRef, useEffect, useState } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  fallbackImage?: string;
  rootMargin?: string;
  threshold?: number;
}

const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  fallbackImage,
  rootMargin = "200px",
  threshold = 0.1,
  className,
  ...videoProps
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin, threshold }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={containerRef} className={className}>
      {isInView && shouldLoad ? (
        <video
          ref={videoRef}
          {...videoProps}
          poster={poster}
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
          {fallbackImage && <img src={fallbackImage} alt="Video fallback" />}
        </video>
      ) : (
        poster && <img src={poster} alt="Video poster" />
      )}
    </div>
  );
};

export default LazyVideo;
