import React, { useEffect, useRef, useState } from "react"
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/SCSS/Home/discover1.scss"
import discoverBuilding01 from "../../assets/images/discover/building01.svg"
import discoverBaloon01 from "../../assets/images/greetingcard/baloon3.png"
import discoverBaloon02 from "../../assets/images/discover/green-baloon.png"
import discoverTrail01 from "../../assets/images/discover/trail.svg"
import discoverTrail02 from "../../assets/images/discover/red-carpet.png"
import discoverDecoration01 from "../../assets/images/greetings/greetings_decoration_2.png"
import discoverGiftBox01 from "../../assets/images/greetingcard/giftbox.png";

gsap.registerPlugin(ScrollTrigger);

export default function DiscoverSection1() {
    const animPlayed = useRef(false);
    const sectionRef = useRef(null);

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
        gsap.to([".gsapDiscoverYellowBaloon"], {
            y: -10,
            x: 5,
            duration: 1.5,
            rotate: -5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        });
        gsap.to([".gsapDiscoverYellowBaloon"], {
            y: -15,
            x: 10,
            duration: 2,
            ease: "power1.in",
            repeat: -1,
            yoyo: true
        });

        gsap.to([".gsapDiscoverGreenBaloon"], {
            y: -7,
            x: 4,
            duration: 1,
            rotate: -3,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        });
        gsap.to([".gsapDiscoverGreenBaloon"], {
            y: -13,
            x: 8,
            duration: 1.5,
            ease: "power1.in",
            repeat: -1,
            yoyo: true
        });

    }

    return (
        <>
            <div className="discover-section-1" ref={sectionRef}>
                <div className="discover-sec-1-container">
                    <div className="discoverElement01">
                        <Parallax translateY={['0px', '-50px']} speed={20} className="building-img-1">
                            <img src={discoverBuilding01} alt="Discover Building" />
                        </Parallax>
                        <div className="trail-container">
                            <div className="trail-whole">
                                <img src={discoverTrail01} alt="Discover Trail" className="trail-img" />
                                <div className="trail-carpet-container">
                                    <Parallax speed={5} translateX={['5px', '0px']} >
                                        <img src={discoverTrail02} alt="trail-carpet" className="trail-carpet" />
                                    </Parallax>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="discoverElement02">
                        <Parallax translateY={['0px', '-150px']} speed={30}>
                            <div className="gsapDiscoverYellowBaloon">
                                <img src={discoverBaloon01} alt="Discover Building" />
                            </div>
                        </Parallax>
                    </div>
                    <div className="discoverElement03">
                        <Parallax translateX={['0px', '-1px']} speed={5}>
                            <div className="gsapDiscoverGreenBaloon">
                                <img src={discoverBaloon02} alt="Discover baloon" className="green-baloon-1" />
                            </div>
                        </Parallax>
                    </div>
                    <div className="discoverElement04">
                        <Parallax translateX={['0px', '-1px']} speed={5}>
                            <img src={discoverDecoration01} alt="Discover Decoration" />
                        </Parallax>
                    </div>

                    <div className='discoverElement06'>
                        <Parallax translateY={['0px', '-300px']} speed={20}>
                                <img src={discoverGiftBox01} className='gift-box-img-1 img-fit' alt="giftbox" />
                        </Parallax>
                    </div>

                </div>
            </div>
        </>
    )
}