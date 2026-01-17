import { Parallax } from "react-scroll-parallax";
import badge1 from "../../assets/images/cards/badge1.svg";
import building from "../../assets/images/icons/building.svg";
import road from "../../assets/images/icons/road.svg";
import firework from "../../assets/images/icons/firework.svg";
import badge2 from "../../assets/images/cards/badge2.svg";
import wallet from "../../assets/images/icons/wallet.svg";
import balloons from "../../assets/images/icons/balloons.svg";
import makhbara from "../../assets/images/icons/mabkhara.svg";
import star from "../../assets/images/icons/star.svg";
import candy from "../../assets/images/icons/candy.svg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function GreetingSection() {
    const sectionRef = useRef(null);

  useEffect(() => {
    // Floating animations for decorations - scoped to greeting section
    gsap.to(".greeting-section .float-balloon", {
      y: -15,
      duration: 2.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".greeting-section .float-star", {
      y: -10,
      x: 5,
      rotation: 5,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".greeting-section .float-mabkhara", {
      y: -2,
      rotation: -55,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);
  return (
    <section className="greeting-section " ref={sectionRef}>
      <div className="greeting-frame">
        <img src={badge1} alt="" />
      </div>
      <div className="greeting-content">
        <div className="greeting-content-block">

          <div className="layer building">
            <Parallax speed={2} translateY={[5, -5]}>
              <img src={building} alt="" />
            </Parallax>
          </div>
          <img src={road} alt="" className="layer road" />
          <div className="layer firework">
            <Parallax speed={1} scale={[0.8, 1.2]}>
              <img src={firework} alt="" />
            </Parallax>
          </div>
          <img src={badge2} alt="" className="layer badge2" />
          <div className="layer wallet">
            <Parallax speed={2} translateY={[5, -3]} rotate={[0, 25]}>
              <img src={wallet} alt="" />
            </Parallax>
          </div>
          <div className="layer balloons float-balloon">
            <Parallax speed={10} translateY={[0, -30]}>
              <img src={balloons} alt="" />
            </Parallax>
          </div>
          <div className="layer makhbara float-mabkhara">
            <Parallax speed={2} translateY={[10, -10]} rotate={[0,-20]}>
              <img src={makhbara} alt="" />
            </Parallax>
          </div>
          <div className="layer star1 float-star">
              <img src={star} alt="" />
          </div>
          <div className="layer star2 float-star">
              <img src={star} alt="" />
          </div>

          {/* Candy Trail */}
          <div className="layer candy1">
            <Parallax speed={3} translateY={[0, -10]} rotate={[0, 15]}>
              <img src={candy} alt="" />
            </Parallax>
          </div>
          <div className="layer candy2">
            <Parallax speed={2} translateY={[0, -10]} rotate={[0, -10]}>
              <img src={candy} alt="" />
            </Parallax>
          </div>
          <div className="layer candy3">
            <Parallax speed={4} translateY={[0, -10]} rotate={[0, 20]}>
              <img src={candy} alt="" />
            </Parallax>
          </div>
          <div className="layer candy4">
            <Parallax speed={2} translateY={[0, -10]} rotate={[0, -15]}>
              <img src={candy} alt="" />
            </Parallax>
          </div>
          <div className="layer candy5">
            <Parallax speed={3} translateY={[0, -10]} rotate={[0, 25]}>
              <img src={candy} alt="" />
            </Parallax>
          </div>

        </div>
      </div>
      <div>

      </div>
    </section>
  );
}
