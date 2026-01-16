import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../ThemeContext';
import { useTranslation } from 'react-i18next';
import { Parallax } from "react-scroll-parallax";
import { useOutletContext } from 'react-router-dom'
import "../../assets/SCSS/Home/familySection.scss"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FandSImage from "../../assets/images/F&S.png";
import ladyImage from "../../assets/images/Lady.png";
import DaughterImage from "../../assets/images/Daughter.png";
import FamilyWave from "../../assets/images/familyWave1.png";
import FamilyWaveDark from "../../assets/images/familyWaveDark1.png";
import redGiftImage from "../../assets/images/GiftContainer.png";
import GiftTop from "../../assets/images/GiftTop.png"
import purseImage from "../../assets/images/W_04.png";
import WalletCashGreen from "../../assets/images/W_01.png";
import WalletCashPurple from "../../assets/images/W_03.png";
import WalletCashBlue from "../../assets/images/W_02.png";
import leftWavePurple from "../../assets/images/FamilywavePurple.png"
import leftWaveGreen from "../../assets/images/FamilyWaveGreen.png"
import audioFile from '../../assets/Sounds/4-Eid-music-all.mp3'
import buzz from 'buzz';
gsap.registerPlugin(ScrollTrigger);

export default function FamilySection({sectionRef}) {
    const { theme } = useTheme();
    const { t, i18n } = useTranslation();
    const [audioEnabled] = useOutletContext();
    const familySectionRef=useRef(null)
    const playAudioRef = useRef(audioEnabled);
    const [audio] = useState(new Audio(audioFile));
    var mySound = new buzz.sound(audioFile);
    buzz.defaults.loop = true;
    useEffect(() => {
      playAudioRef.current = audioEnabled;
    }, [audioEnabled])
    useEffect(() => {
      const section = familySectionRef.current;
      const previousSection=sectionRef.current;
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          id: 'family',
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
        //   onLeave: () => {
        //     stopBackgroundAudio();
        //   },
        //   onLeaveBack: () => {
        //     stopBackgroundAudio();
        //   },
        //   onUpdate: (scrollTrigger) => {
        //     adjustVolume(scrollTrigger.progress);
        //   }
        }
      });
      gsap.to(previousSection, {
        scrollTrigger: {
          trigger: previousSection,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            if (playAudioRef.current) {
                stopBackgroundAudio();
            }
          },
          onToggle: ({ isActive }) => {
            if (isActive && playAudioRef.current) {
                stopBackgroundAudio()
  
            }
          },
          onEnterBack: () => {
            if (playAudioRef.current) {
                stopBackgroundAudio();
            }
          },
        //   onLeave: () => {
        //     stopBackgroundAudio();
        //   },
        //   onLeaveBack: () => {
        //     stopBackgroundAudio();
        //   },
        //   onUpdate: (scrollTrigger) => {
        //     adjustVolume(scrollTrigger.progress);
        //   }
        }
      });
  
      return () => {
        ScrollTrigger.getById("family").kill(true);
          stopBackgroundAudio();
        };
    }, [audioEnabled])
  
  
    const playBackgroundAudio = () => {
      if (audioEnabled) {
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

    return (
        <>
            <section ref={familySectionRef} className="family">
                <div className="family-container">
                    <div className="family-left-image">
                        <div className="left-cash-group">
                            <div className="family-wave-green">
                                <Parallax easing={'ease'} translateX={[-30,0]} translateY={[0, -50]}  speed={5}>
                                    <img src={leftWaveGreen} className="" alt="" />
                                </Parallax>
                            </div>
                            <div className="family-wave-purple">
                                <Parallax easing={'ease'} translateX={[-30,0]} translateY={[0, -50]}  speed={10}>
                                    <img src={leftWavePurple} className="" alt="" />
                                </Parallax>
                            </div>
                            <div className="left-cash-green">
                                <Parallax easing={'ease'}  speed={5}>
                                    <div className="gsapleftcash2">
                                        <img src={WalletCashGreen} className='img-fit' alt="" />
                                    </div>
                                </Parallax>
                            </div>
                            <div className="left-cash-purple">
                                <Parallax easing={'easeIn'} speed={12}>
                                    <div className="gsapleftcash">
                                        <img src={WalletCashPurple} className='img-fit' alt="" />
                                    </div>
                                </Parallax>
                            </div>
                        </div>
                        <div className="family-image-group">
                            {/* <article className='family-image' translateX={[0]} speed={10}>
                                <img src={familyImage} className='img-fit' alt="" />
                            </article> */}
                            <div className="family-images">
                                <div className="family-lady" >
                                    <Parallax translateX={[4, 0]}  speed={2}>
                                        <img src={ladyImage}  className="img-fit" alt="" />
                                    </Parallax>
                                </div>
                                <div className="family-fs">
                                    <Parallax translate='yes' translateY={[10, 5]} speed={10}>
                                        <img src={FandSImage} className="img-fit" alt="" />
                                    </Parallax>
                                </div>
                                <div className="family-Daughter" speed={50}>
                                    <Parallax translateX={[10, 0]}>
                                        <img src={DaughterImage} className="img-fit" alt="" />
                                    </Parallax>
                                </div>
                            </div>
                            <div className="family-wave">
                                <img src={FamilyWave} className='dayWave img-fit' alt="" />
                                <img src={FamilyWaveDark} className='NightWave img-fit' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="family-content">
                        <div className="family-top-gift">
                            <div className="redGift">
                                {/* <Parallax className='' translateY={[50, -100]} translateX={[-50, 100]} speed={10}> */}
                                <Parallax rotate={[0,-5]} translateY={[-5,10]}>
                                    <img src={redGiftImage} className="img-fit" alt="" />
                                </Parallax>
                                {/* </Parallax> */}
                            </div>
                            <div className="GiftTop">
                                <Parallax translateX={[0,10]} rotate={[0,5]} translateY={[10,-60]}>
                                    <img src={GiftTop} className='img-fit' alt="" />
                                </Parallax>
                            </div>
                        </div>
                        <div className="section-box">
                            {/* <h2 dangerouslySetInnerHTML={{
                                __html:t('family.title')
                            }}/> */}
                            <p className="section-description">
                                {t('family.description')}
                            </p>
                        </div>
                        <div className="family-bottom-gift">
                            <div className='bottom-gift'>
                                <Parallax rotate={[-10, 40]} translateY={[0, 40]}>
                                    <img src={purseImage} className=" img-fit" alt="" />
                                </Parallax>
                            </div>
                            <div className="cash-elements">
                                <div className="wallet-cash-blue">
                                    <Parallax translateX={[0, 50]}  >
                                        <img src={WalletCashBlue} className='img-fit' alt="" />
                                    </Parallax>
                                </div>
                                <div className="wallet-cash-purple">
                                    <Parallax translateX={[0, -50]} >
                                        <img src={WalletCashPurple} className='img-fit' alt="" />
                                    </Parallax>
                                </div>
                                <div className="wallet-cash-green" >
                                    <Parallax translateX={[0, -50]} translateY={[0, -50]}>
                                        <img src={WalletCashGreen} className='img-fit' alt="" />
                                    </Parallax>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
