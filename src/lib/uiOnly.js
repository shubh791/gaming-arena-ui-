export const uiOnly = () =>
  typeof window !== "undefined" &&
  window.dispatchEvent(new CustomEvent("ui-only-click"));
