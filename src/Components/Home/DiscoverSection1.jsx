import React, { useEffect, useRef, useState } from "react"
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/SCSS/Home/discover1.scss"
import discoverBuilding01 from "../../assets/images/discover/temp1Building.png"
import discoverTrail01 from "../../assets/images/discover/temptrail.png"

gsap.registerPlugin(ScrollTrigger);

export default function DiscoverSection1() {
    return (
        <>
            <div className="discover-section-1">
                <div className="discover-sec-1-container">
                    <div className="discoverElement01">
                        <Parallax translateY={['0px', '-50px']} speed={20}>
                            <img src={discoverBuilding01} alt="Discover Building" />
                        </Parallax>
                        <div className="trail-container">
                            <img src={discoverTrail01} alt="Discover Trail" className="trail-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}