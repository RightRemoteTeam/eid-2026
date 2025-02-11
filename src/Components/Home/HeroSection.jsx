import React, { useEffect, useRef, useState } from "react"
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { useOutletContext } from "react-router-dom"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams } from "react-router-dom";
import "../../assets/SCSS/Home/herosection.scss"
import audioFile from "../../assets/Sounds/1-morning-with-birds.mp3"
import HeroImage from "../../assets/images/section1/kv.png"
import buzz from "buzz";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const { lang } = useParams();
    const [audioEnabled] = useOutletContext();
    const [pageLoaded] = useOutletContext();
    // const [audio] = useState(new Audio(audioFile));
    const sectionRef = useRef(null);
    const [aniamtionDone, setAnimationDone] = useState(false);
    const playAudioRef = useRef(audioEnabled);
    const audioRef = useRef(null)
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
            setAnimationDone(true)
            gsap.from([".gsapCup", ".gsapCupCoffee"], {
                delay: 1,
                scale: 2,
                x: 200,
                opacity: 0,
                duration: 0.8,
                rotate: 15,
                repeat: 0,
                ease: "power1.out",
                yoyo: false
            });
            gsap.from(".jugImage", {
                // x: 20, // offset by the width of the box
                delay: 1,
                scale: 2,
                x: -200,
                opacity: 0,
                duration: 0.8,
                rotate: -15,
                repeat: 0,
                ease: "power1.out",
                yoyo: false
            });

            gsap.from([".gsaphalf"], {
                delay: 1.4,
                opacity: 0,
                duration: 0.8,
                repeat: 0,
                ease: "power1.inOut",
                yoyo: false
            });
            gsap.from([".gsapfull"], {
                delay: 1.5,
                opacity: 0,
                duration: 0.8,
                repeat: 0,
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
                    <div className="header-intro-content">
                        {
                            lang === "en"
                                ?
                                <div className="arContent">
                                    <img src={HeroImage} className="light-preparation-Qoute" alt="" />
                                </div>
                                :
                                <div className="arContent">
                                    <img src={HeroImage} className="light-preparation-Qoute" alt="" />
                                </div>
                        }
                    </div>

                </div>
                {/* <div className="preparation-bottom-images-flag">
                    <div className="celeberationLine-group">
                        <div className="line-1">
                            <Parallax easing={"ease"} speed={10}>
                                <img src={lineImage} alt="" />
                                <img src={line1M} className="img-fit" alt="" />
                            </Parallax>
                        </div>
                        <div className="line-2">
                            <Parallax easing={"ease"} speed={-5}>
                                <img src={secondLineImage} alt="" />
                                <img src={line2M} className="img-fit" alt="" />
                            </Parallax>
                        </div>
                    </div>
                </div> */}
            </section>
            {/* <audio ref={audioRef} src={audioFile} style={{display:'none'}}/> */}
        </>
    )
}
