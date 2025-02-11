import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import { Link, useParams  } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { Parallax } from "react-scroll-parallax";

import "../../assets/SCSS/Home/greetingsCard.scss"
import greetingElement01 from "../../assets/images/greetingElement01.png";
import greetingElement02 from "../../assets/images/greetingElement02.png";
import greetingElement03 from "../../assets/images/greetingElement03.png";
import greetingElement08 from "../../assets/images/greetingElement08.png";
import greetingElement09 from "../../assets/images/greetingElement09.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function GreetingSection() {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const { lang } = useParams();
    useEffect(() => {
        gsap.to([".greetingElement0"], {
          // x: 20, // offset by the width of the box
          y: 20,
          duration: 0.8,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to([".greetingElement01"], {
          y: 10, // offset by the width of the box
          x: 20,
          duration: 2,
          // rotate:10,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to([".greetingElement02"], {
          y: 10, // offset by the width of the box
          x: 20,
          duration: 2,
          // rotate:10,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to([".greetingElement03"], {
          y: 10, // offset by the width of the box
          x: 20,
          duration: 2,
          // rotate:10,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to(".greetingElement04", {
          // x: 20, // offset by the width of the box
          y: 10,
          scale:1,
          duration: 1.5,
          rotate:15,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to(".greetingElement05", {
          // x: 20, // offset by the width of the box
          y: 10,
          scale:1,
          duration: 1.5,
          rotate:15,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to(".greetingElement06", {
          // x: 20, // offset by the width of the box
          y: 10,
          scale:1,
          duration: 1.5,
          rotate:15,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to(".greetingElement07", {
          // x: 20, // offset by the width of the box
          y: 10,
          scale:1,
          duration: 1.5,
          rotate:15,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to([".greetingElement08"], {
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
        <section className="greetingSection">
            <div className="greetingSectionContainer">
                
                <div className='greetingElements'>
                    {/* <div className='greetingElements0'>
                        <Parallax translateX={['0px', '-50px']} speed={15}>
                            <img src={greetingElement0} className='greetingElement0 img-fit' alt="" />
                        </Parallax>
                    </div> */}
                    <div className='greetingElements01'>
                        <Parallax translateX={[0, -100]} speed={15}>
                            <img src={greetingElement02} className='greetingElement01 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='greetingElements02'>
                        <Parallax translateX={[-100,0]} speed={15}>
                            <img src={greetingElement01} className='greetingElement02 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='greetingElements03'>
                        <Parallax translateX={[-100,0]} speed={15}>
                            <img src={greetingElement03} className='greetingElement03 img-fit' alt="" />
                        </Parallax>
                    </div>
                    {/* <div className='greetingElements04'>
                        <Parallax translateX={['0px', '-50px']} speed={15}>
                            <img src={greetingElement04} className='greetingElement04 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='greetingElements05'>
                        <Parallax translateX={['0px', '-50px']} speed={15}>
                            <img src={greetingElement05} className='greetingElement05 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='greetingElements06'>
                        <Parallax translateX={['0px', '-50px']} speed={15}>
                            <img src={greetingElement06} className='greetingElement06 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='greetingElements07'>
                        <Parallax translateX={['0px', '-50px']} speed={15}>
                            <img src={greetingElement07} className='greetingElement07 img-fit' alt="" />
                        </Parallax>
                    </div> */}
                    <div className='greetingElements08'>
                        <Parallax translateX={['0px', '-50px']} speed={15}>
                            <img src={greetingElement08} className='greetingElement08 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='greetingElements09'>
                        <Parallax translateX={['0px', '-50px']} speed={15}>
                            <img src={greetingElement09} className='greetingElement09 img-fit' alt="" />
                        </Parallax>
                    </div>
                </div>
                <div className="section-box">
                    <h2  
                      dangerouslySetInnerHTML={{ __html: t("greetingSection.title") }}
                    />
                    <p className="section-description" 
                      dangerouslySetInnerHTML={{ __html: t("greetingSection.para") }}
                    />
                    <div className='btnWrap'>
                        <a className="btn btn-primary download-btn" href="/en">
                             {t("greetingSection.buttondownload")}
                        </a>
                        <Link to={`/${lang}/greetings`} className="btn btn-primary download-btn">
                              {t("greetingSection.createbutton")}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
