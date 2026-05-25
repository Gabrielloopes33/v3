type ShowcaseVideoProps = {
  title: string;
  badge?: string;
  videoSrc?: string;
  posterSrc?: string;
  className?: string;
};

export function ShowcaseVideo({
  title,
  badge,
  videoSrc = "/videos/recepcao.mp4",
  posterSrc,
  className = "",
}: ShowcaseVideoProps) {
  return (
    <div
      className={`reveal relative min-h-80 overflow-hidden border border-white/10 bg-black ${className}`.trim()}
    >
      <video
        className="h-full w-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster={posterSrc}
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
