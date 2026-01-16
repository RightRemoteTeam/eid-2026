'use client';

import { ParallaxProvider as ReactParallaxProvider } from 'react-scroll-parallax';
import { ReactNode } from 'react';

interface ParallaxProviderProps {
  children: ReactNode;
}

/**
 * Wrapper component for react-scroll-parallax provider
 * Must be used in a client component due to scroll event listeners
 */
export function ParallaxProvider({ children }: ParallaxProviderProps) {
  return (
    <ReactParallaxProvider>
      {children}
    </ReactParallaxProvider>
  );
}
