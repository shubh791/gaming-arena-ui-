"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/src/lib/gsap";

/* ── Context ──────────────────────────────────────────────── */
const LenisContext = createContext(null);

/** Access the Lenis instance anywhere inside the provider. */
export function useLenis() {
  return useContext(LenisContext);
}

/* ── Provider ─────────────────────────────────────────────── */

/**
 * Global smooth scroll wrapper.
 * Mount once in the root layout — wraps the entire app.
 * GSAP ScrollTrigger is kept in sync via Lenis' raf loop.
 */
export default function SmoothScrollProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    // Sync GSAP ScrollTrigger positions with Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis via GSAP ticker — single unified animation loop
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
    </LenisContext.Provider>
  );
}
