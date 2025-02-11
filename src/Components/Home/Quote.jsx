import React, { useEffect, useRef  } from 'react'
import { useTheme } from '../ThemeContext';

import { Parallax } from "react-scroll-parallax";

import "../../assets/SCSS/Home/qoute.scss"
import "../../assets/SCSS/Home/fair.scss"
import { useParams } from "react-router-dom";
import quoteFloatImg from "../../assets/images/quoteFloatImg.png";
import quoteDay from "../../assets/images/quoteDay.png";
import quoteNight from "../../assets/images/quoteNight.png";
import quoteDayEn from "../../assets/images/quoteDayEn.png";
import quoteNightEn from "../../assets/images/quoteNightEn.png";
import greetingElement04 from "../../assets/images/greetingElement04.png";
import greetingElement05 from "../../assets/images/greetingElement05.png";
import greetingElement06 from "../../assets/images/greetingElement06.png";
import greetingElement07 from "../../assets/images/greetingElement07.png";
import fairkite0 from "../../assets/images/fairkite0.png";
import fairkite01 from "../../assets/images/fairkite01.png";
import fairkite02 from "../../assets/images/fairkite02.png";
import fairkite03 from "../../assets/images/fairkite03.png";
import fairkite04 from "../../assets/images/fairkite04.png";
import layer01a from "../../assets/images/01-layerbga.png";
import layer01 from "../../assets/images/01-layerbg.png";
import layer02 from "../../assets/images/02-layer.png";
import layer03moon from "../../assets/images/03-moon.png";
import layer03sun from "../../assets/images/03-sun.png";
import layer04 from "../../assets/images/04-layer.png";
import layer05 from "../../assets/images/05-layer.png";
import layer06 from "../../assets/images/06-layer.png";
import layer07 from "../../assets/images/07-layer.png";
import layer08 from "../../assets/images/08-layer.png";
import layer09 from "../../assets/images/09-layer.png";
import layer10 from "../../assets/images/10-layer.png";
import layer11 from "../../assets/images/11-layera.png";
import layer12 from "../../assets/images/12-layer.png";
import layer13 from "../../assets/images/13-layer.png";
import layer14 from "../../assets/images/14-layer.png";
import layer15 from "../../assets/images/15-layer.png";
import layer16 from "../../assets/images/16-layer.png";
import layer17 from "../../assets/images/17-layer.png";
import layer18 from "../../assets/images/18-layer.png";
import layer19 from "../../assets/images/19-layer.png";
import layer20 from "../../assets/images/20-layer.png";
import layer21 from "../../assets/images/21-layer.png";
import layer22 from "../../assets/images/22-layer.png";
import layer23 from "../../assets/images/23-layer.png";
import layer24 from "../../assets/images/24-layer.png";
import layer25 from "../../assets/images/25-layer.png";
import layer26 from "../../assets/images/26-layer.png";
import layer27 from "../../assets/images/27-layer.png";
import layer28 from "../../assets/images/28-layer.png";
import layer29 from "../../assets/images/29-layer.png";
import layer30 from "../../assets/images/30-layer.png";
import layer31 from "../../assets/images/31-layer.png";
import layer32 from "../../assets/images/32-layer.png";
import layer33 from "../../assets/images/33-layer.png";
import layer34 from "../../assets/images/34-layer.png";
import layer35 from "../../assets/images/35-layer.png";
import layer36 from "../../assets/images/36-layer.png";
import layer37 from "../../assets/images/37-layer.png";
import layer38 from "../../assets/images/38-layer.png";
import layer39 from "../../assets/images/39-layer.png";
import layer40 from "../../assets/images/40-layer.png";
import layer41 from "../../assets/images/41-layer.png";
import layer42 from "../../assets/images/42-layer.png";
import layer43 from "../../assets/images/43-layer.png";
import layer44 from "../../assets/images/44-layer.png";
import layer45 from "../../assets/images/45-layer.png";
import layer46 from "../../assets/images/46-layer.png";
import layer47 from "../../assets/images/47-layer.png";
import layer48 from "../../assets/images/48-layer.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function QuoteSection() {
  const quoteSectionImgRef = useRef(null);
  const layer49WrapRef = useRef(null);
    const { theme } = useTheme();
    const { lang } = useParams();
    useEffect(() => {
      setTimeout(() => {
        ScrollTrigger.refresh(true)
      }, 0);
      
    }, [lang]);
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
      gsap.to(".stickyFooterPinLogo", {
        scrollTrigger:{
            trigger:".stickyFooterPinLogo",
            start:"top 40%",
            end :() => "+=" + (document.querySelector(".fairSectionContainer")?.offsetHeight*.80),
            scrub:true,
            pin: true,
            pinSpacing:false,
            // markers:true,
            invalidateOnRefresh:true,
          },
        x:'28%',
        rotate:30,
        scale:0.6,
        ease:'none',
        zIndex:2,
        // duration:2
      });
      gsap.to([".fairkite0",".layer15",".fairkite04"], {
        y: -15,
        x: 10,
        duration: 1.5,
        rotate:-5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true 
      });
      gsap.to([".fairkite0",".layer15",".fairkite04"], {
        y: -25,
        x: 15,
        duration: 3,
        ease: "power1.in",
        repeat: -1,
        yoyo: true 
      });
      
      gsap.to([".fairKites03",".layer04"], {
        y: -30,
        x: 5,
        duration: 2.5,
        rotate:-5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true 
      });
      gsap.to([".fairKites03",".layer04"], {
        y: -10,
        x: 25,
        duration: 2,
        ease: "power1.in",
        repeat: -1,
        yoyo: true 
      });
      
      gsap.to([".layer10"], {
        y: -10,
        x: 10,
        duration: 1.5,
        rotate:-6,
        ease: "power1.in",
        repeat: -1,
        yoyo: true 
      });
      gsap.to([".layer10"], {
        y: -20,
        x: 20,
        duration: 3,
        ease: "power1.inOut",
        repeat: -2,
        yoyo: true 
      });

      gsap.to([".layer06"], {
        y: -10,
        x: 10,
        duration: 2,
        rotate:-4,
        ease: "power1.in",
        repeat: -1,
        yoyo: true 
      });
      gsap.to([".layer06"], {
        y: -20,
        x: 20,
        duration: 2.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true 
      });

      gsap.to([".quoteFloatImg",".fairkite02",".layer20"], {
        y: -15,
        x: 10,
        duration: 1.5,
        rotate: -5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      });
      gsap.to([".quoteFloatImg",".fairkite02",".layer20"], {
        y: -25,
        x: 15,
        duration: 2,
        ease: "power1.in",
        repeat: -1,
        yoyo: true
      });

      gsap.to([".layer19"], {
        y: -15,
        x: 10,
        duration: 1.5,
        rotate: -2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      });
      gsap.to([".layer19"], {
        y: -25,
        x: 15,
        duration: 2,
        ease: "power1.in",
        repeat: -6,
        yoyo: true
      });
      gsap.to(".greetingElement05", {
        // x: 20, // offset by the width of the box
        y: 10,
        scale:1,
        duration: 1.5,
        delay:1,
        rotate:15,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true 
      });
      gsap.to(".greetingElement06", {
        // x: 20, // offset by the width of the box
        y: 10,
        scale:1,
        duration: 1.5,
        rotate:15,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true 
      });
      gsap.to(".greetingElement07", {
        // x: 20, // offset by the width of the box
        y: 20,
        scale:1,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true 
      });
      gsap.to([".fairkite01",".layer38"], {
        scale: 1.2,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true
      });
    }



  return (
    <>
    <div ref={sectionRef} className='footerSection'>
        <section  className="quoteSection">
            <div className="quoteSectionContainer">
                <div className='quoteFloat'>
                    <Parallax translateX={['-100px', '0px']} speed={10}>
                        <img src={quoteFloatImg} className='quoteFloatImg img-fit' alt="" />
                    </Parallax>
                </div>
                <div className='greetingElements04'>
                    <Parallax translateX={['0px', '-50px']} speed={15}>
                        <img src={greetingElement04} className='greetingElement04 img-fit' alt="" />
                    </Parallax>
                </div>
                <div className='greetingElements05'>
                    <Parallax translateX={['0px', '-50px']} speed={15}>
                        <img src={greetingElement05} className='greetingElement05 img-fit' alt="" />
                    </Parallax>
                </div>
                <div className='greetingElements06'>
                    <Parallax translateX={['0px', '-50px']} speed={15}>
                        <img src={greetingElement06} className='greetingElement06 img-fit' alt="" />
                    </Parallax>
                </div>
                <div className='greetingElements07'>
                    <Parallax translateX={['0px', '-50px']} speed={15}>
                        <img src={greetingElement07} className='greetingElement07 img-fit' alt="" />
                    </Parallax>
                </div>
                <div className="stickyFooterPinLogo">
                <div className='quoteSectionImg '  ref={quoteSectionImgRef}>
                  {
                    lang==="en"
                    ?
                    <>
                     <img src={quoteDayEn} className='quoteDay img-fit' alt="" />
                        <img src={quoteNightEn} className='quoteNight img-fit' alt="" />
                    </>
                    :
                    <>
                        <img src={quoteDay} className='quoteDay img-fit' alt="" />
                        <img src={quoteNight} className='quoteNight img-fit' alt="" />
                    </>
                  }
                </div>

                </div>
            </div>
        </section>
        <section className="fairSection">
            <div className="fairSectionContainer">
                <div className='fairKites'>
                    <div className='fairKites0'>
                            <img src={fairkite0} className='fairkite0 img-fit' alt="" />
                    </div>
                    <div className='fairKites01'>
                            <img src={fairkite01} className='fairkite01 img-fit' alt="" />
                    </div>
                    <div className='fairKites02'>
                            <img src={fairkite02} className='fairkite02 img-fit' alt="" />
                    </div>
                    <div className='fairKites03'>
                            <img src={fairkite03} className='fairkite03 img-fit' alt="" />
                    </div>
                    <div className='fairKites04'>
                            <img src={fairkite04} className='fairkite04 img-fit' alt="" />
                    </div>
                </div>
                {/* <div className="fairSectionGroup">
                    <Parallax speed={10}>
                        <img src={fairDay} className='fairDay img-fit' alt="" />
                    </Parallax>
                    <Parallax speed={10}>
                        <img src={fairNight} className='fairNight img-fit' alt="" />
                    </Parallax>
                </div> */}
                <div className="footerMainGroup"  >
                      {/* <div className='layer01WrapDay'>
                        <img src={layer01day} className='layer01day img-fit' alt="" />
                      </div>
                      <div className='layer01WrapNight'>
                        <img src={layer01night} className='layer01night img-fit' alt="" />
                      </div> */}
                      <div className='layer01Wrap'>
                          <img src={layer01} className='layer01 img-fit' alt="" />
                      </div>
                      <div className='layer01aWrap'>
                        <img src={layer01a} className='layer01a img-fit' alt="" />
                      </div>
                        <div className='layer02Wrap posAbsImg'>
                        <Parallax translateY={['-10px', '0px']}  speed={5}>
                            <img src={layer02} className='layer02 img-fit' alt="" />
                          </Parallax>
                        </div>
                      
                        <div className='layer03WrapSun posAbsImg'>
                        <Parallax translateX={['-200px', '0px']}  speed={5}>
                            <img src={layer03sun} className='layer03sun img-fit' alt="" />
                          </Parallax>
                        </div>
                      
                      <div className='layer03WrapMoon posAbsImg'>
                      <Parallax translateX={['-200px', '0px']}  speed={5}>
                          <img src={layer03moon} className='layer03moon img-fit' alt="" />
                        </Parallax>
                      </div>
                      
                      <div className='layer04Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']} speed={5}>
                          <img src={layer04} className='layer04 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer05Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']} speed={5}>
                          <img src={layer05} className='layer05 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer06Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']} speed={5}>
                          <img src={layer06} className='layer06 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer07Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']}  speed={5}>
                          <img src={layer07} className='layer07 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer08Wrap posAbsImg'>
                        <Parallax translateX={['-10px', '0px']}  speed={5}>
                          <img src={layer08} className='layer08 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer09Wrap posAbsImg'>
                      <Parallax translateY={['-10px', '0px']}  speed={5}>
                          <img src={layer09} className='layer09 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer10Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']} speed={5}>
                          <img src={layer10} className='layer10 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer11Wrap posAbsImg'>
                      <Parallax translateX={['0px', '-10px']} speed={5}>
                          <img src={layer11} className='layer11 img-fit' alt="" />
                        </Parallax>
                      </div>
                      {/* <div className='layer11Wrapa posAbsImg'>
                        <img src={layer11a} className='layer11a img-fit' alt="" />
                      </div> */}
                      <div className='layer12Wrap posAbsImg'>
                      <Parallax translateX={['0px', '-10px']} speed={5}>
                          <img src={layer12} className='layer12 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer13Wrap posAbsImg'>
                      <Parallax translateY={['-20px', '0px']} speed={5}>
                         <img src={layer13} className='layer13 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer14Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']} speed={5}>
                          <img src={layer14} className='layer14 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer15Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']} speed={5}>
                          <img src={layer15} className='layer15 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer16Wrap posAbsImg'>
                      <Parallax translateY={['-40px', '-10px']} translateX={['-10px', '10px']} speed={5}>
                          <img src={layer16} className='layer16 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer17Wrap posAbsImg'>
                      <Parallax translateY={['-20px', '0px']} speed={5}>
                          <img src={layer17} className='layer17 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer18Wrap posAbsImg'>
                      <Parallax translateX={['0px', '-10px']} speed={5}>
                          <img src={layer18} className='layer18 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer19Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']} speed={5}>
                          <img src={layer19} className='layer19 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer20Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']} speed={5}>
                          <img src={layer20} className='layer20 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer21Wrap posAbsImg'>
                      <Parallax  speed={5}>
                          <img src={layer21} className='layer21 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer22Wrap posAbsImg'>
                      <Parallax  speed={5}>
                          <img src={layer22} className='layer22 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer23Wrap posAbsImg'>
                      <Parallax translateX={['20px', '0px']} speed={5}>
                          <img src={layer23} className='layer23 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer24Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']}  speed={5}>
                          <img src={layer24} className='layer24 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer25Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']}  speed={5}>
                          <img src={layer25} className='layer25 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer26Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']}  speed={5}>
                          <img src={layer26} className='layer26 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer27Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']}  speed={5}>
                          <img src={layer27} className='layer27 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer28Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']}  speed={5}>
                          <img src={layer28} className='layer28 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer29Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']} speed={5}>
                          <img src={layer29} className='layer29 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer30Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']} rotate={['15', '-15']} speed={5}>
                          <img src={layer30} className='layer30 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer31Wrap posAbsImg'>
                        <Parallax translateY={['-10px', '0px']}  speed={5}>
                          <img src={layer31} className='layer31 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer32Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']}  speed={5}>
                          <img src={layer32} className='layer32 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer33Wrap posAbsImg'>
                      <Parallax translateX={['0px', '-10px']} rotate={['-15', '15']} speed={5}>
                          <img src={layer33} className='layer33 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer34Wrap posAbsImg'>
                      <Parallax translateY={['-10px', '0px']}  speed={5}>
                          <img src={layer34} className='layer34 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer35Wrap posAbsImg'>
                      <Parallax translateX={['0px', '-10px']} rotate={['-15', '15']} speed={5}>
                          <img src={layer35} className='layer35 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer36Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']} rotate={['-15', '0']} speed={5}>
                          <img src={layer36} className='layer36 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer37Wrap posAbsImg'>
                      <Parallax translateX={['10px', '0px']} speed={5}>
                          <img src={layer37} className='layer37 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer38Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']} speed={5}>
                          <img src={layer38} className='layer38 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer39Wrap posAbsImg'>
                      <Parallax translateX={['10px', '0px']} speed={5}>
                          <img src={layer39} className='layer39 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer40Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']}  speed={5}>
                          <img src={layer40} className='layer40 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer41Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']} rotate={['-10', '15']}   speed={5}>
                          <img src={layer41} className='layer41 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer42Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']} rotate={['10', '-10']}   speed={5}>
                          <img src={layer42} className='layer42 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer43Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']}  speed={5}>
                          <img src={layer43} className='layer43 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer44Wrap posAbsImg'>
                        <Parallax translateX={['-10px', '0px']}  speed={5}>
                          <img src={layer44} className='layer44 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer45Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']}  speed={5}>
                          <img src={layer45} className='layer45 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer46Wrap posAbsImg'>
                        <Parallax translateX={['-10px', '0px']}  speed={5}>
                          <img src={layer46} className='layer46 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer47Wrap posAbsImg'>
                        <Parallax translateX={['-10px', '0px']}  speed={5}>
                          <img src={layer47} className='layer47 img-fit' alt="" />
                        </Parallax>
                      </div>
                      <div className='layer48Wrap posAbsImg'>
                      <Parallax translateX={['-10px', '0px']}  speed={5}>
                          <img src={layer48} className='layer47 img-fit' alt="" />
                      </Parallax>
                        
                      </div>
                      <div className='layer49Wrap posAbsImg' ref={layer49WrapRef}>
                      </div>
                    
                    
                    
                </div>
            </div>
        </section>
    </div>
    </>
  )
}
