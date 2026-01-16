'use client';

import Image from 'next/image';
import { ParallaxElement } from '@/components/parallax';

// Static imports for images (recommended in Next.js)
import logoMain from '@/../public/assets/icons/logo-main.png';
import familyScene from '@/../public/assets/backgrounds/family-scene.png';

/**
 * Hero Section - Top of the page
 * Contains: Logo, Family Scene illustration
 */
export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Main Logo */}
      <ParallaxElement layer="foreground" className="absolute left-1/2 top-[76px] -translate-x-1/2 z-20">
        <Image
          src={logoMain}
          alt="فعاليات العيد - Eid Events"
          priority
          className="w-auto h-auto max-w-[75] md:max-w-[467px]"
        />
      </ParallaxElement>

      {/* Family Scene - Main Illustration */}
      <ParallaxElement layer="midground" className="absolute left-1/2 top-[375px] -translate-x-1/2 z-10">
        <Image
          src={familyScene}
          alt="Eid Family Celebration"
          priority
          className="w-auto h-auto max-w-[90vw] md:max-w-[1806px]"
        />
      </ParallaxElement>

      {/* TODO: Add decorative elements - balloons, oud, dallah, etc. */}
    </section>
  );
}
