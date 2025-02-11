import React, { useEffect, useRef } from 'react';
import { useTheme } from '../ThemeContext';
import { useTranslation } from "react-i18next";
import "../../assets/SCSS/Home/money.scss"
import moneyElement03 from "../../assets/images/moneyElement03.png";
import enjoySaudi from "../../assets/images/enjoySaudi.png";
import enjoySaudiDark from "../../assets/images/enjoySaudi-dark.png";
import moneyKite from "../../assets/images/moneyKite.png";
import moneyBaloon from "../../assets/images/moneyBaloon.png";
import moneygreenBaloon from "../../assets/images/moneygreenBaloon.png";
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link , useParams} from 'react-router-dom';
import ENV from "../Constants"
import {GoogleAnalytics} from "../GoogleAnalytics";
gsap.registerPlugin(ScrollTrigger);



export default function MoneySection() {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const animPlayed = useRef(false);
    const sectionRef = useRef(null);
    const {lang} = useParams();
    const { trackEvent } = GoogleAnalytics();
    const triggerEvent = (event_label,event_category) => {
      console.log('event_label:',event_label);
      trackEvent({
        action: 'click',
        category: event_category,
        label: event_label, 
        value: 1,
      });
    };

    useEffect(() => {
        const section = sectionRef.current;
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            id: '3',
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

        gsap.to([".moneyKiteGsap"], {
            y: -15,
            x: 10,
            duration: 1.5,
            rotate: -5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
          });
          gsap.to([".moneyKiteGsap"], {
            y: -25,
            x: 15,
            duration: 2.5,
            ease: "power1.in",
            repeat: -1,
            yoyo: true
          });
          gsap.to([".moneyElements08"], {
            y: -20,
            x: 10,
            delay:0.5,
            duration: 1.5,
            rotate:-5,
            ease: "power1.inOut",
            repeat: -1,
            delay:0.5,
            yoyo: true 
          });
          gsap.to([".moneyElements09"], {
            y: 25,
            x: -15,
            duration: 2,
            delay:0.5,

            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
          });
          gsap.to([".moneyElements09"], {
            y: 15,
            x: -10,
            delay:0.5,
            duration: 2.5,
            rotate:-5,
            ease: "power1.in",
            repeat: -1,
            yoyo: true 
          });
          
        gsap.to(".moneyElements03", {
            y: 10,
            scale:1,
            duration: 1.5,
            delay:1,
            rotate:15,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
        });
      }


  return (
    <>
        <section ref={sectionRef} className="moneySection">
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
                        
                        <Parallax translateX={['0px', '-50px']} speed={15}>
                            <img src={moneyElement03} className='moneyElement03  img-fit' alt="" />
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
                        <Parallax translateX={['0px', '-50px']} speed={5}>
                            <img src={moneyKite} className='moneyKite moneyKiteGsap img-fit' alt="#" />
                        </Parallax>
                    </div> 
                    <div className='moneyElements08'>
                        <Parallax translateX={[0,-100]}  speed={15}>
                            <img src={moneyBaloon} className='moneyBaloon img-fit' alt="#" />
                        </Parallax>
                    </div>
                    <div className='moneyElements09'>
                        <Parallax translateX={[-100, 0]} speed={10}>
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
                    
                    <Link  target='_blank' className="btn btn-primary download-btn" to={`${ENV.EID_EVENT}${lang}/${ENV.EID_EVENT_QUERY_PARAM}`} onClick={triggerEvent('Eid_Events_2024','link_click')}>
                            {t("moneySection.buttondownload")}
                    </Link>
                    <div className='btnLogo'>
                        <Link target='_blank' to={`${ENV.EID_EVENT}${lang}/${ENV.EID_EVENT_QUERY_PARAM}`} onClick={triggerEvent('Eid_Events_2024','link_click')}>
                            <img src={(theme === 'dark-mode') ? enjoySaudiDark : enjoySaudi} className='enjoySaudi img-fit' alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
