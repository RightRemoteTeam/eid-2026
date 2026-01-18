import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import card1 from "../../assets/images/cards/card1.png";
import badge3 from "../../assets/images/cards/badge3.svg";
import firework from "../../assets/images/icons/firework.svg";
import giftBox from "../../assets/images/icons/giftbox.svg";
import star from "../../assets/images/icons/star.svg";
import musicnote1 from "../../assets/images/icons/musicnote.svg";
import musicnote2 from "../../assets/images/icons/musicnote2.svg";
import halfnote from "../../assets/images/icons/musicnote3.svg";
import dallah from "../../assets/images/icons/dallah.svg";
import dallah2 from "../../assets/images/icons/dallah2.svg";

gsap.registerPlugin(ScrollTrigger);

export default function TraditionsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Floating animations for decorations - scoped to traditions section
    gsap.to(".traditions-section .float-star", {
      scale: 1.3,
      opacity: 0.7,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
    gsap.to(".traditions-section .float-star2", {
      scale: 1.3,
      opacity: 0.7,
      duration: 1.8,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Wobble animations for music notes
    gsap.to(".traditions-section .musicnote1", {
      rotation: 15,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".traditions-section .musicnote2", {
      rotation: -12,
      duration: 2.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".traditions-section .halfnote", {
      rotation: -15,
      duration: 2.2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section className="traditions-section" ref={sectionRef}>
      <div className="traditions-content">
        <div className="traditions-content-block">
          {/* Top Card */}
          <img src={card1} alt="" className="layer card1" />

          {/* Center Badge */}
          <img src={badge3} alt="" className="layer badge3" />

          {/* Firework - Top Left */}
          <div className="layer firework">
            <Parallax speed={1} scale={[0.8, 1.2]}>
              <img src={firework} alt="" />
            </Parallax>
          </div>

          {/* Music Notes - Left Side */}
          <div className="layer musicnote1">
            <Parallax speed={2} rotate={[0, -8]}>
              <img src={musicnote1} alt="" />
            </Parallax>
          </div>
          <div className="layer musicnote2">
            <Parallax speed={1} rotate={[0, -6]}>
              <img src={musicnote2} alt="" />
            </Parallax>
          </div>
          <div className="layer halfnote">
            <Parallax speed={2} translateY={[14, -7]}>
              <img src={halfnote} alt="" />
            </Parallax>
          </div>

          {/* Gift Boxes - Right Side */}
          <div className="layer giftbox1">
            <Parallax speed={2} translateY={[10, -3]} rotate={[0, 20]}>
              <img src={giftBox} alt="" />
            </Parallax>
          </div>
          <div className="layer giftbox2">
            <Parallax speed={2} translateY={[8, -4]} rotate={[0, -15]}>
              <img src={giftBox} alt="" />
            </Parallax>
          </div>
          <div className="layer giftbox3">
            <Parallax speed={2} translateY={[8, -4]} rotate={[0, -15]}>
              <img src={giftBox} alt="" />
            </Parallax>
          </div>
          <div className="layer giftbox4">
            <Parallax speed={2} translateY={[8, -4]} rotate={[0, -15]}>
              <img src={giftBox} alt="" />
            </Parallax>
          </div>


          {/* Dallah - Bottom */}
          <div className="layer dallah">
            <Parallax speed={2} translateY={[5, -2]} rotate={[0,10]}>
              <img src={dallah} alt="" />
            </Parallax>
          </div>
          <div className="layer dallah2">
            <Parallax speed={2} rotate={[0, 20]} translateY={[5, -2]}>
              <img src={dallah2} alt="" />
            </Parallax>
          </div>

          {/* Stars - Scattered */}
          <div className="layer star1 float-star">
            <img src={star} alt="" />
          </div>
          <div className="layer star2 float-star2">
            <img src={star} alt="" />
          </div>

        </div>
      </div>
    </section>
  );
}
