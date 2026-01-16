'use client';

import Image from 'next/image';
import { ParallaxElement } from '@/components/parallax';
import { ELEMENT_PARALLAX, ParallaxLayer } from '@/config/parallax';

interface DecorationProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
  layer?: ParallaxLayer;
  rotation?: number;
  flipY?: boolean;
  priority?: boolean;
}

/**
 * Reusable decoration component with built-in parallax
 * Use for floating elements like candies, stars, balloons, etc.
 */
export function Decoration({
  src,
  alt,
  width,
  height,
  className = '',
  style,
  layer = 'floating',
  rotation = 0,
  flipY = false,
  priority = false,
}: DecorationProps) {
  const transformStyle: React.CSSProperties = {
    transform: `rotate(${rotation}deg)${flipY ? ' scaleY(-1)' : ''}`,
    ...style,
  };

  return (
    <ParallaxElement layer={layer} className={className}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={transformStyle}
        className="pointer-events-none select-none"
        priority={priority}
      />
    </ParallaxElement>
  );
}
