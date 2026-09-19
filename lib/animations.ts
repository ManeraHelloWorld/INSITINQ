/** Durations / easings aligned with animation spec PDF */
export const animations = {
  viewTransitionMs: 320,
  menuPanel: {
    duration: 0.28,
    ease: [0.22, 1, 0.36, 1] as const,
  },
  menuTextSlide: {
    duration: 0.22,
    ease: [0.22, 1, 0.36, 1] as const,
  },
  scrollReveal: {
    duration: 0.55,
    y: 24,
    ease: [0.22, 1, 0.36, 1] as const,
  },
  headerScrolled: {
    duration: 0.25,
  },
  counter: {
    durationMs: 1400,
  },
  nextPageTrigger: {
    fillMs: 600,
  },
  formError: {
    duration: 0.45,
  },
  formSuccess: {
    duration: 0.7,
  },
  marquee: {
    durationSec: 40,
  },
} as const;
