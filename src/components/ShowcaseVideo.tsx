type ShowcaseVideoProps = {
  title: string;
  badge?: string;
  videoSrc?: string;
  posterSrc?: string;
  className?: string;
  controls?: boolean;
};

export function ShowcaseVideo({
  title,
  badge,
  videoSrc = "/videos/hero1.mp4",
  posterSrc,
  className = "",
  controls = false,
}: ShowcaseVideoProps) {
  return (
    <div
      className={`reveal relative min-h-80 overflow-hidden border border-white/10 bg-black ${className}`.trim()}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterSrc}
        controls={controls}
      >
        <source src={videoSrc} type="video/mp4" />
        Seu navegador nao suporta video HTML5.
      </video>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
        {badge ? (
          <p className="rounded bg-black/80 px-3 py-1 text-xs tracking-[0.12em] text-[#F5C400] uppercase">
            {badge}
          </p>
        ) : null}
        <p className="text-lg font-semibold tracking-[0.08em] text-white uppercase">{title}</p>
      </div>
    </div>
  );
}
