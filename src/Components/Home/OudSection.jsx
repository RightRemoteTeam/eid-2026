import React, { useEffect, useRef, useState } from 'react'
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { useOutletContext,useParams } from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next';

import '../../assets/SCSS/Home/oudSection.scss'

import bottomWavesOrange from "../../assets/images/w2.png";
import audioFile from '../../assets/Sounds/3-Takbeerat.mp3'
import GreenBallon from "../../assets/images/OudGreenBallon.png"
import PinkBallon from "../../assets/images/OudPinkBallon.png"
import shineImage from "../../assets/images/img15.png";
import TakbeerEnLight from "../../assets/images/TakbeerENLight.png"
import TakbeerEnDark from "../../assets/images/TakbeerENDark.png"
import TakbeerArLight from "../../assets/images/TakbeerARLight.png"
import TakbeerArDark from "../../assets/images/TakbeerARDark.png"
import buzz from 'buzz';

gsap.registerPlugin(ScrollTrigger);
export default function OudSection({sectionRef}) {
  const { lang } = useParams();
  const { t, } = useTranslation();
  const [audioEnabled] = useOutletContext();
  const playAudioRef = useRef(audioEnabled);
  const animPlayed = useRef(false);
  var mySound = new buzz.sound(audioFile);
  buzz.defaults.loop = true;
  useEffect(() => {
    playAudioRef.current = audioEnabled;
  }, [audioEnabled])
  useEffect(() => {
    const section = sectionRef.current;
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        id: 'oudSectionGSAP',
        onEnter: () => {
          if (!animPlayed.current) {
            animPlayed.current = true;
            playIntro()
          }
          if (playAudioRef.current) {
            playBackgroundAudio();
          }
        },
        onToggle: ({ isActive }) => {
          if (isActive && playAudioRef.current) {
            playBackgroundAudio()

          }
        },
        onEnterBack: () => {
          if (playAudioRef.current) {
            playBackgroundAudio();
          }
        },
        onLeave: () => {
          stopBackgroundAudio();
        },
        onLeaveBack: () => {
          stopBackgroundAudio();
        },
      }
    });


    return () => {
      ScrollTrigger.getById("oudSectionGSAP").kill(true);
      stopBackgroundAudio();
    };
  }, [audioEnabled])


  const playBackgroundAudio = () => {
    if (audioEnabled) {
      // audio.loop = true;
      // audio.play();
      mySound.play();
    }
  }


  const stopBackgroundAudio = () => {
    if (audioEnabled) {
      // audio.pause();
      // audio.currentTime = 0;
      mySound.stop()
    }
  }

  const playIntro = () => {
    gsap.to([".gsapPinkBallon"], {
      y: -15,
      x: 10,
      duration: 1.5,
      rotate:-5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true 
    });
    gsap.to([".gsapOudGreenBalloon"], {
      y: -10,
        x: 10,
        duration: 2,
        rotate:-4,
        ease: "power1.in",
        repeat: -1,
        yoyo: true 
    });
    gsap.to([".gsapOudGreenBalloon"], {
      y: -20,
        x: 20,
        duration: 2.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true 
    });
    gsap.to([".gsapPinkBallon"], {
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
      <section  className="aud">
        <div className="aud-container">
          <div className="shine-bottom">
            <div className="shine">
              <Parallax easing={'ease'} translate='yes' translateY={[0,-100]} speed={2}>
                <div className="gsapBottomShine">
                  <img src={shineImage} className='img-fit' alt="" />
                </div>
              </Parallax>
            </div>
          </div>
          <div className="takbeer-img">
            <div className={`takbeer-text ${lang==='en'?"takbeer-en":"takbeer-ar"}`}>
              {
                lang==='en'
                ?
                <>
                <Parallax translateY={[100,-100]} translateX={[0,30]}>
                <img src={TakbeerEnDark} className='takbeerDark img-fit' alt="" />
                <img src={TakbeerEnLight} className='takbeerLight img-fit' alt="" />
                </Parallax>
                </>
                :
                <>
                <Parallax translateY={[40,-100]} translateX={[-30,0]}>
                <img src={TakbeerArDark} className='takbeerDark img-fit' alt="" />
                <img src={TakbeerArLight} className='takbeerLight img-fit' alt="" />
                </Parallax>
                </>
              }
            </div>
          </div>
          <div className="aud-left-img aud-img">
            <div className="oud-pink-ballon">
            <Parallax translateY={[50,-100]} translateX={[-50,100]} speed={20}>
              <div className="gsapPinkBallon">
                <img src={PinkBallon} alt="" />
              </div>
              </Parallax>
            </div>
          </div>
          <div className="aud-intro-content">
            <div className="section-box">
              {/* <h2 dangerouslySetInnerHTML={{
                __html: t('aud.title')
              }} /> */}
              <p className="section-description">
                {t('aud.description')}
              </p>
            </div>
          </div>
        </div>
        <div className="aud-bottom-elements">
          <div className="oud-green-ballon">
           <Parallax speed={25}>
              <div className="gsapOudGreenBalloon">
                <img src={GreenBallon} alt="" />
              </div>
            </Parallax>
          </div>
          <div className="waves">
            <div className='aud-orange'>
            <Parallax easing={'ease'} translateX={[30,0]} speed={5} >
              <img src={bottomWavesOrange} alt="" />
            </Parallax>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
