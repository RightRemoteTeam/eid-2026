/**
 * Type definitions for the Eid 2026 project
 */

export interface ParallaxElementProps {
  speed?: [number, number];
  translateX?: [number, number];
  translateY?: [number, number];
  rotate?: [number, number];
  scale?: [number, number];
  className?: string;
  children: React.ReactNode;
}

export interface DecorationProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  rotation?: number;
  flipY?: boolean;
  layer?: 'background' | 'midground' | 'foreground' | 'floating' | 'decorative';
}

export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}
