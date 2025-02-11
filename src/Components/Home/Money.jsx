import React, { useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { useTranslation } from "react-i18next";
import "../../assets/SCSS/Home/money.scss"
import moneyElement03 from "../../assets/images/moneyElement03.png";
import enjoySaudi from "../../assets/images/enjoySaudi.png";
import moneyKite from "../../assets/images/moneyKite.png";
import moneyBaloon from "../../assets/images/moneyBaloon.png";
import moneygreenBaloon from "../../assets/images/moneygreenBaloon.png";
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export default function MoneySection() {
    const { theme } = useTheme();
    const { t } = useTranslation();
    useEffect(() => {
        gsap.to([".moneyElements0"], {
          // x: 20, // offset by the width of the box
          y: 20,
          duration: 1.5,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to([".moneyElements01"], {
          // x: 20, // offset by the width of the box
          y: 20,
          duration: 1.5,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to([".moneyElements02"], {
          // x: 20, // offset by the width of the box
          y: 20,
          duration: 1.5,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to([".moneyElements03"], {
            y: 20,
            duration: 1.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
        });
        gsap.to(".moneyElements04", {
            y: 20,
            duration: 1.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
        });
        gsap.to(".moneyElements05", {
            y: 20,
            duration: 1.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
        });
        gsap.to(".moneyElements06", {
            y: 20,
            duration: 1.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
        });
        gsap.to([".moneyElements08"], {
           // y: 10, // offset by the width of the box
            x: 20,
            duration: 1,
            // rotate:10,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
        });
        gsap.to([".moneyElements09"], {
            y: 10, // offset by the width of the box
            x: 20,
            duration: 2,
            // rotate:10,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
        });
      }, [])


  return (
    <>
        <section className="moneySection">
            <div className="moneySectionContainer">
                
                <div className='moneyElements'>
                    {/* <div className='moneyElements0'>
                        <Parallax translateX={['0px', '-50px']} speed={10}>
                            <img src={moneyElement0} className='moneyElement0 img-fit' alt="" />
                        </Parallax>
                    </div> 
                    <div className='moneyElements01'>
                        <Parallax translateX={['0px', '-50px']} speed={10}>
                            <img src={moneyElement01} className='moneyElement01 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='moneyElements02'>
                        <Parallax translateX={['0px', '-50px']} speed={10}>
                            <img src={moneyElement02} className='moneyElement02 img-fit' alt="" />
                        </Parallax>
                    </div> */}
                    <div className='moneyElements03'>
                        <Parallax translateX={['0px', '-50px']} speed={10}>
                            <img src={moneyElement03} className='moneyElement03 img-fit' alt="" />
                        </Parallax>
                    </div>
                    {/* <div className='moneyElements04'>
                        <Parallax translateX={['0px', '-50px']} speed={10}>
                            <img src={moneyElement04} className='moneyElement04 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='moneyElements05'>
                        <Parallax translateX={['0px', '-50px']} speed={10}>
                            <img src={moneyElement05} className='moneyElement05 img-fit' alt="" />
                        </Parallax>
                    </div> 
                    <div className='moneyElements06'>
                        <Parallax translateX={['0px', '-50px']} speed={10}>
                            <img src={moneyElement06} className='moneyElement06 img-fit' alt="" />
                        </Parallax>
                    </div>*/}
                    <div className='moneyElements07'>
                        <Parallax translateX={['0px', '-50px']} speed={10}>
                            <img src={moneyKite} className='moneyKite img-fit' alt="#" />
                        </Parallax>
                    </div> 
                    <div className='moneyElements08'>
                        <Parallax translateX={[0,-100]}  speed={10}>
                            <img src={moneyBaloon} className='moneyBaloon img-fit' alt="#" />
                        </Parallax>
                    </div>
                    <div className='moneyElements09'>
                        <Parallax translateX={[-100,0]} speed={10}>
                            <img src={moneygreenBaloon} className='moneygreenBaloon img-fit' alt="#" />
                        </Parallax>
                    </div>
                </div>
                <div className="section-box">
                    {/* <h2>
                        {t("moneySection.title")}
                    </h2> */}
                    <p className="section-description">
                        {t("moneySection.para")}
                    </p>
                    
                    <a className="btn btn-primary download-btn" href="/en">
                            {t("moneySection.buttondownload")}
                    </a>
                    <div className='btnLogo'>
                        <a  href="/en">
                            <img src={enjoySaudi} className='enjoySaudi img-fit' alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
