import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  repeat?: number;
  reverse?: boolean;
};

export function Marquee({ children, className = "", pauseOnHover = false, repeat = 2, reverse = false }: MarqueeProps) {
  const items = Array.from({ length: repeat }, (_, index) => (
    <div key={index} aria-hidden={index > 0} className="flex shrink-0 items-stretch gap-(--gap)">
      {children}
    </div>
  ));

  return (
    <div className={`group overflow-hidden [--gap:1rem] ${className}`.trim()}>
      <div
        className={`flex w-max min-w-max shrink-0 items-stretch gap-(--gap) will-change-transform ${reverse ? "animate-marquee-reverse" : "animate-marquee"} ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
      >
        {items}
        {items}
      </div>
    </div>
  );
}