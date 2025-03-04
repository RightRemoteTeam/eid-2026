import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { useOutletContext } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "react-router-dom";
import "../../assets/SCSS/Home/herosection.scss";
import audioFile from "../../assets/Sounds/1-morning-with-birds.mp3";
import buzz from "buzz";
import headerBg from "../../assets/images/heroSection/headerBg.png";
import headerMobileBg from "../../assets/images/heroSection/headerMobileBg.png";
import layer01 from "../../assets/images/heroSection/layer01-temp.png";
import layer02 from "../../assets/images/common/orange-balloon.png";
import layer03 from "../../assets/images/common/green-balloon.png";
import layer04 from "../../assets/images/heroSection/layer04.png";
import layer05 from "../../assets/images/heroSection/layer05.png";
import layer06 from "../../assets/images/heroSection/layer06.png";
import layer07 from "../../assets/images/common/candy.png";
import layer08 from "../../assets/images/heroSection/layer08.png";
import layer09 from "../../assets/images/heroSection/layer09.png";
import layer10 from "../../assets/images/heroSection/layer10.png";
import layer11 from "../../assets/images/heroSection/layer11.png";
import layer12 from "../../assets/images/common/cup.png";
import layer13 from "../../assets/images/heroSection/layer13.png";
import layer14 from "../../assets/images/common/dallah.png";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const { lang } = useParams();
  const [audioEnabled] = useOutletContext();
  const [pageLoaded] = useOutletContext();
  // const [audio] = useState(new Audio(audioFile));
  const sectionRef = useRef(null);
  const [aniamtionDone, setAnimationDone] = useState(false);
  const playAudioRef = useRef(audioEnabled);
  const audioRef = useRef(null);
  var mySound = new buzz.sound(audioFile);
  buzz.defaults.loop = true;
  useEffect(() => {
    const section = sectionRef.current;
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        id: "preparation",
      },
    });
    return () => {
      ScrollTrigger.getById("preparation").kill(true);
    };
  }, [audioEnabled]);
  const playBackgroundAudio = () => {
    if (audioEnabled === true) {
      // audioRef.current.loop = true;
      // audioRef.current.play();
      mySound.play();
    }
  };
  const stopBackgroundAudio = () => {
    if (audioEnabled) {
      // audioRef.current.pause();
      // audioRef.current.currentTime = 0;
      mySound.stop();
    }
  };
  useEffect(() => {
    if (!aniamtionDone) {
      setAnimationDone(true);

      gsap.to([".gsapBaloon"], {
        y: -8,
        x: 8,
        duration: 1.3,
        rotate: -5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to([".gsapBaloon"], {
        y: -22,
        x: 10,
        duration: 2,
        ease: "power1.in",
        repeat: -1,
        yoyo: true,
      });
      gsap.to([".gsapBaloon2"], {
        y: -10,
        x: 7,
        duration: 1.2,
        rotate: -3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to([".gsapBaloon2"], {
        y: -20,
        x: 12,
        duration: 2,
        ease: "power1.in",
        repeat: -1,
        yoyo: true,
      });

    }
  }, [pageLoaded]);
  return (
    <>
      <section ref={sectionRef} className="header">
        <div className="header-container">
          <div className="header-bg">
            <picture>
              <source srcSet={headerMobileBg} media="(max-width: 768px)" />
              <img src={headerBg} alt="Hero Background" />
            </picture>
          </div>
          <div className="layer01Wrap posAbsImg">
            <img src={layer01} className="layer-01 img-fit" alt="" />
          </div>
          <div className="layer02Wrap posAbsImg">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={10} translateY={[0, -50]} translateX={[0, -50]} >
              <div className="gsapBaloon">
                <img src={layer02} className="layer-02 img-fit" alt="" />
              </div>
            </Parallax>
          </div>
          <div className="layer03Wrap posAbsImg">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={10} translateY={[0, -50]} translateX={[0, 50]} >
              <div className="gsapBaloon2">
                <img src={layer03} className="layer-09 img-fit" alt="" />
              </div>
            </Parallax>
          </div>
          <div className="layer04Wrap posAbsImg">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={10} translateY={[0, -50]} translateX={[0, -50]} rotate={[0, 30]} >
              <img src={layer04} className="layer-04 img-fit" alt="" />
            </Parallax>
          </div>
          <div className="layer05Wrap posAbsImg">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={10} translateY={[0, -70]} translateX={[0, 50]} rotate={[0, -20]} >
              <img src={layer05} className="layer-05 img-fit" alt="" />
            </Parallax>
          </div>
          <div className="layer06Wrap posAbsImg">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={10} translateY={[0, -50]} translateX={[0, 50]} >
              <img src={layer06} className="layer-06 img-fit" alt="" />
            </Parallax>
          </div>
          <div className="layer07Wrap posAbsImg">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={10} translateY={[0, -50]} translateX={[0, 50]} >
              <img src={layer07} className="layer-07 img-fit" alt="" />
            </Parallax>
          </div>
          <div className="layer08Wrap posAbsImg">
            <Parallax shouldAlwaysCompleteAnimation={true} translateY={[0, -60]} translateX={[0, 50]} speed={10}>
              <img src={layer08} className="layer-08 img-fit" alt=""/>
            </Parallax>
          </div>
          <div className="layer09Wrap posAbsImg">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={5} translateY={[0, -50]} translateX={[0, 50]} >
              <img src={layer09} className="layer-09 img-fit" alt="" />
            </Parallax>
          </div>
          <div className="layer10Wrap posAbsImg">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={10} translateY={[0, -50]} translateX={[0, 50]} >
              <img src={layer10} className="layer-10 img-fit" alt="" />
            </Parallax>
          </div>
          <div className="layer11Wrap posAbsImg">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={5} translateY={[0, -60]} translateX={[0, -50]} >
              <img src={layer11} className="layer-11 img-fit" alt="" />
            </Parallax>
          </div>
          <div className="layer12Wrap posAbsImg">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={5} translateY={[0, -50]} translateX={[0, -50]} >
              <img src={layer12} className="layer-12 img-fit" alt="" />
            </Parallax>
          </div>
          <div className="layer13Wrap posAbsImg">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={10} translateY={[0, -80]} translateX={[0, -50]} >
              <img src={layer13} className="layer-13 img-fit" alt="" />
            </Parallax>
          </div>
          <div className="layer14Wrap posAbsImg">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={10} translateY={[0, -60]} translateX={[0, -50]} >
              <img src={layer14} className="layer-14 img-fit" alt="" />
            </Parallax>
          </div>
        </div>
      </section>
    </>
  );
}
