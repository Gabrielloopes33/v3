"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function AnalyticsEvents() {
  const hasTracked60s = useRef(false);
  const hasTracked75Scroll = useRef(false);

  useEffect(() => {
    const trackSessionDuration = setTimeout(() => {
      if (!hasTracked60s.current) {
        hasTracked60s.current = true;
        trackEvent("session_60_seconds", {
          page_path: window.location.pathname,
        });
      }
    }, 60000);

    const onScroll = () => {
      if (hasTracked75Scroll.current) {
        return;
      }

      const doc = document.documentElement;
      const totalScroll = doc.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        return;
      }

      const progress = (window.scrollY / totalScroll) * 100;
      if (progress >= 75) {
        hasTracked75Scroll.current = true;
        trackEvent("scroll_75_percent", {
          page_path: window.location.pathname,
          progress: 75,
        });
      }
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[data-analytics='whatsapp']") as HTMLAnchorElement | null;
      if (!anchor) {
        return;
      }

      trackEvent("whatsapp_click", {
        page_path: window.location.pathname,
        cta_location: anchor.dataset.location ?? "unknown",
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);

    return () => {
      clearTimeout(trackSessionDuration);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
