import React, { useEffect, useRef } from 'react'
import { useTranslation } from "react-i18next";

import "../../assets/SCSS/Home/ride.scss"

import rideElement0 from "../../assets/images/rideElement0.png";
import rideElement01 from "../../assets/images/rideElement01.png";
import rideElement02 from "../../assets/images/rideElement02.png";
import rideElement03 from "../../assets/images/rideElement03.png";
import rideElement04 from "../../assets/images/rideElement04.png";
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export default function RideSection() {
    const { t } = useTranslation();
    const animPlayed = useRef(false);
    const sectionRef = useRef(null);
    useEffect(() => {
        const section = sectionRef.current;
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              if (!animPlayed.current) {
                animPlayed.current = true;
                playIntro()
              }
            },
          }
        });
      }, [])
    const playIntro = () => {
      gsap.to(".gsaprideElements01", {
        scale: 1,
        opacity: 1,
        duration: 2,
        x:'90%',
        repeat: 0,
        ease: "power1.inOut",
        yoyo: false
      });
      gsap.to(".gsaprideElements02", {
        scale: 1,
        opacity: 1,
        duration: 2,
        x:'-90%',
        repeat: 0,
        ease: "power1.inOut",
        yoyo: false
      });
        gsap.to([".gsapGreetingBalloon"], {
          y: -15,
          x: 10,
          duration: 1.5,
          rotate:-5,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to([".gsapGreetingBalloon"], {
          y: -25,
          x: 15,
          duration: 2,
          ease: "power1.in",
          repeat: -1,
          yoyo: true 
        });
        gsap.to([".rideElement0"], {
            y: -15,
            x: 10,
            duration: 1.5,
            rotate: -5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
          });
          gsap.to([".rideElement0"], {
            y: -25,
            x: 15,
            duration: 2,
            ease: "power1.in",
            repeat: -1,
            yoyo: true
          });
      }

  return (
    <>
        <section ref={sectionRef} className="rideSection">
            <div className="rideSectionContainer">
                
                <div className='rideElements'>
                    <div className='rideElements0'>
                        <Parallax translateX={[-100,0]} speed={10}>
                        <img src={rideElement0} className='rideElement0 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='rideElements01 gsaprideElements01'>
                        <Parallax translateX={[0, 50]} scale={[1.2,0.9]} speed={15}>
                            <img src={rideElement01} className='rideElement01 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='rideElements02 gsaprideElements02'>
                        <Parallax translateX={[0, -50]} translateY={[5,-15]} scale={[1.1,0.8]} speed={10}>
                            <img src={rideElement02} className='rideElement02 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='rideElements03'>
                        <Parallax  easing={'ease'} translateX={[30,0]} speed={8}>
                          <img src={rideElement03} className='rideElement03 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='rideElements04'>
                        <Parallax easing={'ease'} translateX={[30,0]}speed={5}>
                          <img src={rideElement04} className='rideElement04 img-fit' alt="" />
                        </Parallax>
                    </div>
                </div>
                <div className="section-box">
                    {/* <h2>
                        {t("rideSection.title")}
                    </h2> */}
                    <p className="section-description">
                        {t("rideSection.para")}
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}
