import React, { useEffect, useRef, useState } from 'react'
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { useOutletContext } from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next';

import '../../assets/SCSS/Home/oudSection.scss'

import bottomWavesOrange from "../../assets/images/w2.png";
import audioFile from '../../assets/Sounds/3-Takbeerat.mp3'
import GreenBallon from "../../assets/images/OudGreenBallon.png"
import PinkBallon from "../../assets/images/OudPinkBallon.png"

gsap.registerPlugin(ScrollTrigger);
export default function OudSection() {
  const [audioEnabled] = useOutletContext();
  const [audio] = useState(new Audio(audioFile));
  const sectionRef = useRef(null);
  const { t, i18n } = useTranslation();
  const playAudioRef = useRef(audioEnabled);
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
        id: '3',
        onEnter: () => {
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
        onUpdate: (scrollTrigger) => {
          adjustVolume(scrollTrigger.progress);
        }
      }
    });


    return () => {
      stopBackgroundAudio();
    };
  }, [audioEnabled])

  const playBackgroundAudio = () => {
    if (audioEnabled) {
      audio.loop = true;
      audio.play();

    }
  }


  const stopBackgroundAudio = () => {
    if (audioEnabled) {
      audio.pause();
      audio.currentTime = 0;
      // console.log('Aud stop');
    }
  }

  const adjustVolume = (progress) => {
    if (audio) {

      const maxVolume = 1;
      const minVolume = 0.2;
      const targetVolume = maxVolume - (progress * (maxVolume - minVolume));

      audio.volume = targetVolume;
    }
  }
  useEffect(() => {
    gsap.to([".gsapAud"], {
      // y: 5, // offset by the width of the box
      // x: 30,
      duration: 2,
      rotate: 10,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
  }, [])

  return (
    <>
      <section ref={sectionRef} className="aud">
        <div className="aud-container">
          <div className="aud-left-img aud-img">
          <Parallax className='oud-pink-ballon' translateY={[50,-100]} translateX={[-50,100]} speed={20}>
              <img src={PinkBallon} alt="" />
            </Parallax>
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
        <Parallax className='oud-green-ballon' translateY={[50,-100]} translateX={[-50,100]} speed={20}>
              <img src={GreenBallon} alt="" />
            </Parallax>
          <div className="waves">
            <Parallax translateX={[15,0]} translateY={[-20]} speed={15} className='aud-orange'>
              <img src={bottomWavesOrange} alt="" />
            </Parallax>
          </div>
        </div>
      </section>
    </>
  )
}
