import React, { useEffect, useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Hero assets
import ribbon from "../../assets/images/icons/ribbon1.svg";
import eidLogoMain from "../../assets/images/icons/eidlogomain.svg";
import people from "../../assets/images/icons/people.svg";
import oud from "../../assets/images/icons/oud.svg";
import dallah from "../../assets/images/icons/dallah.svg";
import money from "../../assets/images/icons/money.svg";
import mabkhara from "../../assets/images/icons/mabkhara.svg";
import balloons from "../../assets/images/icons/balloons.svg";
import dallah2 from "../../assets/images/icons/dallah2.svg";
import giftBox from "../../assets/images/icons/giftbox.svg";
import bowl from "../../assets/images/icons/bowl.svg";
import halfnote from "../../assets/images/icons/halfnote.svg";
import musicnote1 from "../../assets/images/icons/musicnote.svg";
import musicnote2 from "../../assets/images/icons/musicnote2.svg";
import musicnote3 from "../../assets/images/icons/musicnote3.svg";
import ribbon2 from "../../assets/images/icons/ribbon2.svg";
import firework from "../../assets/images/icons/firework.svg";
import candy from "../../assets/images/icons/candy.svg";
import bgbuilding from "../../assets/images/icons/backbuildings.svg";
import spec1 from "../../assets/images/icons/spec1.svg";
import spec2 from "../../assets/images/icons/spec2.svg";
import spec3 from "../../assets/images/icons/spec3.svg";
import clouds from "../../assets/images/icons/clouds.svg";
import star from "../../assets/images/icons/star.svg";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Floating animations for decorations - scoped to hero section
    gsap.to(".hero-section .float-balloon", {
      y: -15,
      duration: 2.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".hero-section .float-star", {
      y: -10,
      x: 5,
      rotation: 5,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".hero-section .float-mabkhara", {
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

        {/* Hero Scene - Bottom */}
        <div className="hero-scene-bottom">
          <div className="scene-stage">
            <img src={ribbon} alt="" className="layer ribbon" />
            <div className="layer people">
              <Parallax speed={2} translateY={[7, -3]}>
                <img src={people} alt="" />
              </Parallax>
            </div>

            <div className="layer oud">
              <Parallax speed={6} translateY={[10, 0]} translateX={[0, 10]}>
                <img src={oud} alt="" />
              </Parallax>
            </div>
            <div className="layer dallah">
              <Parallax speed={2} translateX={[10,0]} translateY={[5, -2]}>
                <img src={dallah} alt="" />
              </Parallax>
            </div>
            <div className="layer money">
              <Parallax speed={5} translateX={[-10, 0]} translateY={[10, 0]}>
                <img src={money} alt="" />
              </Parallax>
            </div>
            <div className="layer mabkhara float-mabkhara">
              <Parallax speed={2} translateY={[6, -3]}>
                <img src={mabkhara} alt="" />
              </Parallax>
            </div>
            <div className="layer balloons float-balloon">
              <Parallax speed={2} translateX={[10, 0]} translateY={[12, 0]}>
                <img src={balloons} alt="" />
              </Parallax>
            </div>
            <div className="layer dallah2">
              <Parallax speed={2} rotate={[0, 20]} translateY={[5, -2]}>
                <img src={dallah2} alt="" />
              </Parallax>
            </div>
            <div className="layer giftbox">
              <Parallax speed={2} translateY={[10, -3]} rotate={[0, 20]}>
                <img src={giftBox} alt="" />
              </Parallax>
            </div>
            <div className="layer bowl">
              <Parallax speed={1} translateX={[-10, 0]} translateY={[10, 0]}>
                <img src={bowl} alt="" />
              </Parallax>
            </div>
            <div className="layer musicnote1">
              <Parallax speed={2} rotate={[0, -8]}>
                <img src={musicnote1} alt="" />
              </Parallax>
            </div>
            <div className="layer musicnote2">
              <Parallax speed={2} rotate={[0, -6]}>
                <img src={musicnote2} alt="" />
              </Parallax>
            </div>
            <div className="layer musicnote3">
              <Parallax speed={2} translateY={[18, -9]}>
                <img src={musicnote3} alt="" />
              </Parallax>
            </div>
            <div className="layer halfnote">
              <Parallax speed={2} translateY={[14, -7]}>
                <img src={halfnote} alt="" />
              </Parallax>
            </div>
            <div className="layer ribbon2">
              <Parallax speed={2} translateY={[3, -1]}>
                <img src={ribbon2} alt="" />
              </Parallax>
            </div>
            <div className="layer ribbon3">
              <Parallax speed={2} translateY={[3, -1]}>
                <img src={ribbon2} alt="" />
              </Parallax>
            </div>
            <div className="layer firework">
              <Parallax speed={1} scale={[0, 2]}>
                <img src={firework} alt="" />
              </Parallax>
            </div>
            <div className="layer candy">
              <Parallax speed={2} rotate={[0,30]} translateY={[6, -3]}>
                <img src={candy} alt="" />
              </Parallax>
            </div>
            <img src={bgbuilding} alt="" className="layer bgbuilding" />
          <div className="layer spec1">
            <Parallax speed={3} translateY={[12, -6]} translateX={[-5, 3]} rotate={[0, 15]}>
              <img src={spec1} alt="" />
            </Parallax>
          </div>
          <div className="layer spec2">
            <Parallax speed={2} translateY={[10, -5]} translateX={[4, -2]} rotate={[0, -20]}>
              <img src={spec2} alt="" />
            </Parallax>
          </div>
          <div className="layer spec3">
            <Parallax speed={4} translateY={[14, -7]} translateX={[-3, 5]} rotate={[0, 25]}>
              <img src={spec3} alt="" />
            </Parallax>
          </div>
          <div className="layer spec4">
            <Parallax speed={3} translateY={[15, -8]} translateX={[6, -4]} rotate={[0, -18]}>
              <img src={spec1} alt="" />
            </Parallax>
          </div>
          <div className="layer clouds">
            <Parallax speed={1} translateX={[-2, 0]} translateY={[2, -1]}>
              <img src={clouds} alt="" />
            </Parallax>
          </div>
          <div className="layer star float-star">
            <Parallax speed={2} scale={[0, 1]}>
              <img src={star} alt="" />
            </Parallax>
          </div>
          <div className="layer star2">
            <Parallax speed={2} scale={[0, 1]}>
              <img src={star} alt="" />
            </Parallax>
          </div>

        </div>
      </div>
    </div>
    </section >
  );
}
