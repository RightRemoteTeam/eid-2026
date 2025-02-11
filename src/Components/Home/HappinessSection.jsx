import React, { useEffect, useRef, useState } from 'react'
import { Parallax } from "react-scroll-parallax";
import { Link } from "react-router-dom";

import "../../assets/SCSS/Home/happinessSection.scss"

import bottomWavesPurple from "../../assets/images/w3.png";
import smokeMachine from "../../assets/images/Machine.png";
import smoke from "../../assets/images/Smoke.png";
import shineImage from "../../assets/images/img15.png";
import kite from "../../assets/images/img17.png";
import audioFile from '../../assets/Sounds/2-people-soud.mp3'
import { gsap } from "gsap";
import {useOutletContext} from 'react-router-dom'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from 'react-i18next';
gsap.registerPlugin(ScrollTrigger);
export default function HappinessSection() {
    const [audioEnabled] = useOutletContext();
    const [audio] = useState(new Audio(audioFile));
    const sectionRef = useRef(null);
    const { t, i18n } = useTranslation();
    const playAudioRef = useRef(audioEnabled);
    useEffect(() => {
        playAudioRef.current=audioEnabled;
        console.log(playAudioRef.current);
    }, [audioEnabled])
    useEffect(() => {
        const section = sectionRef.current;
        gsap.to(section, {
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "bottom center",
              id:'2',
              onEnter: () => {
                // console.log('happiness return');
                if (playAudioRef.current) {
                  playBackgroundAudio();
                }
              },
              onToggle: ({ isActive }) => {
                if (isActive && playAudioRef.current) {
                    console.log('Toggle Load');
                    playBackgroundAudio()
                }
            },
              onEnterBack: (self) => {
                // console.log('happiness return');
                if (playAudioRef.current) {
                  playBackgroundAudio();
              }
                // playBackgroundAudio();
              },
              onLeave: () => {
                // console.log('happiness leave');
                 
                stopBackgroundAudio();
              },
              onLeaveBack: () => {
                // console.log('happiness leave');
                 
                stopBackgroundAudio();
              },
              onUpdate: (scrollTrigger) => {
                // console.log(scrollTrigger.progress);
                  
                adjustVolume(scrollTrigger.progress);
              }
            }
          });
      
          
          return () => {
            stopBackgroundAudio();
          };
    }, [audioEnabled])
    
    const playBackgroundAudio = () => {
      if(audioEnabled===true)
      {
          audio.loop = true; 
          audio.play();
      }
    }
    const stopBackgroundAudio = () => {
      if(audioEnabled)
      {
          audio.pause();
          audio.currentTime=0;
          // console.log('Preparation stop');
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
        // gsap.to([".gsapHappinessBallon"], {
        //   // x: 20, // offset by the width of the box
        //   x: 20,
        //   duration: 2,
        //   // rotate:10,
        //   ease: "power1.inOut",
        //   repeat: -1,
        //   yoyo: true 
        // });
        gsap.to([".gsapBottomShine"], {
          y: 10, // offset by the width of the box
          x: 20,
          duration: 2,
          // rotate:10,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to([".gsapHappinesskite"], {
          // y: 5, // offset by the width of the box
          x: 30,
          duration: 2,
          // rotate:10,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to([".gsapHapinessShine"], {
          y: 5, // offset by the width of the box
          x: 30,
          duration: 2,
          // rotate:10,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
    }, [])
      
    return (
        <>
            <section ref={sectionRef} className="happiness">
                <div className="happiness-container">
                    <div className="happiness-left-img happiness-img">
                      {/* <div className='gsapHappinessBallon'> */}
                      <Parallax className='ballonImag' easing={'easeOut'}  translateX={[10,0]} speed={4}>
                        <img className='' src={smokeMachine} alt="" />
                      </Parallax>
                      {/* </div> */}
                    <Parallax className='smokeImage' translateY={[150,0]} easing={'easeOut'}   speed={20}>
                      <img className='gsapHappinessSmoke' src={smoke} alt="" />
                    </Parallax>
                    </div>
                    <div className="happiness-intro-content">
                        <div className="section-box">
                            {/* <h2 dangerouslySetInnerHTML={{__html:t('happiness.title')}}/> */}
                            <p className="section-description">
                            {t('happiness.description')}
                            </p>
                            <Link className='btn btn-primary download-btn'>{t("happiness.download-button")}</Link>
                        </div>
                    </div>
                    <div className="happiness-right-img happiness-img">
                      <Parallax  className='shineImage' rotate={[0,20]} speed={15}>
                        <div className="gsapHapinessShine">
                          <img className='img-fit' src={shineImage} alt="" />
                        </div>
                      </Parallax>
                        <Parallax className='kiteImg' translateY={0}   translateX={[-60,200]} speed={10}>
                          <div className="gsapHappinesskite">
                            <img src={kite} className='' alt="" />
                          </div>
                        </Parallax>
                    </div>
                </div>
                <div className="happiness-wave">
                <Parallax className='wave' easing={'ease'} translate='yes' translateY={[0,-50]} speed={30}>
                    <img src={bottomWavesPurple} className='img-fit' alt="" />
                </Parallax>
                </div>
                <div className="shine-bottom">
                <Parallax className='shine' easing={'ease'}  translate='yes' translateX={[0,-50]}  speed={20}>
                <div className="gsapBottomShine">
                    <img src={shineImage} className='img-fit' alt="" />
                </div>
                </Parallax>
                </div>
            </section>
        </>
    )
}
