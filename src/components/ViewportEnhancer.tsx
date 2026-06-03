"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function animateCountUp(element: HTMLElement, target: number, duration = 1200) {
  const start = performance.now();

  const step = (timestamp: number) => {
    const progress = Math.min((timestamp - start) / duration, 1);
    const value = Math.floor(progress * target);
    element.textContent = value.toLocaleString("pt-BR");

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

export function ViewportEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const countItems = Array.from(document.querySelectorAll<HTMLElement>("[data-countup]"));
    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const countObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;
          const target = Number(element.dataset.countup ?? "0");
          if (!Number.isNaN(target)) {
            animateCountUp(element, target);
          }
          countObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    countItems.forEach((item) => countObserver.observe(item));

    let rafId = 0;

    const updateParallax = () => {
      rafId = 0;

      if (reducedMotion || parallaxItems.length === 0) {
        return;
      }

      const scrollY = window.scrollY;
      parallaxItems.forEach((item) => {
        const ratio = Number(item.dataset.parallax ?? "8");
        const shift = (scrollY * ratio) / 100;
        item.style.transform = `translate3d(0, ${shift}px, 0)`;
      });
    };

    const onScroll = () => {
      if (rafId !== 0) {
        return;
      }
      rafId = requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      countObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (rafId !== 0) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [pathname]);

  return null;
}
