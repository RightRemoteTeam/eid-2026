import React, { useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";


import fairkite0 from "../../assets/images/fairkite0.png";
import fairkite01 from "../../assets/images/fairkite01.png";
import fairkite02 from "../../assets/images/fairkite02.png";
import fairkite03 from "../../assets/images/fairkite03.png";
import fairkite04 from "../../assets/images/fairkite04.png";
import fairDay from "../../assets/images/fairday.png";
import fairNight from "../../assets/images/fairnight.png";
gsap.registerPlugin(ScrollTrigger);


export default function FairSection() {
    const { theme } = useTheme();
    useEffect(() => {
        gsap.to([".fairkite0"], {
          // x: 20, // offset by the width of the box
          y: 20,
          duration: 1.5,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to([".fairkite01"], {
          // x: 20, // offset by the width of the box
          y: 20,
          duration: 1.5,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to([".fairkite02"], {
          // x: 20, // offset by the width of the box
          y: 20,
          duration: 1.5,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true 
        });
        gsap.to([".fairkite03"], {
            y: 20,
            duration: 1.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
        });
        gsap.to(".fairkite04", {
            y: 20,
            duration: 1.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
        });
        gsap.to(".fairDay", {
            y: 20,
            duration: 1.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
        });
        gsap.to(".fairNight", {
            y: 20,
            duration: 1.5,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
        });
      }, [])

  return (
    <>
        <section className="fairSection">
            <div className="fairSectionContainer">
                <div className='fairKites'>
                    <div className='fairKites0'>
                        <Parallax translateX={['-100px', '0px']} speed={10}>
                            <img src={fairkite0} className='fairkite0 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='fairKites01'>
                        <Parallax translateX={['0px', '-100px']} speed={10}>
                            <img src={fairkite01} className='fairkite01 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='fairKites02'>
                        <Parallax translateX={['0px', '-50px']} speed={10}>
                            <img src={fairkite02} className='fairkite02 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='fairKites03'>
                        <Parallax translateX={['0px', '50px']} speed={10}>
                            <img src={fairkite03} className='fairkite03 img-fit' alt="" />
                        </Parallax>
                    </div>
                    <div className='fairKites04'>
                        <Parallax translateX={['0px', '50px']} speed={10}>
                            <img src={fairkite04} className='fairkite04 img-fit' alt="" />
                        </Parallax>
                    </div>
                </div>
                <div className="fairSectionGroup">
                    <Parallax speed={10}>
                        <img src={fairDay} className='fairDay img-fit' alt="" />
                    </Parallax>
                    <Parallax speed={10}>
                        <img src={fairNight} className='fairNight img-fit' alt="" />
                    </Parallax>
                </div>
            </div>
        </section>
    </>
  )
}
