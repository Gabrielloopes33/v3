"use client";

import { useEffect, useRef, useState } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

export function LazyVideo({ src, poster, className = "" }: LazyVideoProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "200px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {isVisible ? (
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <div className="h-full w-full bg-zinc-900">
          {poster && (
            <img
              src={poster}
              alt=""
              className="h-full w-full object-cover opacity-60"
              loading="lazy"
            />
          )}
        </div>
      )}
    </div>
  );
}
