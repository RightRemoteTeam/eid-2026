import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from "react-i18next";
import { Link, useParams  } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { Parallax } from "react-scroll-parallax";

import "../../assets/SCSS/Home/greetingsCard.scss"
import greetingElement01 from "../../assets/images/greetingElement01.png";
import greetingElement01EN from "../../assets/images/greetingElement01EN.png";
import greetingElement02 from "../../assets/images/greetingElement02.png";
import greetingElement02EN from "../../assets/images/greetingElement02EN.png";
import greetingElement03 from "../../assets/images/greetingElement03.png";
import greetingElement08 from "../../assets/images/elements/BiscuitFull.png";
import greetingElement09 from "../../assets/images/greetingElement09.png";
import ENV from "../Constants"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {GoogleAnalytics} from "../GoogleAnalytics";
import DownloadFilePopup from './DownloadPopup';

gsap.registerPlugin(ScrollTrigger);



export default function GreetingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfthumbnail, setPdfthumbnail] = useState('')
  const [downloadLink, setDownloadLink] = useState('')
  const [targetEventName, setTargetEventName] = useState('')

    const { t } = useTranslation();
    const { theme } = useTheme();
    const { lang } = useParams();
    const animPlayed = useRef(false);
    const sectionRef = useRef(null);
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
        // gsap.to([".greetingElement01"], {
        //     scrollTrigger:{
        //         trigger:".greetingElement01",
        //         start:"top 80%",
        //         end:"top 30%",
        //         scrub:true,
        //     },
        //     x: -20,
        //     ease:"none",
        //     duration:1.5
        //   });
        //   gsap.to([".greetingElement02"], {
        //     scrollTrigger:{
        //         trigger:".greetingElement02",
        //         start:"top 80%",
        //         end:"top 30%",
        //         scrub:true,
        //     },
        //     x: 20,
        //     ease:"none",
        //     duration:1.5
        //   });
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
        
          gsap.to([".gsapGreetingGreenBalloon"], {
            y: 25,
            x: -15,
            duration: 2,
            delay:0.5,

            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
          });
          gsap.to([".gsapGreetingGreenBalloon"], {
            y: 15,
            x: -10,
            delay:0.5,
            duration: 2.5,
            rotate:-5,
            ease: "power1.in",
            repeat: -1,
            yoyo: true 
          });
          
      }
      const handleCloseModal=()=>{
        setIsModalOpen(false);
      }
      const handlOpenModal=()=>{
        setIsModalOpen(true);
      }
      const setModalData=(url,image,event)=>{
        setDownloadLink(url)
        setPdfthumbnail(image)
        setTargetEventName(event)
        handlOpenModal();
      }
  return (
    <>
    <DownloadFilePopup
    isOpen={isModalOpen}
    image={pdfthumbnail}
    closeModal={handleCloseModal}
    targetEvent={targetEventName}
    url={downloadLink}
    />
        <section ref={sectionRef} className="greetingSection">
            <div className="greetingSectionContainer">
                
                <div className='greetingElements'>
                  <div className="greetingCards">
                    <div className='greetingElements01'>
                        <Parallax translateX={[2,0]} speed={5} >
                          {
                            lang==='en'
                            ?
                            <img src={greetingElement02EN} className='greetingElement01 img-fit' alt="" />
                            :
                            <img src={greetingElement02} className='greetingElement01  img-fit' alt="" />
                          }
                        </Parallax >
                    </div>
                    <div className='greetingElements02'>
                        <Parallax translateX={[-2,0]} speed={5} >
                          {
                            lang==="en"
                            ?
                            <img src={greetingElement01EN} className='greetingElement02  img-fit' alt="" />
                            :
                            <img src={greetingElement01} className='greetingElement02 img-fit' alt="" />

                          }
                        </Parallax>
                    </div>
                  </div>
                    <div className='greetingElements03'>
                        <Parallax easing={'easeInOutCubic'} translateY={[50,-60]} translateX={[-100,80]} speed={20}>
                            <div className="gsapGreetingBalloon">
                                <img src={greetingElement03} className='greetingElement03 img-fit' alt="" />
                            </div>
                        </Parallax>
                    </div>
                    <div className='greetingElements08'>
                        <Parallax translateX={['0', '-30']} speed={15}>
                            <img src={greetingElement08} className='greetingElement08 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='greetingElements09'>
                        <Parallax translateX={['0px', '-50px']} speed={15}>
                            <div className='gsapGreetingGreenBalloon'>
                                <img src={greetingElement09} className='greetingElement09 img-fit' alt="" />
                            </div>
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
                        <button   onClick={() =>{
                          setModalData(ENV.GREETING_CARD,greetingElement01,"Download_Your_Greeting_2024")
                          triggerEvent('Your_Greetings_2024',"link_click")
                          }} 
                          className="btn btn-primary download-btn">
                             {t("greetingSection.buttondownload")}
                        </button>
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
