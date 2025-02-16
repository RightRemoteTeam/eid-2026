import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { Parallax } from "react-scroll-parallax";

import "../../assets/SCSS/Home/greetingsCard.scss";
import greetingsTopBg from "../../assets/images/greetings/greetingsTopBg.png";
import greetingsTopCloud1 from "../../assets/images/greetings/greetingsTopCloud.svg";
import greetingsTopCloud2 from "../../assets/images/greetings/greetingsTopCloud.svg";
import greetingsTopBirds from "../../assets/images/greetings/greetingsTopBirds.svg";
import greetingsTopDecoration01 from "../../assets/images/greetings/greetings_decoration_1.png";
import greetingsTopDecoration02 from "../../assets/images/greetings/greetings_decoration_2.png";
import greetingsTopElement01 from "../../assets/images/greetings/greetings_1.png";
import greetingsTopElement02 from "../../assets/images/greetings/greetings_2.png";
import greetingsTopBalloon1 from "../../assets/images/greetings/greetings_balloon_1.png";
import greetingsTopBalloon2 from "../../assets/images/greetings/greetings_balloon_2.png";
import greetingSectionBg from "../../assets/images/greetingcard/greetingSectionBg.png";
import greetingBaloon01 from "../../assets/images/greetingcard/baloon3.png";
import greetingCloth01 from "../../assets/images/greetingcard/yellowcloth.png";
import greetingCup01 from "../../assets/images/common/dallah.svg";
import greetingSweet01 from "../../assets/images/greetingcard/sweet1.png";
import greetingGoldCash from "../../assets/images/greetingcard/goldcash.png";
import greetingGreenCash from "../../assets/images/greetingcard/greencash.png";
import greetingDarkCard from "../../assets/images/greetingcard/darkcard.png";
import greetingCup from "../../assets/images/common/cup.png";
import greetingGrass from "../../assets/images/greetingcard/grass.png";
import greetingLeaf from "../../assets/images/common/leaf.png";
import greetingSun from "../../assets/images/common/sun.png";
import greetingCandy from "../../assets/images/common/candy.svg";
import greetingCard01 from "../../assets/images/greetingcard/card2.png";
import greetingCard02 from "../../assets/images/greetingcard/card3.png";
import discoverBuilding01 from "../../assets/images/discover/building01.svg"
import discoverBaloon01 from "../../assets/images/greetingcard/baloon3.png"
import discoverBaloon02 from "../../assets/images/discover/green-baloon.png"
import discoverTrail01 from "../../assets/images/discover/trail.svg"
import discoverTrail02 from "../../assets/images/discover/red-carpet.png"
import discoverDecoration01 from "../../assets/images/greetings/greetings_decoration_2.png"
import discoverGiftBox01 from "../../assets/images/greetingcard/giftbox.png";
import yellowLeaf from "../../assets/images/common/yellow-leaf.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoogleAnalytics } from "../GoogleAnalytics";
import DownloadFilePopup from "./DownloadPopup";

gsap.registerPlugin(ScrollTrigger);

export default function GreetingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfthumbnail, setPdfthumbnail] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [targetEventName, setTargetEventName] = useState("");

  const { t } = useTranslation();
  const { theme } = useTheme();
  const { lang } = useParams();
  const animPlayed = useRef(false);
  const sectionRef = useRef(null);
  const { trackEvent } = GoogleAnalytics();
  const triggerEvent = (event_label, event_category) => {
    console.log("event_label:", event_label);
    trackEvent({
      action: "click",
      category: event_category,
      label: event_label,
      value: 1,
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        id: "3",
        onEnter: () => {
          if (!animPlayed.current) {
            animPlayed.current = true;
            playIntro();
          }
        },
      },
    });
  }, []);
  const playIntro = () => {
    // gsap.to([".greetingElement01"], {
    //     scrollTrigger:{
    //         trigger:".greetingElement01",
    //         start:"top 80%",
    //         end:"top 30%",
    //         scrub:true,
    //     },
    //     x: -20,
    //     ease:"none",
    //     duration:1.5
    //   });
    //   gsap.to([".greetingElement02"], {
    //     scrollTrigger:{
    //         trigger:".greetingElement02",
    //         start:"top 80%",
    //         end:"top 30%",
    //         scrub:true,
    //     },
    //     x: 20,
    //     ease:"none",
    //     duration:1.5
    //   });

    gsap.to([".gsapGreetingBalloon"], {
      y: -15,
      x: 10,
      duration: 1.5,
      rotate: -5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
    gsap.to([".gsapGreetingBalloon"], {
      y: -25,
      x: 15,
      duration: 2,
      ease: "power1.in",
      repeat: -1,
      yoyo: true,
    });

    gsap.to([".gsapGreetingGreenBalloon"], {
      y: 25,
      x: -15,
      duration: 2,
      delay: 0.5,

      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
    gsap.to([".gsapGreetingGreenBalloon"], {
      y: 15,
      x: -10,
      delay: 0.5,
      duration: 2.5,
      rotate: -5,
      ease: "power1.in",
      repeat: -1,
      yoyo: true,
    });
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handlOpenModal = () => {
    setIsModalOpen(true);
  };
  const setModalData = (url, image, event) => {
    setDownloadLink(url);
    setPdfthumbnail(image);
    setTargetEventName(event);
    handlOpenModal();
  };
  return (
    <>
      <DownloadFilePopup
        isOpen={isModalOpen}
        image={pdfthumbnail}
        closeModal={handleCloseModal}
        targetEvent={targetEventName}
        url={downloadLink}
      />
      <section ref={sectionRef} className="greetingSection">
        <div className="greetingTopSection">
          <div className="greetingTop-bg">
          <img src={greetingsTopBg} className="greetingsTopBg img-fit" alt="" />
          </div>
          <div className="greetingTop-heading-1">
          Welcome Eid, the holiday that makes
          everyone happy and joyful! Get
          dressed up, prepare the gifts and
          Eidiya, and of course, your outfit is
          absolutely on point
          </div>
          <div className="greetingsTop-cloud-1">
            <img
              src={greetingsTopCloud1}
              className="greetingsTopCloud1 img-fit"
              alt=""
            />
          </div>

          <div className="greetingsTop-cloud-2">
            <img
              src={greetingsTopCloud2}
              className="greetingsTopCloud2 img-fit"
              alt=""
            />
          </div>

          <div className="greetingsTop-birds">
            <img
              src={greetingsTopBirds}
              className="greetingsTopBirds img-fit"
              alt=""
            />
          </div>



          <div className="decoration1">
            <Parallax translateY={['0px', '-100px']} speed={10}>
              <img
                src={greetingsTopDecoration01}
                className="greetingsTopDecoration01 img-fit"
                alt=""
              />
            </Parallax>
          </div>
          <div className="decoration2">
            <Parallax translateY={['0px', '-200px']} speed={30}>
              <img
                src={greetingsTopDecoration02}
                className="greetingsTopDecoration02 img-fit"
                alt=""
              />
            </Parallax>
          </div>
          <div className="balloon1">
            <Parallax speed={10} translateY={[0, -100]}>
              <div className="gsapGreetingBalloon">
                <img
                  src={greetingsTopBalloon1}
                  className="greetingsTopBalloon1 img-fit"
                  alt=""
                />
              </div>
            </Parallax>
          </div>

          <div className="balloon2">
            <Parallax translateY={[0, -100]} speed={10}>
              <div className="gsapGreetingGreenBalloon">
                <img
                  src={greetingsTopBalloon2}
                  className="greetingsTopBalloon2 img-fit"
                  alt=""
                />
              </div>
            </Parallax>
          </div>
          <div className="balloon3">
            <Parallax translateY={[0, -100]} speed={10}>
              <div className="gsapGreetingGreenBalloon">
                <img
                  src={greetingsTopBalloon2}
                  className="greetingsTopBalloon3 img-fit"
                  alt=""
                />
              </div>
            </Parallax>
          </div>
          <div className="greetingsTop01">
            <img
              src={greetingsTopElement01}
              className="greetingsTopElement01 img-fit"
              alt=""
            />
          </div>
          <div className="greetingsTop02">
            <img
              src={greetingsTopElement02}
              className="greetingsTopElement02 img-fit"
              alt=""
            />
            <button className="btn btn-primary download-btn">
              {" "}
              Eid Identity{" "}
            </button>
          </div>
          <div className="greetingTop03">
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
          <div className="greetingTop04">
            <Parallax translateY={['0px', '-150px']} speed={30}>
              <div className="gsapDiscoverYellowBaloon">
                <img src={discoverBaloon01} alt="Discover Building" />
              </div>
            </Parallax>
          </div>
          <div className="greetingTop05">
            <Parallax translateX={['0px', '-1px']} speed={5}>
              <div className="gsapDiscoverGreenBaloon">
                <img src={discoverBaloon02} alt="Discover baloon" className="green-baloon-1" />
              </div>
            </Parallax>
          </div>
          <div className="greetingTop06">
            <Parallax translateX={['0px', '-1px']} speed={5}>
              <img src={discoverDecoration01} alt="Discover Decoration" />
            </Parallax>
          </div>

          <div className='greetingTop07'>
            <Parallax translateY={['0px', '-100px']} speed={20}>
              <img src={discoverGiftBox01} className='gift-box-img-1 img-fit' alt="giftbox" />
            </Parallax>
          </div>
          
          <div className='greetingTop08'>
            <Parallax translateY={['0px', '-100px']} speed={20}>
              <img src={yellowLeaf} className='yellow-leaf img-fit' alt="" />
            </Parallax>
          </div>
          <div className="greetingTop-heading-2">
          After we get everything ready, we perform
          the Eid prayer, and immerse ourselves in the
          beautiful festive atmosphere. Afterward, we
          visit and greet our loved ones, showering
          them with affection, and then sit down to
          chat with the family
          </div>
        </div>
        <div className="greetingSectionContainer">
          <div className="greetingsSection-bg">
             <img src={greetingSectionBg} className='greetingsSectionBg img-fit' alt="" />
          </div>
          <div className='greetingElements'>
            <div className="greetingCards">
              <div className='greetingElements01'>
                {
                  lang === "en"
                    ?
                    <div className='greetingCardContainer'>
                      <img src={greetingCard01} className='greetingElement01 img-fit' alt="" />
                      <button
                        className="btn btn-primary download-btn">
                        {t("greetingSection.buttondownload")}
                      </button>
                    </div>
                    :
                    <div className='greetingCardContainer'>
                      <img src={greetingCard01} className='greetingElement01 img-fit' alt="" />
                      <button
                        className="btn btn-primary download-btn">
                        {t("greetingSection.buttondownload")}
                      </button>
                    </div>

                }
              </div>
              <div className='greetingElements01'>
                {
                  lang === "en"
                    ?
                    <div className='greetingCardContainer'>
                      <img src={greetingCard02} className='greetingElement01 img-fit' alt="" />
                      <button
                        className="btn btn-primary download-btn">
                        {t("greetingSection.buttondownload")}
                      </button>
                    </div>
                    :
                    <div className='greetingCardContainer'>
                      <img src={greetingCard02} className='greetingElement01 img-fit' alt="" />
                      <button
                        className="btn btn-primary download-btn">
                        {t("greetingSection.buttondownload")}
                      </button>
                    </div>

                }
              </div>
              <div className='greetingElements01'>
                {
                  lang === "en"
                    ?
                    <div className='greetingCardContainer'>
                      <img src={greetingCard02} className='greetingElement01 img-fit' alt="" />
                      <button
                        className="btn btn-primary download-btn">
                        {t("greetingSection.buttondownload")}
                      </button>
                    </div>
                    :
                    <div className='greetingCardContainer'>
                      <img src={greetingCard02} className='greetingElement01 img-fit' alt="" />
                      <button
                        className="btn btn-primary download-btn">
                        {t("greetingSection.buttondownload")}
                      </button>
                    </div>
                }
              </div>
              <div className='greetingElements01'>
                {
                  lang === "en"
                    ?
                    <div className='greetingCardContainer'>
                      <img src={greetingCard02} className='greetingElement01 img-fit' alt="" />
                      <button
                        className="btn btn-primary download-btn">
                        {t("greetingSection.buttondownload")}
                      </button>
                    </div>
                    :
                    <div className='greetingCardContainer'>
                      <img src={greetingCard02} className='greetingElement01 img-fit' alt="" />
                      <button
                        className="btn btn-primary download-btn">
                        {t("greetingSection.buttondownload")}
                      </button>
                    </div>

                }
              </div>
            </div>
          </div>
          <div className='greetingElements03'>
              <Parallax speed={10} translateY={['0px', '-250px']}>
                <div className="gsapGreetingBalloon">
                  <img src={greetingBaloon01} className='greetingElement03 img-fit' alt="" />
                </div>
              </Parallax>
            </div>
            <div className='greetingElements04'>
              <Parallax speed={10} translateX={['-100px', '0px']}>
                <div className="gsapGreetingCloth">
                  <img src={greetingCloth01} className='greetingElement04 img-fit' alt="" />
                </div>
              </Parallax>
            </div>
            <div className='greetingElements05'>
              <Parallax translateY={['0px', '-200px']} speed={20}>
                <div className="gsapGreetingGiftBox">
                  <img src={greetingCup01} className='greetingElement05 img-fit' alt="" />
                </div>
              </Parallax>
            </div>
            <div className='greetingElements06'>
              <Parallax speed={20} translateY={['0px', '-200px']}>
                <div className="gsapGreetingSweet">
                  <img src={greetingSweet01} className='greetingElement06 img-fit' alt="" />
                </div>
              </Parallax>
            </div>
            <div className='greetingElements07'>
              <Parallax speed={5} translateX={['0px', '100px']}>
                <div className="gsapGreetingGoldCash">
                  <img src={greetingGoldCash} className='greetingElement07 img-fit' alt="" />
                </div>
              </Parallax>
            </div>
            <div className='greetingElements08'>
              <Parallax translateX={['0px', '-50px']} speed={15}>
                <img src={greetingGreenCash} className='greetingElement08 img-fit' alt="" />
              </Parallax>
            </div>
            <div className='greetingElements09'>
              <Parallax translateX={['0px', '-50px']} speed={15}>
                <img src={greetingCup} className='greetingElement09 img-fit' alt="" />
              </Parallax>
            </div>
            <div className='greetingElements10'>
                <img src={greetingGrass} className='greetingElement10 img-fit' alt="" />
            </div>
            <div className='greetingElements11'>
                <img src={greetingLeaf} className='greetingElement11 img-fit' alt="" />
            </div>
            <div className='greetingElements12'>
                <img src={greetingBaloon01} className='greetingElement12 img-fit' alt="" />
            </div>
            <div className='greetingElements13'>
                <img src={greetingSun} className='greetingElement13 img-fit' alt="" />
            </div>
            <div className='greetingElements14'>
                <img src={greetingCandy} className='greetingElement14 img-fit' alt="" />
            </div>
            <div className='greetingElements15'>
                <img src={greetingsTopBirds} className='greetingElement15 img-fit' alt="" />
            </div>

          <div className="section-box">
            <div className='section-card-container'>
              <div className='greetingCardContainer'>
                <img src={greetingDarkCard} className='greetingElement01' alt="" />
              </div>
              <div className='greetingCardContainer'>
                <img src={greetingCard01} className='greetingElement01' alt="" />
              </div>
            </div>

            <div className='section-box-container'>
              <h1 dangerouslySetInnerHTML={{ __html: t("greetingSection.title") }} />
              <h2 dangerouslySetInnerHTML={{ __html: t("greetingSection.para") }} />

              <div className='section-box-btns'>
                <button
                  className="btn btn-primary download-btn">
                  {t("greetingSection.buttondownload")}
                </button>
                <button
                  className="btn btn-primary download-btn">
                  {t("greetingSection.buttondownload")}
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
