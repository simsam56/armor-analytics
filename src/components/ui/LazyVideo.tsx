'use client';

import { useRef, useEffect } from 'react';

export function LazyVideo({ src, className }: { src: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
