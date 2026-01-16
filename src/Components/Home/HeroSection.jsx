import React, { useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Hero assets
import eidLogoMain from "../../assets/images/hero/eid-logo-main.png";
import heroScene from "../../assets/images/hero/hero-scene.png";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Floating animations for decorations
    gsap.to(".float-balloon", {
      y: -15,
      duration: 2.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".float-star", {
      y: -10,
      x: 5,
      rotation: 5,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".float-mabkhara", {
      y: -8,
      rotation: 3,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section ref={sectionRef} className="hero-section">
      <div className="hero-content">
        {/* Main Logo - Top */}
        <div className="hero-logo-top">
          <img src={eidLogoMain} alt="عيد الفطر 2026" className="hero-main-logo" />
        </div>

        {/* Hero Scene - Bottom */}
        <div className="hero-scene-bottom">
          <img src={heroScene} alt="" className="hero-scene-image" />
        </div>
      </div>
    </section>
  );
}
