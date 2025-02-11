import React, { useEffect, useRef, useState } from "react"
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { useOutletContext } from "react-router-dom"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "react-router-dom";
import "../../assets/SCSS/Home/preparation.scss"
import introCup from "../../assets/images/preparation/preparationCup.png";
import introCupCoffee from "../../assets/images/preparation/preparationCupCoffee.png";
import introCylinder from "../../assets/images/preparation/preparationJug.png";
import shineImage from "../../assets/images/elements/shine01.png";
import lineImage from "../../assets/images/preparation/flag.png";
import line1M from "../../assets/images/preparation/flagM.png";
import line2M from "../../assets/images/preparation/FlagLine2M.png";
import secondLineImage from "../../assets/images/preparation/flag1.png";
import halfBuscuit from "../../assets/images/elements/BiscuitHalf.png"
import fullBuscuit from "../../assets/images/elements/BiscuitFull.png"
import audioFile from "../../assets/Sounds/1-morning-with-birds.mp3"
import ArContentImage from "../../assets/images/preparation/preparationArTxt.png"
import ArDarkContent from "../../assets/images/preparation/preparationArTxtNight.png"
import EnContentImage from "../../assets/images/preparation/preparationEnTxt.png"
import EnDarkContentImage from "../../assets/images/preparation/preparationEnTxtNight.png"
import buzz from "buzz";
gsap.registerPlugin(ScrollTrigger);

export default function PeparationSection() {
    const { lang } = useParams();
    const [audioEnabled] = useOutletContext();
    const [pageLoaded] = useOutletContext();
    // const [audio] = useState(new Audio(audioFile));
    const sectionRef = useRef(null);
    const [aniamtionDone, setAnimationDone] = useState (false);
    const playAudioRef = useRef(audioEnabled);
    const audioRef= useRef(null)
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
                id: "preparation",
                onEnter: () => {
                    if (audioEnabled) {
                        playBackgroundAudio();
                    }
                },
                onToggle: ({ isActive }) => {
                    if (isActive && playAudioRef.current) {
                        playBackgroundAudio()
                    }
                },

                onLeaveBack: () => {
                    stopBackgroundAudio();
                },
                onEnterBack: (self) => {
                    if (playAudioRef.current) {
                        playBackgroundAudio();
                    }
                },
                onLeave: (self) => {
                    stopBackgroundAudio();
                },
            }
        });
        return () => {
            ScrollTrigger.getById("preparation").kill(true);
            stopBackgroundAudio();
        };
    }, [audioEnabled])
    const playBackgroundAudio = () => {
        if (audioEnabled === true) {
            // audioRef.current.loop = true;
            // audioRef.current.play();
            mySound.play();
        }
    }
    const stopBackgroundAudio = () => {
        if (audioEnabled) {
            // audioRef.current.pause();
            // audioRef.current.currentTime = 0;
            mySound.stop()
        }
    }
    useEffect(() => {
        if (!aniamtionDone) {
            setAnimationDone (true)
            gsap.from([".gsapCup",".gsapCupCoffee"], {
                delay:1,
                scale: 2,
                x: 200, 
                opacity:0,
                duration: 0.8,
                rotate: 15,
                repeat:0,
                ease: "power1.out",
                yoyo: false
            });
            gsap.from(".jugImage", {
                // x: 20, // offset by the width of the box
                delay:1,
                scale: 2,
                x: -200, 
                opacity:0,
                duration: 0.8,
                rotate: -15,
                repeat:0,
                ease: "power1.out",
                yoyo: false
            });
    
            gsap.to(".arContent", {
                // x: 20, // offset by the width of the box
                delay:1.4,
                scale: 0.8,
                opacity:1,
                duration: 0.8,
                repeat:0,
                ease: "power1.inOut",
                yoyo: false
            });
            gsap.from([".gsaphalf"], {
                delay:1.4,
                opacity:0,
                duration: 0.8,
                repeat:0,
                ease: "power1.inOut",
                yoyo: false
            });
            gsap.from([".gsapfull"], {
                delay:1.5,
                opacity:0,
                duration: 0.8,
                repeat:0,
                ease: "power1.inOut",
                yoyo: false
            });
    
            gsap.to(".gsapHeaderShine", {
                scale: 1.2,
                duration: 1.5,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true
            });
        }
    }, [pageLoaded])
    return (
        <>
            <section ref={sectionRef} className="header">
                <div className="header-container">
                <div className="header-right-img header-img">
                        <div className="header-shine-image">
                            <Parallax easing={"easeInOut"} className="shine" scale={[0.6, 1]} speed={10}>
                                <img
                                    src={shineImage}
                                    className="gsapHeaderShine img-fit"
                                    alt=""
                                />
                            </Parallax>
                        </div>
                        <div className="header-jug-image">
                            <div className="jug">
                                <Parallax translateY={[0,-10]} translateX={[60,-100]}  speed={-5} scale={[1.2, 1]} rotate={[0,20]}>
                                    <img className="jugImage" src={introCylinder} alt="" />
                                </Parallax >
                            </div>
                            <div className="buscuits">
                                <Parallax easing={"ease"} className="full" speed={7}>
                                    <img className="gsapfull img-fit" src={fullBuscuit} alt="" />
                                </Parallax>
                                <Parallax easing={"ease"} className="half" speed={2}>
                                    <img className="gsaphalf img-fit" src={halfBuscuit} alt="" />
                                </Parallax>
                            </div>
                        </div>
                    </div>   
                    <div className="header-intro-content">
                        {
                            lang === "en"
                                ?
                                <Parallax scale={[0.8,1.1]} speed={-10} className="arContent">
                                    <img src={EnContentImage} className="light-preparation-Qoute" alt="" />
                                    <img src={EnDarkContentImage} className="dark-preparation-Qoute" alt="" />
                                </Parallax>
                                :
                                <Parallax scale={[0.8,1.1]} speed={-10} className="arContent">
                                    <img src={ArContentImage} className="light-preparation-Qoute" alt="" />
                                    <img src={ArDarkContent} className="dark-preparation-Qoute" alt="" />
                                </Parallax>
                        }
                    </div>

                    <div className="header-left-img header-img">
                        <div className="header-cup-image">
                            <div className="intro-cup">
                                <Parallax easing={"easeInOut"} translateY={[-50, 120]} speed={5} rotate={[-10,0]} translateX={[-60,30]}>
                                    <img className="gsapCup" src={introCup} alt="" />
                                </Parallax>
                            </div>
                            <div className="intro-cup">
                                <Parallax easing={"easeInOut"} translateY={[-50, 120]} speed={5} rotate={[-10,0]} translateX={[-60,30]}>
                                    <img className="gsapCupCoffee" src={introCupCoffee} alt="" />
                                </Parallax>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="preparation-bottom-images-flag">
                    <div className="celeberationLine-group">
                        <div className="line-1">
                            <Parallax easing={"ease"}  speed={10}>
                                <img src={lineImage}  alt="" />
                                <img src={line1M} className="img-fit" alt="" />
                            </Parallax>
                        </div>
                        <div className="line-2">
                            <Parallax easing={"ease"}  speed={-5}>
                                <img src={secondLineImage} alt="" />
                                <img src={line2M} className="img-fit" alt="" />
                            </Parallax>
                        </div>
                    </div>
                </div>
            </section>
            {/* <audio ref={audioRef} src={audioFile} style={{display:'none'}}/> */}
        </>
    )
}
