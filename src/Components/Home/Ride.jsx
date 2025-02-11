import React, { useEffect } from 'react'
import { useTheme } from '../ThemeContext';
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
    const { theme } = useTheme();
    const { t } = useTranslation();
    useEffect(() => {
        gsap.to([".rideElement0"], {
            y: 10, // offset by the width of the box
            x: 20,
            duration: 1,
            // rotate:10,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
        });
        // gsap.to([".rideElement02"], {
        //     y: 10, // offset by the width of the box
        //     x: 20,
        //     duration: 1,
        //     // rotate:10,
        //     ease: "power1.inOut",
        //     repeat: -1,
        //     yoyo: true 
        // });
        // gsap.to([".rideElement01"], {
        //   // x: 20, // offset by the width of the box
        //   y: 20,
        //   duration: 1.5,
        //   ease: "power1.inOut",
        //   repeat: -1,
        //   yoyo: true 
        // });
        gsap.to([".rideElement03"], {
            y: 20,
            duration: 1.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
        });
        gsap.to(".rideElement04", {
            y: 20,
            duration: 1.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
        });
      }, [])


  return (
    <>
        <section className="rideSection">
            <div className="rideSectionContainer">
                
                <div className='rideElements'>
                    <div className='rideElements0'>
                        <Parallax translateX={[-100,0]} speed={10}>
                        <img src={rideElement0} className='rideElement0 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='rideElements01'>
                        <Parallax translateX={[0, -50]} speed={10}>
                        <img src={rideElement01} className='rideElement01 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='rideElements02'>
                        <Parallax translateX={['0px', '50px']} speed={10}>
                        <img src={rideElement02} className='rideElement02 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='rideElements03'>
                        <Parallax translateX={['0px', '50px']} speed={10}>
                        <img src={rideElement03} className='rideElement03 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='rideElements04'>
                        <Parallax translateX={['0px', '50px']} speed={10}>
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
