/**
 * Central GSAP export — import animations from here, not directly from "gsap".
 * Register plugins here as they are added (ScrollTrigger, SplitText, etc.)
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once at module level
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

/**
 * Fade-up entrance — common cinematic reveal.
 * @param {Element|string} target  - DOM element or CSS selector
 * @param {object}         options - gsap.from() overrides
 */
export function fadeUp(target, options = {}) {
  return gsap.from(target, {
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    ...options,
  });
}

/**
 * Stagger children reveal.
 * @param {Element|string} parent   - parent element or selector
 * @param {string}         children - child selector
 * @param {object}         options  - gsap.from() overrides
 */
export function staggerReveal(parent, children, options = {}) {
  return gsap.from(`${parent} ${children}`, {
    y: 30,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.12,
    ...options,
  });
}
