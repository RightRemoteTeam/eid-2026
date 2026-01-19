import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

import "../../assets/SCSS/Home/greetingsCard.scss";
import greetingTopBg from "../../assets/images/greetings/greetingTopBg.png";
import greetingTopMobileBg from "../../assets/images/greetings/greetingTopMobileBg.png";
import greetingTopCloud from "../../assets/images/greetings/greetingsTopCloud.png";
import greetingTopBirds from "../../assets/images/greetings/greetingsTopBirds.png";
import greetingTopDecoration01 from "../../assets/images/greetings/greetings_decoration_1.png";
import greetingTopDecoration02 from "../../assets/images/greetings/greetings_decoration_2.png";
import greetingsTopElement01 from "../../assets/images/greetings/greetings_1.png";
import greetingsTopCandy from "../../assets/images/greetings/candy.png";
import greetingsTopBalloon1 from "../../assets/images/greetings/greetings_balloon_1.png";
import greetingsTopBalloon2 from "../../assets/images/greetings/greetings_balloon_2.png";
import greetingBottomBg from "../../assets/images/greetings/greetingBottomBg.png";
import greetingBottomMobileBg from "../../assets/images/greetings/greetingBottomMobileBg.png";
import greetingballoon01 from "../../assets/images/greetings/balloon3.png";
import greetingInstrument from "../../assets/images/greetings/instrument.png";
import greetingMusic from "../../assets/images/greetings/music.png";
import greetingCloth01 from "../../assets/images/greetings/yellowcloth.png";
import greetingCup01 from "../../assets/images/common/dallah.png";
import greetingSweet01 from "../../assets/images/greetings/sweet1.png";
import greetingGoldCash from "../../assets/images/greetings/goldcash.png";
import greetingGreenCash from "../../assets/images/greetings/greencash.png";
import greetingCup from "../../assets/images/common/cup.png";
import greetingGrass from "../../assets/images/greetings/grass.png";
import greetingLeaf from "../../assets/images/common/leaf.png";
import greetingSun from "../../assets/images/common/sun.png";
import greetingCandy from "../../assets/images/common/candy.png";
import greetingCard02 from "../../assets/images/greetings/card3.png";
import greetingCard03 from "../../assets/images/greetings/C1.png";
import greetingCard05 from "../../assets/images/greetings/C3.png";
import greetingCard06 from "../../assets/images/greetings/C4.png";
import greetingCard07 from "../../assets/images/greetings/greeting-card.png";
import greetingCard08 from "../../assets/images/greetings/dark-greeting-card.png";
import discoverBuilding01 from "../../assets/images/greetings/building01.png";
import discoverballoon01 from "../../assets/images/greetings/balloon3.png";
import discoverballoon02 from "../../assets/images/discover/green-balloon.png";
import discoverTrail01 from "../../assets/images/greetings/trail.png";
import discoverTrail02 from "../../assets/images/greetings/red-carpet.png";
import discoverDecoration01 from "../../assets/images/greetings/greetings_decoration_2.png";
import discoverGiftBox01 from "../../assets/images/greetings/giftbox.png";
import yellowLeaf from "../../assets/images/common/yellow-leaf.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoogleAnalytics } from "../GoogleAnalytics";
import DownloadFilePopup from "./DownloadPopup";
import pdfThumbnail_identity from "../../assets/images/downloadable/pdfThumbnail_identity.png";
import pdfThumbnail_booklet from "../../assets/images/downloadable/pdfThumbnail_booklet.jpeg";
import pdfThumbnail_greetingcards from "../../assets/images/downloadable/pdfThumbnail_greetingcards.png";
import pdfThumbnail_house_decorations from "../../assets/images/downloadable/pdfThumbnail_house_decorations.png";
import pdfThumbnail_company_decorations from "../../assets/images/downloadable/pdfThumbnail_company_decorations.png";
import ENV from "../Constants";
import useIsMobile from "../Hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

export default function GreetingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfthumbnail, setPdfthumbnail] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [targetEventName, setTargetEventName] = useState("");

  const isMobile = useIsMobile();

  const { t } = useTranslation();
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
    if (isMobile) {
      gsap.to([".gsapGreetingBalloon"], {
        y: -3,
        x: 2,
        duration: 1.2,
        rotate: -2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to([".gsapGreetingBalloon"], {
        y: -8,
        x: 4,
        duration: 2,
        ease: "power1.in",
        repeat: -1,
        yoyo: true,
      });
    } else {
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
    }

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
            <picture>
              <source srcSet={greetingTopMobileBg} media="(max-width: 768px)" />
              <img src={greetingTopBg} alt="Greetings-Top Background" />
            </picture>
          </div>
          <div
            className="greetingTop-heading-1"
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            {t("greetingSection.description1")}
          </div>
          <div className="greetingTop-cloud-1">
            <img
              src={greetingTopCloud}
              className="greetingTopCloud1 img-fit"
              alt=""
            />
          </div>

          <div className="greetingTop-cloud-2">
            <img
              src={greetingTopCloud}
              className="greetingTopCloud2 img-fit"
              alt=""
            />
          </div>

          <div className="greetingTop-birds">
            <img
              src={greetingTopBirds}
              className="greetingTopBirds img-fit"
              alt=""
            />
          </div>

          <div className="decoration1">
            <Parallax shouldAlwaysCompleteAnimation={true} translateY={[0, -30]} speed={10}>
              <img
                src={greetingTopDecoration01}
                className="greetingTopDecoration01 img-fit"
                alt=""
              />
            </Parallax>
          </div>
          <div className="decoration2">
            <Parallax shouldAlwaysCompleteAnimation={true} translateY={[0, -40]} speed={30}>
              <img
                src={greetingTopDecoration02}
                className="greetingTopDecoration02 img-fit"
                alt=""
              />
            </Parallax>
          </div>
          <div className="balloon1">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={10} translateY={[0, -100]}>
              <div className="gsapGreetingBalloon">
                <img
                  src={greetingsTopBalloon1}
                  className="greetingTopBalloon1 img-fit"
                  alt=""
                />
              </div>
            </Parallax>
          </div>

          <div className="balloon2">
            <Parallax shouldAlwaysCompleteAnimation={true} translateY={[0, -100]} speed={10}>
              <div className="gsapGreetingGreenBalloon">
                <img
                  src={greetingsTopBalloon2}
                  className="greetingsTopBalloon2 img-fit"
                  alt=""
                />
              </div>
            </Parallax>
          </div>
          <div className="greetingElementsInstrument">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={10} translateY={["0", "-150"]}>
              <div className="gsapGreetingBalloon">
                <img
                  src={greetingInstrument}
                  className="greetingElement03 img-fit"
                  alt=""
                />
              </div>
            </Parallax>
          </div>
          <div className="greetingElementsMusic">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={10} translateY={[0, -200]}>
              <div className="gsapGreetingBalloon">
                <img
                  src={greetingMusic}
                  className="greetingElement03 img-fit"
                  alt=""
                />
              </div>
            </Parallax>
          </div>
          <div className="greetingTop01">
            <img
              src={greetingsTopElement01}
              className="greetingTopElement01 img-fit"
              alt=""
            />
          </div>
          <div className="greetingTop-candy">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={10} translateY={[0, -70]} rotate={[-20, 20]}>
              <img
                src={greetingsTopCandy}
                className="greetingTopCandy img-fit"
                alt=""
              />
            </Parallax>
          </div>
          <div className="greetingTop02">
            <img
              src={greetingCard02}
              className="greetingTopElement02 img-fit"
              alt=""
            />
            <button
              onClick={() => {
                triggerEvent("Eid_Identity_2026_click", "link_click");
                setModalData(ENV.IDENTITY, pdfThumbnail_identity);
              }}
              href={ENV.IDENTITY}
              download
              className="btn btn-primary download-btn"
              dir={lang === "ar" ? "rtl" : "ltr"}
            >
              {t("buttons.title1")}
            </button>
          </div>
          <div className="greetingTop03">
            <Parallax shouldAlwaysCompleteAnimation={true}
              translateY={[0, -8]}
              speed={20}
              className="building-img-1"
            >
              <img src={discoverBuilding01} alt="Discover Building" />
            </Parallax>
            <div className="trail-container">
              <div className="trail-whole">
                <img
                  src={discoverTrail01}
                  alt="Discover Trail"
                  className="trail-img"
                />
                <div className="trail-carpet-container">
                  <Parallax shouldAlwaysCompleteAnimation={true}
                    translateY={[0, -10]}
                    translateX={[10, 0]}
                    speed={10}
                  >
                    <img
                      src={discoverTrail02}
                      alt="trail-carpet"
                      className="trail-carpet"
                    />
                  </Parallax>
                </div>
              </div>
            </div>
          </div>
          <div className="greetingTop04">
            <Parallax shouldAlwaysCompleteAnimation={true} translateY={[0, -100]} speed={10}>
              <div className="gsapGreetingBalloon">
                <img src={discoverballoon01} alt="Discover Building" />
              </div>
            </Parallax>
          </div>
          <div className="greetingTop05">
            <Parallax shouldAlwaysCompleteAnimation={true} translateX={[0, -2]} speed={2}>
              <div className="gsapGreetingGreenBalloon">
                <img
                  src={discoverballoon02}
                  alt="Discover balloon"
                  className="green-balloon-1"
                />
              </div>
            </Parallax>
          </div>
          <div className="greetingTop06">
            <Parallax shouldAlwaysCompleteAnimation={true} translateX={["0px", "-1px"]} speed={5}>
              <img src={discoverDecoration01} alt="Discover Decoration" />
            </Parallax>
          </div>

          <div className="greetingTop07">
            <Parallax shouldAlwaysCompleteAnimation={true} translateY={[0, -100]} speed={30}>
              <img
                src={discoverGiftBox01}
                className="gift-box-img-1 img-fit"
                alt="giftbox"
              />
            </Parallax>
          </div>

          <div className="greetingTop08">
            <Parallax shouldAlwaysCompleteAnimation={true}
              translateY={["0px", "-100px"]}
              rotate={[0, 50]}
              speed={20}
            >
              <img src={yellowLeaf} className="yellow-leaf img-fit" alt="" />
            </Parallax>
          </div>
          <div
            className="greetingTop-heading-2"
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            {t("greetingSection.description2")}
          </div>
        </div>
        <div className="greetingBottomSection">
          <div className="greetingBottom-bg">
            <picture>
              <source
                srcSet={greetingBottomMobileBg}
                media="(max-width: 768px)"
              />
              <img src={greetingBottomBg} alt="Greetings Bottom Background" />
            </picture>
          </div>
          <div className="greetingElements">
            <div className="greetingCards" dir={lang === "ar" ? "rtl" : "ltr"}>
              <div className="greetingElements01">
                <div className="greetingCardContainer">
                  <img
                    src={greetingCard03}
                    className="greetingElement01 img-fit"
                    alt=""
                  />
                  <button
                    className="btn btn-primary download-btn disabled"
                    onClick={() => {
                      triggerEvent(
                        "Eid_Events_Booklet_2026_click",
                        "link_click"
                      );
                      setModalData(ENV.BOOKLET, pdfThumbnail_booklet);
                    }}
                    href={ENV.BOOKLET}
                    dir={lang === "ar" ? "rtl" : "ltr"}
                  >
                    {t("buttons.title2")}
                  </button>
                </div>
              </div>
              <div className="greetingElements01">
                <div className="greetingCardContainer">
                  <img
                    src={greetingCard08}
                    className="greetingElement01 img-fit"
                    alt=""
                  />
                  <button
                    className="btn btn-primary download-btn"
                    onClick={() => {
                      triggerEvent("Greeting_Cards_2026_click", "link_click");
                      setModalData(
                        ENV.GREETING_CARD,
                        pdfThumbnail_greetingcards
                      );
                    }}
                    href={ENV.GREETING_CARD}
                    dir={lang === "ar" ? "rtl" : "ltr"}
                  >
                    {t("buttons.title3")}
                  </button>
                </div>
              </div>
              <div className="greetingElements01">
                <div className="greetingCardContainer">
                  <img
                    src={greetingCard05}
                    className="greetingElement01 img-fit"
                    alt=""
                  />
                  <button
                    className="btn btn-primary download-btn"
                    onClick={() => {
                      triggerEvent(
                        "House_Decorations_2026_click",
                        "link_click"
                      );
                      setModalData(
                        ENV.HOUSE_DECORATION_HORIZANTAL,
                        pdfThumbnail_house_decorations
                      );
                    }}
                    href={ENV.HOUSE_DECORATION_HORIZANTAL}
                    dir={lang === "ar" ? "rtl" : "ltr"}
                  >
                    {t("buttons.title4")}
                  </button>
                </div>
              </div>
              <div className="greetingElements01">
                <div className="greetingCardContainer">
                  <img
                    src={greetingCard06}
                    className="greetingElement01 img-fit"
                    alt=""
                  />
                  <button
                    className="btn btn-primary download-btn"
                    onClick={() => {
                      triggerEvent(
                        "Company_Decorations_2026_click",
                        "link_click"
                      );
                      setModalData(
                        ENV.COMPANY_DECORATION_HORIZANTAL,
                        pdfThumbnail_company_decorations
                      );
                    }}
                    href={ENV.COMPANY_DECORATION_HORIZANTAL}
                    dir={lang === "ar" ? "rtl" : "ltr"}
                  >
                    {t("buttons.title5")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="greetingTop-heading-3"
            dir={lang === "ar" ? "rtl" : "ltr"}
          >
            {t("greetingSection.description3")}
          </div>
          <div className="greetingElements04">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={5} translateX={["-50px", "0px"]}>
              <div className="gsapGreetingCloth">
                <img
                  src={greetingCloth01}
                  className="greetingElement04 img-fit"
                  alt=""
                />
              </div>
            </Parallax>
          </div>
          <div className="greetingElements05">
            <Parallax shouldAlwaysCompleteAnimation={true} translateY={["0", "-100"]} speed={8}>
              <div className="gsapGreetingGiftBox">
                <img
                  src={greetingCup01}
                  className="greetingElement05 img-fit"
                  alt=""
                />
              </div>
            </Parallax>
          </div>
          <div className="greetingElements06">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={6} translateY={["0", "-100"]}>
              <div className="gsapGreetingSweet">
                <img
                  src={greetingSweet01}
                  className="greetingElement06 img-fit"
                  alt=""
                />
              </div>
            </Parallax>
          </div>
          <div className="greetingElements07">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={5} translateX={["0", "50"]}>
              <div className="gsapGreetingGoldCash">
                <img
                  src={greetingGoldCash}
                  className="greetingElement07 img-fit"
                  alt=""
                />
              </div>
            </Parallax>
          </div>
          <div className="greetingElements08">
            <Parallax shouldAlwaysCompleteAnimation={true} translateX={["0", "-50"]} speed={5}>
              <img
                src={greetingGreenCash}
                className="greetingElement08 img-fit"
                alt=""
              />
            </Parallax>
          </div>
          <div className="greetingElements09">
            <Parallax shouldAlwaysCompleteAnimation={true} translateX={["0", "-50"]} speed={5}>
              <img
                src={greetingCup}
                className="greetingElement09 img-fit"
                alt=""
              />
            </Parallax>
          </div>
          <div className="greetingElements10">
           <Parallax shouldAlwaysCompleteAnimation={true}  speed={5}>
            <img
              src={greetingGrass}
              className="greetingElement10 img-fit"
              alt=""
            />
             </Parallax>
          </div>
          <div className="greetingElements11">
            <Parallax shouldAlwaysCompleteAnimation={true} translateY={["0", "-100"]} speed={10}>
              <img
                src={greetingLeaf}
                className="greetingElement11 img-fit"
                alt=""
              />
            </Parallax>
          </div>
          <div className="greetingElements12">
            <Parallax shouldAlwaysCompleteAnimation={true} speed={10} translateY={["0", "-100"]}>
              <div className="gsapGreetingBalloon">
                <img
                  src={greetingballoon01}
                  className="greetingElement12 img-fit"
                  alt=""
                />
              </div>
            </Parallax>
          </div>
          <div className="greetingElements13">
            <img
              src={greetingSun}
              className="greetingElement13 img-fit"
              alt=""
            />
          </div>
          <div className="greetingElements14">
            <Parallax shouldAlwaysCompleteAnimation={true}
              translateY={["0px", "-100px"]}
              rotate={[0, 30]}
              speed={10}
            >
              <img
                src={greetingCandy}
                className="greetingElement14 img-fit"
                alt=""
              />
            </Parallax>
          </div>
          <div className="greetingElements15">
            <img
              src={greetingTopBirds}
              className="greetingElement15 img-fit"
              alt=""
            />
          </div>

          <div className="section-box">
            <div className="section-card-container">
              <div className="greetingCardContainer">
                <img
                  src={greetingCard08}
                  className="greetingElement01 greetingMainCard"
                  alt="Greeting card"
                />
              </div>
              <div className="greetingCardContainer">
                <img
                  src={greetingCard07}
                  className="greetingElement01 greetingMainCard"
                  alt="Greeting card"
                />
              </div>
            </div>

            <div
              className="section-box-container"
              dir={lang === "ar" ? "rtl" : "ltr"}
            >
              <h1
                dangerouslySetInnerHTML={{ __html: t("greetingSection.title") }}
              />
              <h2
                dangerouslySetInnerHTML={{ __html: t("greetingSection.para") }}
              />

              <div className="section-box-btns">
                <button
                  className="btn btn-primary download-btn"
                  onClick={() => {
                    triggerEvent("Your_Greetings_2026", "link_click");
                    setModalData(
                      ENV.GREETING_CARD,
                      pdfThumbnail_greetingcards
                    );
                  }}
                >
                  {t("buttons.title6")}
                </button>
                <Link to={`/${lang}/greetings`}
                  className="btn btn-primary download-btn"
                  onClick={() => {
                    triggerEvent("Eid_greetings_2026", "link_click");
                  }}
                >
                  {t("buttons.title7")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}