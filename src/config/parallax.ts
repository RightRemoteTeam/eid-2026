/**
 * Parallax Configuration
 *
 * Defines speed values for different depth layers.
 * Negative values move opposite to scroll direction (creates depth).
 * Larger absolute values = more movement.
 */

export const PARALLAX_SPEEDS = {
  // Background layer - slowest movement (furthest away)
  background: {
    translateY: [-5, 5] as [number, number],
    scale: [1, 1.05] as [number, number],
  },

  // Midground layer - medium movement
  midground: {
    translateY: [-10, 10] as [number, number],
    scale: [1, 1.02] as [number, number],
  },

  // Foreground layer - fastest movement (closest to viewer)
  foreground: {
    translateY: [-20, 20] as [number, number],
    scale: [1, 1.01] as [number, number],
  },

  // Floating decorations - subtle floating effect
  floating: {
    translateY: [-15, 15] as [number, number],
    translateX: [-5, 5] as [number, number],
    rotate: [-5, 5] as [number, number],
  },

  // Stars and small elements - more dramatic movement
  decorative: {
    translateY: [-25, 25] as [number, number],
    translateX: [-10, 10] as [number, number],
    rotate: [-15, 15] as [number, number],
  },
};

/**
 * Element-specific parallax configurations
 * Maps element types to their parallax behavior
 */
export const ELEMENT_PARALLAX = {
  // Large background images
  homes: PARALLAX_SPEEDS.background,
  familyScene: PARALLAX_SPEEDS.midground,

  // Decorative elements by size/importance
  balloons: PARALLAX_SPEEDS.floating,
  candies: PARALLAX_SPEEDS.decorative,
  stars: PARALLAX_SPEEDS.decorative,
  mabkhara: PARALLAX_SPEEDS.midground,
  dallah: PARALLAX_SPEEDS.midground,
  oud: PARALLAX_SPEEDS.midground,
  giftBox: PARALLAX_SPEEDS.floating,
  lantern: PARALLAX_SPEEDS.floating,
  fireworks: PARALLAX_SPEEDS.foreground,
  kite: PARALLAX_SPEEDS.decorative,

  // Static/hero elements (minimal parallax)
  logo: {
    translateY: [-3, 3] as [number, number],
  },
  badge: {
    translateY: [-5, 5] as [number, number],
    scale: [0.98, 1.02] as [number, number],
  },
};

export type ParallaxLayer = keyof typeof PARALLAX_SPEEDS;
export type ElementType = keyof typeof ELEMENT_PARALLAX;
