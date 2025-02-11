import React, { useEffect, useRef, useState } from 'react'
import { Parallax } from "react-scroll-parallax";

import "../../assets/SCSS/Home/happinessSection.scss"

import bottomWavesPurple from "../../assets/images/w3.png";
import smokeMachine from "../../assets/images/happiness/Machine.png";
import smoke from "../../assets/images/happiness/Smoke.png";
import shineImage from "../../assets/images/elements/shine01.png";
import kite from "../../assets/images/img17.png";
import audioFile from '../../assets/Sounds/2-people-soud.mp3'
import pdfThumbnail from "../../assets/images/happiness/toolkitThumbnail.png"
import { gsap } from "gsap";
import { useOutletContext } from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next';
import buzz from 'buzz';
import ENV from "../Constants"
import DownloadFilePopup from './DownloadPopup';
import {GoogleAnalytics} from "../GoogleAnalytics";

gsap.registerPlugin(ScrollTrigger);
export default function HappinessSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfthumbnail, setPdfthumbnail] = useState('')
  const [downloadLink, setDownloadLink] = useState('')
  const [audioEnabled] = useOutletContext();
  const [audio] = useState(new Audio(audioFile));
  const sectionRef = useRef(null);
  const { t, i18n } = useTranslation();
  const playAudioRef = useRef(audioEnabled);
  const animPlayed = useRef(false);
  var mySound = new buzz.sound(audioFile);
  buzz.defaults.loop = true;
  const { trackEvent } = GoogleAnalytics();
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
        id: 'happiness',
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
        onEnterBack: (self) => {
          if (playAudioRef.current) {
            playBackgroundAudio();
          }
          // playBackgroundAudio();
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
      ScrollTrigger.getById("happiness").kill(true);
      stopBackgroundAudio();
    };
  }, [audioEnabled])
  const triggerEvent = (event_label,event_category) => {
    console.log('event_label:',event_label);
    trackEvent({
      action: 'click',
      category: event_category,
      label: event_label, 
      value: 1,
    });
  };
  const playBackgroundAudio = () => {
    if (audioEnabled === true) {
      // audio.loop = true;
      // audio.play();
      mySound.play()
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
    gsap.to([".gsapHappinessSmokeMachine", ".gsapHappinessSmoke"], {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      repeat: 0,
      delay: 0.2,
      ease: "power1.inOut",
      yoyo: false
    });
    gsap.to([".gsapBottomShine"], {
      scale: 1.2,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
    gsap.to([".gsapHappinesskite"], {
      y: -15,
      x: 10,
      duration: 1.5,
      rotate: -5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });
    gsap.to([".gsapHappinesskite"], {
      y: -25,
      x: 15,
      duration: 2,
      ease: "power1.in",
      repeat: -1,
      yoyo: true
    });
    gsap.to([".gsapHapinessShine"], {
      scale: 1.3,
      delay: 0.5,
      duration: 1.5,
      ease: "power1.inOut",
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
  const setModalData=(url,image)=>{
    setDownloadLink(url)
    setPdfthumbnail(image)
    handlOpenModal();
  }
  return (
    <>
    <DownloadFilePopup
    isOpen={isModalOpen}
    image={pdfthumbnail}
    closeModal={handleCloseModal}
    url={downloadLink}
    />
      <section ref={sectionRef} className="happiness">
        <div className="happiness-container">
          <div className="happiness-left-img happiness-img">
            <div className="ballonImag">
              <Parallax easing={'easeOut'} speed={4}>
                <img className='gsapHappinessSmokeMachine' src={smokeMachine} alt="" />
              </Parallax>
            </div>
            <div className="smokeImage">
              <Parallax translateY={[130, 0]} easing={'easeOut'} speed={20}>
                <img className='gsapHappinessSmoke' src={smoke} alt="" />
              </Parallax>
            </div>
          </div>
          <div className="happiness-intro-content">
            <div className="section-box">
              <p className="section-description">
                {t('happiness.description')}
              </p>
              <button onClick={()=>{
                triggerEvent('Eid_Identity_2024_click','link_click')
                setModalData(ENV.TOOLKIT,pdfThumbnail)
                }} href={ENV.TOOLKIT} download className='btn btn-primary download-btn'>{t("happiness.download-button")}</button>
            </div>
          </div>
          <div className="happiness-right-img happiness-img">
            <div className="shineImage">
              <Parallax speed={1}>
                <div className="gsapHapinessShine">
                  <img className='img-fit' src={shineImage} alt="" />
                </div>
              </Parallax>
            </div>
            <div className="kiteImg">
              <Parallax translateY={[0, -200]} speed={80}>
                <div className="gsapHappinesskite">
                  <img src={kite} alt="" />
                </div>
              </Parallax>
            </div>
          </div>
        </div>
        <div className="happiness-wave">
          <div className="wave">
            <Parallax easing={'ease'} translateX={[-30,0]} translateY={[0, -50]} speed={5}>
              <img src={bottomWavesPurple} className='img-fit' alt="" />
            </Parallax>
          </div>
        </div>
        {/* <div className="shine-bottom">
          <div className="shine">
            <Parallax easing={'ease'} translate='yes' speed={2}>
              <div className="gsapBottomShine">
                <img src={shineImage} className='img-fit' alt="" />
              </div>
            </Parallax>
          </div>
        </div> */}
      </section>
    </>
  )
}
