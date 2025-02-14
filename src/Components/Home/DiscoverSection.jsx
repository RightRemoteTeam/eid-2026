import React, { useRef, useEffect } from "react";
import "../../assets/SCSS/Home/discoverSection.scss";
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "../Locale/en-new.json";
import Background from "../../assets/images/discover/background.png";
import GiantWheel from "../../assets/images/discover/giant-wheel.png";
import YellowCarpet from "../../assets/images/common/yellow-carpet.png";
import FireWorks from "../../assets/images/discover/fireworks.png";
import OrangeBalloon from "../../assets/images/common/orange-balloon.svg";
import GiftBox from "../../assets/images/common/gift-box.svg";
import Donut from "../../assets/images/common/donut.png";
import SweetsPlate from "../../assets/images/common/sweets-plate.png";
import GreenBalloon from "../../assets/images/common/green-balloon.png";
import Sparkles from "../../assets/images/discover/sparkles.png";
import EnjoySaudi from "../../assets/images/discover/enjoy-saudi-logo.png";

gsap.registerPlugin(ScrollTrigger);

export default function DiscoverSection() {
  const animPlayed = useRef(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        id: "3",
        onEnter: () => {
          if (!animPlayed.current) {
            animPlayed.current = true;
            playAnimation();
          }
        },
      },
    });
  }, []);
  const playAnimation = () => {
    const orangeBalloon = document.querySelector(
      ".discover-section .discover-gift-container .balloon-img img"
    );
    const greenBalloon = document.querySelector(
      ".discover-section .discover-sweets-container .balloon-img img"
    );

    if (orangeBalloon) {
      gsap.to([orangeBalloon], {
        y: 25,
        x: -15,
        duration: 2,
        delay: 0.5,

        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to([orangeBalloon], {
        y: 15,
        x: -10,
        delay: 0.5,
        duration: 2.5,
        rotate: -5,
        ease: "power1.in",
        repeat: -1,
        yoyo: true,
      });
    }

    if (greenBalloon) {
      gsap.to([greenBalloon], {
        y: 25,
        x: -15,
        duration: 2,
        delay: 0.5,

        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to([greenBalloon], {
        y: 15,
        x: -10,
        delay: 0.5,
        duration: 2.5,
        rotate: -5,
        ease: "power1.in",
        repeat: -1,
        yoyo: true,
      });
    }
  };

  return (
    <section ref={sectionRef} className="discover-section">
      <div className="discover-section-background">
        <img src={Background} className="img-fit" />
      </div>
      <div className="desc-container-1">
        <p className="section-desc-1">{data.discover.description1}</p>
      </div>

      <div className="discover-giantwheel-container">
        <div className="container-content">
          <div className="giantwheel-img">
            <Parallax translateX={[0, 8]} speed={10}>
              <img src={GiantWheel} alt="cart wheel" />
            </Parallax>
          </div>
          <div className="giantwheel-carpet">
            <Parallax speed={15}>
              <img src={YellowCarpet} alt="carpet" />
            </Parallax>
          </div>

          <div className="giantwheel-fireworks">
            <Parallax
              translateX={[0, 8]}
              scale={[0.2, 1]}
              opacity={[0.5, 1]}
              speed={5}
              className="fireworks-container"
            >
              <img src={FireWorks} alt="fireworks" />
            </Parallax>
          </div>
        </div>
      </div>

      <div className="discover-gift-container">
        <div className="container-content">
          <div className="balloon-img">
            <Parallax translateX={[10, 0]} speed={10}>
              <img src={OrangeBalloon} alt="balloon" />
            </Parallax>
          </div>
          <div className="giftbox-img">
            <Parallax speed={20}>
              <img src={GiftBox} alt="gift" />
            </Parallax>
          </div>
        </div>
      </div>

      <div className="discover-sweets-container">
        <div className="container-content">
          <div className="donut-img">
            <Parallax translateX={[0, 8]} speed={25}>
              <img src={Donut} alt="fireworks" />
            </Parallax>
          </div>
          <div className="sweetsplate-img">
            <Parallax translateX={[0, 8]} speed={10}>
              <img src={SweetsPlate} alt="sweets" />
            </Parallax>
          </div>
          <div className="balloon-img">
            <Parallax speed={15}>
              <img src={GreenBalloon} alt="balloon" />
            </Parallax>
          </div>
          <div className="sparkles-img">
            <Parallax speed={5}>
              <img src={Sparkles} alt="sparkles" />
            </Parallax>
          </div>
        </div>
      </div>

      <div className="desc-container-2">
        <p className="section-desc-2">{data.discover.description2}</p>
        <div className="discover-events-container ">
          <button className="btn btn-primary">Discover our EID events</button>
          <div className="logo-container">
            <img src={EnjoySaudi} alt="Enjoy Saudi" />
          </div>
        </div>
      </div>
    </section>
  );
}
