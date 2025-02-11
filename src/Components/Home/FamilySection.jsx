import React, { useEffect } from 'react'
import { useTheme } from '../ThemeContext';
import { useTranslation } from 'react-i18next';
import { Parallax } from "react-scroll-parallax";
import "../../assets/SCSS/Home/familySection.scss"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import FandSImage from "../../assets/images/F&S.png";
import ladyImage from "../../assets/images/Lady.png";
import DaughterImage from "../../assets/images/Daughter.png";
import FamilyWave from "../../assets/images/familyWave.png";
import FamilyWaveDark from "../../assets/images/familyWaveDark.png";
import redGiftImage from "../../assets/images/familyRedGift.png";
import purseImage from "../../assets/images/W_04.png";
import WalletCashGreen from "../../assets/images/W_01.png";
import WalletCashPurple from "../../assets/images/W_03.png";
import WalletCashBlue from "../../assets/images/W_02.png";
import leftWavePurple from "../../assets/images/FamilywavePurple.png"
import leftWaveGreen from "../../assets/images/FamilyWaveGreen.png"


gsap.registerPlugin(ScrollTrigger);

export default function FamilySection() {
    const { theme } = useTheme();
    const { t, i18n } = useTranslation();
    useEffect(() => {
        gsap.to([".gsapleftcash"], {
            x: 20, // offset by the width of the box
            y: 10,
            duration: 2,
            rotate:10,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
          });
          gsap.to([".gsapleftcash2"], {
            x: 20, // offset by the width of the box
            duration: 2,
            rotate:10,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true 
          });

    }, [])
    
  return (
    <>
                <section className="family">
                <div className="family-container">
                    <div className="family-left-image">
                        <div className="left-cash-group">
                            <div className="family-wave-green">
                                <img src={leftWaveGreen} className="" alt="" />
                            </div>
                            <div className="family-wave-purple">
                                <img src={leftWavePurple} className="" alt="" />
                            </div>
                            <div className="left-cash-green">
                                <div className="gsapleftcash2">
                                <img src={WalletCashGreen} className='img-fit' alt="" />

                                </div>
                            </div>
                            <div className="left-cash-purple">
                                <div className="gsapleftcash">
                                <img src={WalletCashPurple} className='img-fit' alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="family-image-group">
                            {/* <article className='family-image' translateX={[0]} speed={10}>
                                <img src={familyImage} className='img-fit' alt="" />
                            </article> */}
                            <div className="family-images">
                                <Parallax className="family-lady" translateX={[10,-10]} translateY={[-30,10]}>
                                    <img src={ladyImage}  className="img-fit" alt="" />
                                </Parallax>
                                <div className="family-fs">
                                    <img src={FandSImage}  className="img-fit" alt="" />
                                </div>
                                <Parallax className="family-Daughter" translateX={[10,0]}>
                                    <img src={DaughterImage}  className="img-fit" alt="" />
                                </Parallax>
                            </div>
                            <div className="family-wave">
                                    <img src={FamilyWave} className='dayWave img-fit' alt="" />
                                    <img src={FamilyWaveDark} className='NightWave img-fit' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="family-content">
                        <div className="family-top-gift">
                            {/* <Parallax easing={'easeOut'} className='blurGift' speed={10}>
                                <img src={blurGiftImage} className="gsapblurGift img-fit" alt="" />
                            </Parallax> */}
                            <Parallax className='redGift' translateY={[50,-100]} translateX={[-50,100]} speed={10}>
                                <img src={redGiftImage} className="img-fit" alt="" />
                            </Parallax>
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
                            <Parallax  className='bottom-gift' speed={0}>
                                {/* <div className='gsapPurpleGift'> */}
                                    <img src={purseImage}  className=" img-fit" alt="" />
                                {/* </div> */}
                            </Parallax>
                            <div className="cash-elements">
                                <div className="wallet-cash-blue"   speed={5}>
                                    <img src={WalletCashBlue} className='img-fit' alt="" />
                                </div>
                                <div className="wallet-cash-purple " translateY={[-75,-100]} speed={0}>
                                    <img src={WalletCashPurple} className='img-fit' alt="" />
                                </div>
                                <div className="wallet-cash-green "translateY={[-70,-100]} speed={0}>
                                    <img src={WalletCashGreen} className='img-fit' alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}
