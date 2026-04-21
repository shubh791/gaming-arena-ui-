"use client";

import { useLenis } from "@/src/components/SmoothScrollProvider";

/**
 * Hook: access the global Lenis instance for programmatic scroll.
 *
 * @example
 *   const lenis = useSmoothScroll();
 *   lenis.current?.scrollTo("#section", { offset: -80 });
 */
export function useSmoothScroll() {
  return useLenis();
}
