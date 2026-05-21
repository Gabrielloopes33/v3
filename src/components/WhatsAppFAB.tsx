"use client";

import { useEffect, useState } from "react";
import { whatsappHref } from "@/lib/site";

export function WhatsAppFAB() {
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setPulse(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      data-analytics="whatsapp"
      data-location="floating-whatsapp-fab"
      className={`fixed right-6 bottom-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-105 ${
        pulse ? "animate-pulse" : ""
      }`}
      aria-label="Falar no WhatsApp"
      title="Fale conosco agora"
    >
      <span className="text-xl font-bold">W</span>
    </a>
  );
}
