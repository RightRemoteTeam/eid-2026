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
import layer01 from "../../assets/images/heroSection/layer01.png";
import layer02 from "../../assets/images/heroSection/layer02.svg";
import layer03 from "../../assets/images/heroSection/layer03.svg";
import layer04 from "../../assets/images/heroSection/layer04.svg";
import layer05 from "../../assets/images/heroSection/layer05.svg";
import layer06 from "../../assets/images/heroSection/layer06.svg";
import layer07 from "../../assets/images/heroSection/layer07.svg";
import layer08 from "../../assets/images/heroSection/layer08.png";
import layer09 from "../../assets/images/heroSection/layer09.png";
import layer10 from "../../assets/images/heroSection/layer10.svg";
import layer12 from "../../assets/images/heroSection/layer12.svg";
import layer13 from "../../assets/images/heroSection/layer13.svg";
import layer14 from "../../assets/images/heroSection/layer14.svg";
import layer15 from "../../assets/images/heroSection/layer15.svg";
import layer16 from "../../assets/images/heroSection/layer16.svg";
import layer18 from "../../assets/images/heroSection/layer18.svg";
import layer19 from "../../assets/images/heroSection/layer19.svg";
import layer20 from "../../assets/images/heroSection/layer20.svg";

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
    playAudioRef.current = audioEnabled;
  }, [audioEnabled]);
  useEffect(() => {
    const section = sectionRef.current;
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        id: "preparation",
        onEnter: () => {
          if (audioEnabled) {
            playBackgroundAudio();
          }
        },
        onToggle: ({ isActive }) => {
          if (isActive && playAudioRef.current) {
            playBackgroundAudio();
          }
        },

        onLeaveBack: () => {
          stopBackgroundAudio();
        },
        onEnterBack: (self) => {
          if (playAudioRef.current) {
            playBackgroundAudio();
          }
        },
        onLeave: (self) => {
          stopBackgroundAudio();
        },
      },
    });
    return () => {
      ScrollTrigger.getById("preparation").kill(true);
      stopBackgroundAudio();
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
      gsap.from([".gsapCup", ".gsapCupCoffee"], {
        delay: 1,
        scale: 2,
        x: 200,
        opacity: 0,
        duration: 0.8,
        rotate: 15,
        repeat: 0,
        ease: "power1.out",
        yoyo: false,
      });
      gsap.from(".jugImage", {
        // x: 20, // offset by the width of the box
        delay: 1,
        scale: 2,
        x: -200,
        opacity: 0,
        duration: 0.8,
        rotate: -15,
        repeat: 0,
        ease: "power1.out",
        yoyo: false,
      });

      gsap.from([".gsaphalf"], {
        delay: 1.4,
        opacity: 0,
        duration: 0.8,
        repeat: 0,
        ease: "power1.inOut",
        yoyo: false,
      });
      gsap.from([".gsapfull"], {
        delay: 1.5,
        opacity: 0,
        duration: 0.8,
        repeat: 0,
        ease: "power1.inOut",
        yoyo: false,
      });

      gsap.to(".gsapHeaderShine", {
        scale: 1.2,
        duration: 1.5,
        ease: "power1.inOut",
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
          <img src={headerBg} className="headerBg img-fit" alt="" />
          </div>
          <div className="layer01Wrap posAbsImg">
            <img src={layer01} className="layer01 img-fit" alt="" />
          </div>
          <div className="layer02Wrap posAbsImg">
            <img src={layer02} className="layer-02 img-fit" alt="" />
          </div>
          <div className="layer03Wrap posAbsImg">
            <img src={layer03} className="layer-03 img-fit" alt="" />
          </div>
          <div className="layer04Wrap posAbsImg">
            <img src={layer04} className="layer-04 img-fit" alt="" />
          </div>
          <div className="layer05Wrap posAbsImg">
            <img src={layer05} className="layer-05 img-fit" alt="" />
          </div>
          <div className="layer06Wrap posAbsImg">
            <img src={layer06} className="layer-06 img-fit" alt="" />
          </div>
          <div className="layer07Wrap posAbsImg">
            <img src={layer07} className="layer-07 img-fit" alt="" />
          </div>
          <div className="layer08Wrap posAbsImg">
            <img src={layer08} className="layer-08 img-fit" alt="" />
          </div>
          <div className="layer09Wrap posAbsImg">
            <img src={layer09} className="layer-09 img-fit" alt="" />
          </div>
          <div className="layer10Wrap posAbsImg">
            <img src={layer10} className="layer-10 img-fit" alt="" />
          </div>
          <div className="layer12Wrap posAbsImg">
            <img src={layer12} className="layer-12 img-fit" alt="" />
          </div>
          <div className="layer13Wrap posAbsImg">
            <img src={layer13} className="layer-13 img-fit" alt="" />
          </div>
          <div className="layer14Wrap posAbsImg">
            <img src={layer14} className="layer-14 img-fit" alt="" />
          </div>
          <div className="layer15Wrap posAbsImg">
            <img src={layer15} className="layer-15 img-fit" alt="" />
          </div>
          <div className="layer16Wrap posAbsImg">
            <img src={layer16} className="layer-16 img-fit" alt="" />
          </div>
          <div className="layer18Wrap posAbsImg">
            <img src={layer18} className="layer-18 img-fit" alt="" />
          </div>
          <div className="layer19Wrap posAbsImg">
            <img src={layer19} className="layer-19 img-fit" alt="" />
          </div>
          <div className="layer20Wrap posAbsImg">
            <img src={layer20} className="layer-20 img-fit" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
