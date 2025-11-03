"use client";

import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Set initial value
    setReduced(media.matches);

    const handler = () => setReduced(media.matches);
    if (media.addEventListener) {
      media.addEventListener("change", handler);
    } else {
      // Safari
      // @ts-ignore
      media.addListener(handler);
    }
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", handler);
      } else {
        // @ts-ignore
        media.removeListener(handler);
      }
    };
  }, []);

  return reduced;
}
