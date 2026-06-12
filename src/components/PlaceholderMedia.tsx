/* eslint-disable @next/next/no-img-element */

type PlaceholderMediaProps = {
  label: string;
  className?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
  imageClassName?: string;
  labelContainerClassName?: string;
  labelClassName?: string;
};

export function PlaceholderMedia({
  label,
  className = "",
  src,
  alt,
  priority = false,
  imageClassName = "object-cover",
  labelContainerClassName = "",
  labelClassName = "",
}: PlaceholderMediaProps) {
  const resolvedSrc = src ? encodeURI(src) : undefined;

  return (
    <div
      className={`relative overflow-hidden border border-white/10 bg-[linear-gradient(130deg,#111_0%,#1a1a1a_50%,#0a0a0a_100%)] ${className}`}
    >
      {resolvedSrc ? (
        <img
          src={resolvedSrc}
          alt={alt ?? label}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`absolute inset-0 h-full w-full ${imageClassName}`.trim()}
          aria-hidden={false}
        />
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,196,0,.15),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,.08),transparent_40%)]" />
      <div className={`relative flex h-full items-end p-4 ${labelContainerClassName}`.trim()}>
        {label ? (
          <span className={`rounded bg-black/70 px-3 py-1 text-xs font-medium tracking-[0.12em] text-[#F5C400] uppercase ${labelClassName}`.trim()}>
            {label}
          </span>
        ) : null}
      </div>
    </div>
  );
}
