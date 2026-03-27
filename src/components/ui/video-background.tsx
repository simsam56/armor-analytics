'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface VideoBackgroundProps {
  /** Path to the MP4 video file */
  src: string;
  /** Path to the poster/fallback image */
  poster: string;
  /** Optional CSS class for the overlay (default: semi-transparent navy) */
  overlayClassName?: string;
  /** Content to render on top of the video */
  children: React.ReactNode;
  /** Additional CSS classes for the outer container */
  className?: string;
}

export function VideoBackground({
  src,
  poster,
  overlayClassName = 'bg-breton-navy/80',
  children,
  className = '',
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    // Only load video when it enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.src = src;
          video.load();
          observer.disconnect();
        }
      },
      { rootMargin: '200px' },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src, prefersReducedMotion]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 1. Poster fallback — always behind, fades out once video loads */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isLoaded && !prefersReducedMotion ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backgroundImage: `url(${poster})` }}
        aria-hidden="true"
      />

      {/* 2. Video layer — on top of poster */}
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          onLoadedData={() => setIsLoaded(true)}
          className={`absolute inset-0 z-[1] h-full w-full object-cover transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
      )}

      {/* 3. Overlay */}
      <div className={`absolute inset-0 z-[2] ${overlayClassName}`} aria-hidden="true" />

      {/* 4. Content */}
      <div className="relative z-[3]">{children}</div>
    </div>
  );
}
