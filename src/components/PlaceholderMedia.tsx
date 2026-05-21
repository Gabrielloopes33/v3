import Image from "next/image";

type PlaceholderMediaProps = {
  label: string;
  className?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
};

export function PlaceholderMedia({
  label,
  className = "",
  src,
  alt,
  priority = false,
}: PlaceholderMediaProps) {
  return (
    <div
      className={`relative overflow-hidden border border-white/10 bg-[linear-gradient(130deg,#111_0%,#1a1a1a_50%,#0a0a0a_100%)] ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? label}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={priority}
          className="object-cover"
        />
      ) : null}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,196,0,.15),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,.08),transparent_40%)]" />
      <div className="relative flex h-full items-end p-4">
        <span className="rounded bg-black/70 px-3 py-1 text-xs font-medium tracking-[0.12em] text-[#F5C400] uppercase">
          {label}
        </span>
      </div>
    </div>
  );
}
