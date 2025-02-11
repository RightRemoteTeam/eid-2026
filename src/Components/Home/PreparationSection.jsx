import React, { useEffect, useRef, useState } from "react"
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { useOutletContext } from "react-router-dom"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "react-router-dom";
import "../../assets/SCSS/Home/preparation.scss"
import introCup from "../../assets/images/PreparationCup.png";
import introCylinder from "../../assets/images/PreparationJug.png";
import shineImage from "../../assets/images/img15.png";
import lineImage from "../../assets/images/FlagsLine1.png";
import line1M from "../../assets/images/FlagsLine1M.png";
import line2M from "../../assets/images/FlagLine2M.png";
import secondLineImage from "../../assets/images/FlagLine2.png";
import halfBuscuit from "../../assets/images/img10.png"
import fullBuscuit from "../../assets/images/Biscuit1.png"
import audioFile from "../../assets/Sounds/4-Eid-music-all.mp3"
import ArContentImage from "../../assets/images/preparationAr.png"
import ArDarkContent from "../../assets/images/img_14_2.png"
import EnContentImage from "../../assets/images/preparationAr.png"
import EnDarkContentImage from "../../assets/images/img_14_2.png"
import { useTheme } from "../ThemeContext";

gsap.registerPlugin(ScrollTrigger);

export default function PeparationSection() {
    const { lang } = useParams();
    const { theme } = useTheme();
    const [audioEnabled] = useOutletContext();
    const [audio] = useState(new Audio(audioFile));
    const sectionRef = useRef(null);
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
                end: "bottom 30%",
                id: "testing end",
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
        if (audioEnabled === true) {
            audio.loop = true;
            audio.play();
        }
    }
    const stopBackgroundAudio = () => {
        if (audioEnabled) {
            audio.pause();
            audio.currentTime = 0;
            // console.log("Preparation stop");
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
        gsap.to([".gsapCup",], {
            // x: 20, // offset by the width of the box
            y: 20,
            duration: 2,
            rotate: 10,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        });
        gsap.to(".gsapHeaderShine", {
            x: 20, // offset by the width of the box
            y: -20,
            scale: 1,
            duration: 2,
            rotate: 10,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        });
        gsap.to(".jugImage", {
            // x: 20, // offset by the width of the box
            y: 10,
            scale: 1,
            duration: 2,
            rotate: 15,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        });
        gsap.to([".gsaphalf"], {
            x: 20, // offset by the width of the box
            y: 10,
            duration: 1.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        });
        gsap.to([".gsapfull"], {
            // x: 20, // offset by the width of the box
            y: 10,
            duration: 2,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        });
    }, [])
    return (
        <>
            <section ref={sectionRef} className="header">
                <div className="header-container">
                <div className="header-right-img header-img">
                        <div className="header-shine-image">
                            <article easing={"easeIn"} className="shine" translateY={[0, 10]} scale={[0, 2]} speed={10}>
                                <img

                                    src={shineImage}
                                    className="gsapHeaderShine img-fit"
                                    alt=""
                                />
                            </article>
                        </div>
                        <div className="header-jug-image">
                            <article  className="jug" speed={20}>
                                <img className="jugImage" src={introCylinder} alt="" />
                            </article >
                            <div className="buscuits">
                                <article easing={"ease"} className="full" speed={15}>
                                    <img className="gsapfull img-fit" src={fullBuscuit} alt="" />
                                </article>
                                <article easing={"ease"} className="half" speed={20}>
                                    <img className="gsaphalf img-fit" src={halfBuscuit} alt="" />
                                </article>
                            </div>
                        </div>
                    </div>   
                    <div className="header-intro-content">
                        {/* <article className="jug" speed={0}> */}
                        {
                            lang === "en"
                                ?
                                <article translateY={[-50,100]} speed={-20} className="arContent">
                                    <img src={EnContentImage} className="light-preparation-Qoute" alt="" />
                                    <img src={EnDarkContentImage} className="dark-preparation-Qoute" alt="" />
                                </article>
                                :
                                <div className="arContent">
                                    <img src={ArContentImage} className="light-preparation-Qoute" alt="" />
                                    <img src={ArDarkContent} className="dark-preparation-Qoute" alt="" />
                                </div>
                        }
                        {/* </article> */}
                    </div>

                    <div className="header-left-img header-img">
                        <div className="header-cup-image">
                            <Parallax easing={"easeInOut"} className="intro-cup"   speed={20}>
                                <img className="gsapCup" src={introCup} alt="" />
                            </Parallax>
                        </div>
                    </div>
                </div>
            </section>
            <div className="preparation-bottom-images">
                <div className="celeberationLine-group">
                    <article easing={"ease"} className="line-1" speed={15}>
                        <img src={lineImage}  alt="" />
                        <img src={line1M} className="img-fit" alt="" />
                    </article>
                    <article easing={"ease"} className="line-2" speed={5}>
                        <img src={secondLineImage} alt="" />
                        <img src={line2M} className="img-fit" alt="" />
                    </article>
                </div>
            </div>
        </>
    )
}
