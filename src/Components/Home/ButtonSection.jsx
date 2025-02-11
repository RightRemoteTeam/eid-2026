import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";

import "../../assets/SCSS/Home/buttonSection.scss"
import { Parallax } from "react-scroll-parallax";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function ButtonSection() {
  
  useEffect(() => {
      gsap.to([".buttonStars"], {
        y: 10, // offset by the width of the box
        //x: 20,
        duration: 1.5,
        // rotate:10,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true 
      });
}, [])
  const { t } = useTranslation();
  return (
    <>
      <section className="ButtonSection Buttontranslate">
        {/* <div className='ButtonElements01'>
          <Parallax translateX={[-100,0]} speed={20}>
            <img src={ButtonElement01} className='ButtonElement01 img-fit' alt="" />
          </Parallax>
        </div>
        <div className='ButtonElements02'>
            <Parallax speed={10}>
              <img src={ButtonElement02} className='ButtonElement02 img-fit' alt="" />
            </Parallax>
        </div> */}
        <div className="ButtonContainer">
            <div className='buttonsectionWrap'>
                <a href='#' className='btn btn-primary' dangerouslySetInnerHTML={{ __html: t("Buttontranslate.title1") }} />
                <a href='#' className='btn btn-primary'  dangerouslySetInnerHTML={{ __html: t("Buttontranslate.title2") }} />
                <a href='#' className='btn btn-primary'  dangerouslySetInnerHTML={{ __html: t("Buttontranslate.title3") }} />
                <a href='#' className='btn btn-primary'  dangerouslySetInnerHTML={{ __html: t("Buttontranslate.title4") }} />
            </div>
        </div>
        {/* <div className="button-element-star">
          <div className="button-star">
            <Parallax speed={10}>
              <img src={buttonStarImage}  className=" buttonStars img-fit" alt="" />
            </Parallax>
          </div>
        </div> */}
      </section>
    </>
  )
}
