import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely, resolving conflicts.
 * Drop-in replacement for shadcn/ui cn() utility.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
