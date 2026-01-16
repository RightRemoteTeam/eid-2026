'use client';

import { Parallax } from 'react-scroll-parallax';
import { ReactNode } from 'react';
import { PARALLAX_SPEEDS, ParallaxLayer } from '@/config/parallax';

interface ParallaxElementProps {
  children: ReactNode;
  layer?: ParallaxLayer;
  className?: string;
  // Custom overrides
  translateY?: [number, number];
  translateX?: [number, number];
  rotate?: [number, number];
  scale?: [number, number];
  speed?: number;
}

/**
 * Reusable parallax wrapper component
 * Uses predefined layer speeds or custom values
 */
export function ParallaxElement({
  children,
  layer = 'midground',
  className,
  translateY,
  translateX,
  rotate,
  scale,
  speed,
}: ParallaxElementProps) {
  // Get layer defaults
  const layerConfig = PARALLAX_SPEEDS[layer];

  // Merge with custom overrides
  const parallaxProps = {
    translateY: translateY || ('translateY' in layerConfig ? layerConfig.translateY : undefined),
    translateX: translateX || ('translateX' in layerConfig ? layerConfig.translateX : undefined),
    rotate: rotate || ('rotate' in layerConfig ? layerConfig.rotate : undefined),
    scale: scale || ('scale' in layerConfig ? layerConfig.scale : undefined),
    speed,
  };

  return (
    <Parallax {...parallaxProps} className={className}>
      {children}
    </Parallax>
  );
}
