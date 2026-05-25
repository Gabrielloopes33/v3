"use client";

import {
  Children,
  createContext,
  type ButtonHTMLAttributes,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type CarouselContextValue = {
  current: number;
  total: number;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
  setTotal: (total: number) => void;
};

const CarouselContext = createContext<CarouselContextValue | null>(null);

type CarouselProps = {
  className?: string;
  children: ReactNode;
};

type CarouselContentProps = {
  className?: string;
  children: ReactNode;
  maxVisible?: number;
  stackOffset?: number;
};

type CarouselItemProps = {
  className?: string;
  children: ReactNode;
};

type CarouselButtonVariant = "default" | "outline-solid" | "ghost" | "link";
type CarouselButtonSize = "default" | "sm" | "lg" | "icon";

type CarouselButtonProps = {
  className?: string;
  variant?: CarouselButtonVariant;
  size?: CarouselButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
};

export function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within Carousel");
  }
  return context;
}

export function Carousel({ className = "", children }: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);

  const next = useCallback(() => {
    if (total <= 0) {
      return;
    }
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    if (total <= 0) {
      return;
    }
    setCurrent((prevIndex) => (prevIndex - 1 + total) % total);
  }, [total]);

  const goTo = useCallback(
    (index: number) => {
      if (total <= 0) {
        setCurrent(0);
        return;
      }
      const normalized = ((index % total) + total) % total;
      setCurrent(normalized);
    },
    [total],
  );

  const contextValue = useMemo(
    () => ({ current, total, next, prev, goTo, setTotal }),
    [current, total, next, prev, goTo],
  );

  return (
    <CarouselContext.Provider value={contextValue}>
      <section
        data-slot="carousel"
        className={`relative w-full overflow-hidden ${className}`.trim()}
        role="region"
        aria-roledescription="carousel"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            prev();
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            next();
          }
        }}
      >
        {children}
      </section>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({
  className = "",
  children,
  maxVisible = 3,
  stackOffset = 20,
}: CarouselContentProps) {
  const { current, total, setTotal, goTo } = useCarousel();
  const items = Children.toArray(children);

  useEffect(() => {
    setTotal(items.length);
  }, [items.length, setTotal]);

  useEffect(() => {
    if (current >= items.length && items.length > 0) {
      goTo(0);
    }
  }, [current, items.length, goTo]);

  return (
    <div
      data-slot="carousel-content"
      className={`relative min-h-80 w-full ${className}`.trim()}
      aria-live="polite"
    >
      {items.map((child, index) => {
        if (!total) {
          return null;
        }

        let offset = index - current;
        if (offset < 0) {
          offset += total;
        }

        const isVisible = offset < maxVisible;
        const scale = 1 - offset * 0.04;
        const opacity = isVisible ? 1 - offset * 0.2 : 0;

        return (
          <div
            key={index}
            className={`absolute inset-0 origin-top-left transition-all duration-500 ease-out ${
              isVisible ? "" : "pointer-events-none"
            }`.trim()}
            style={{
              transform: `translate3d(${offset * 14}px, ${offset * stackOffset}px, 0) scale(${scale})`,
              opacity,
              zIndex: total - offset,
            }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} de ${total}`}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

export function CarouselItem({ className = "", children }: CarouselItemProps) {
  return (
    <article
      data-slot="carousel-item"
      className={`h-full w-full overflow-hidden rounded-2xl border border-white/15 bg-black/55 ${className}`.trim()}
    >
      {children}
    </article>
  );
}

function getVariantClasses(variant: CarouselButtonVariant) {
  switch (variant) {
    case "ghost":
      return "border border-white/20 bg-black/35 text-white hover:bg-black/60";
    case "link":
      return "border-transparent bg-transparent text-[#F5C400] hover:text-white";
    case "default":
      return "border-transparent bg-[#F5C400] text-black hover:bg-[#E0B000]";
    case "outline-solid":
    default:
      return "border border-[#F5C400] bg-black/70 text-[#F5C400] hover:bg-[#F5C400] hover:text-black";
  }
}

function getSizeClasses(size: CarouselButtonSize) {
  switch (size) {
    case "sm":
      return "h-8 px-3 text-xs";
    case "lg":
      return "h-12 px-5 text-base";
    case "default":
      return "h-10 px-4 text-sm";
    case "icon":
    default:
      return "h-10 w-10 text-lg";
  }
}

function CarouselButton({
  className = "",
  variant = "outline-solid",
  size = "icon",
  disabled = false,
  onClick,
  children,
  ...props
}: CarouselButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-full font-semibold transition disabled:cursor-not-allowed disabled:opacity-40 ${getVariantClasses(variant)} ${getSizeClasses(size)} ${className}`.trim()}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export function CarouselPrevious(props: CarouselButtonProps) {
  const { prev, total } = useCarousel();
  return (
    <CarouselButton
      aria-label="Foto anterior"
      onClick={prev}
      disabled={total <= 1}
      {...props}
    >
      {props.children ?? "<"}
    </CarouselButton>
  );
}

export function CarouselNext(props: CarouselButtonProps) {
  const { next, total } = useCarousel();
  return (
    <CarouselButton
      aria-label="Próxima foto"
      onClick={next}
      disabled={total <= 1}
      {...props}
    >
      {props.children ?? ">"}
    </CarouselButton>
  );
}
