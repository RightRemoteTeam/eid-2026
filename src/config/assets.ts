/**
 * Asset paths configuration
 * Centralized management of all image assets
 */

export const ASSETS = {
  backgrounds: {
    homes: '/assets/backgrounds/homes.png',
    familyScene: '/assets/backgrounds/family-scene.png',
  },

  icons: {
    logoMain: '/assets/icons/logo-main.png',
    logoSecondary: '/assets/icons/logo-secondary.png',
  },

  decorations: {
    eidBadge: '/assets/decorations/eid-badge.png',
    balloons: '/assets/decorations/balloons.png',
    candy: '/assets/decorations/candy.png',
    mabkhara: '/assets/decorations/mabkhara.png',
    oud: '/assets/decorations/oud.png',
    giftBox: '/assets/decorations/gift-box.png',
    star: '/assets/decorations/star.png',
    dallah: '/assets/decorations/dallah.png',
    lantern: '/assets/decorations/lantern.png',
    fireworks: '/assets/decorations/fireworks.png',
    kite: '/assets/decorations/kite.png',
  },
} as const;

export type AssetCategory = keyof typeof ASSETS;
