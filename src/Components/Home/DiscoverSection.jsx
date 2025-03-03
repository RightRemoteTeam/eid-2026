import React, { useRef, useEffect } from "react";
import "../../assets/SCSS/Home/discoverSection.scss";
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ENV from "../Constants";
import { GoogleAnalytics } from "../GoogleAnalytics";
import Background from "../../assets/images/discover/background.png";
import MobileBackground from "../../assets/images/discover/mobile-background.png";
import GiantWheel from "../../assets/images/discover/giant-wheel.png";
import YellowCarpet from "../../assets/images/common/yellow-carpet.png";
import FireWorks from "../../assets/images/discover/fireworks.png";
import Trophy from "../../assets/images/discover/trophy.png";
import Smoke from "../../assets/images/discover/smoke.png";
import GiftBox from "../../assets/images/common/gift-box.png";
import Donut from "../../assets/images/common/donut.png";
import SweetsPlate from "../../assets/images/common/sweets-plate.png";
import GreenBalloon from "../../assets/images/common/green-balloon.png";
import Sparkles from "../../assets/images/discover/sparkles.png";
import TopBill from "../../assets/images/discover/bill-01.png";
import CenterBill from "../../assets/images/discover/bill-02.png";
import BottomBill from "../../assets/images/common/bill-01.png";
import Wallet from "../../assets/images/discover/wallet.png";
import Candy from "../../assets/images/discover/candy.png";
import RedCarpet from "../../assets/images/common/red-carpet.png";
import YellowConfetti from "../../assets/images/common/yellow-confetti.png";
import EnjoySaudiLogo from "../../assets/images/logos/enjoy-saudi.png";
import EidEventsLogo from "../../assets/images/logos/eid-events.png";
import GEALogo from "../../assets/images/logos/general-entertainment-authority.png";
import useIsMobile from "../Hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

export default function DiscoverSection() {
  const animPlayed = useRef(false);
  const sectionRef = useRef(null);
  const { lang } = useParams();
  const { t } = useTranslation();
  const isMobile = useIsMobile();

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
            playAnimation();
          }
        },
      },
    });
  }, []);
  const playAnimation = () => {
    const orangeBalloon = document.querySelector(
      ".discover-section .discover-gift-container .balloon-img img"
    );
    const greenBalloon = document.querySelector(
      ".discover-section .discover-sweets-container .balloon-img img"
    );

    if (orangeBalloon) {
      gsap.to([orangeBalloon], {
        y: 25,
        x: -15,
        duration: 2,
        delay: 0.5,

        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to([orangeBalloon], {
        y: 15,
        x: -10,
        delay: 0.5,
        duration: 2.5,
        rotate: -5,
        ease: "power1.in",
        repeat: -1,
        yoyo: true,
      });
    }

    if (greenBalloon) {
      gsap.to([greenBalloon], {
        y: 25,
        x: -15,
        duration: 2,
        delay: 0.5,

        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to([greenBalloon], {
        y: 15,
        x: -10,
        delay: 0.5,
        duration: 2.5,
        rotate: -5,
        ease: "power1.in",
        repeat: -1,
        yoyo: true,
      });
    }
  };

  return (
    <section ref={sectionRef} className="discover-section">
      <div className="discover-section-background">
        <picture>
          <source srcSet={MobileBackground} media="(max-width: 768px)" />
          <img src={Background} alt="" />
        </picture>
      </div>
      <div className="desc-container-1" dir={lang === "ar" ? "rtl" : "ltr"}>
        <p className="section-desc-1">{t("discover.description1")}</p>
      </div>

      <div className="discover-giantwheel-container">
        <div className="container-content">
          <div className="giantwheel-img">
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              translateX={isMobile ? [0, 4] : [0, 8]}
              speed={isMobile ? 5 : 10}
            >
              <img src={GiantWheel} alt="cart wheel" />
            </Parallax>
          </div>
          <div className="giantwheel-carpet">
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              speed={isMobile ? 3 : 5}
            >
              <img src={YellowCarpet} alt="carpet" />
            </Parallax>
          </div>

          <div className="giantwheel-fireworks">
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              translateX={isMobile ? [0, 4] : [0, 8]}
              scale={[0.2, 1]}
              opacity={[0.5, 1]}
              speed={isMobile ? 3 : 5}
              className="fireworks-container"
            >
              <img src={FireWorks} alt="fireworks" />
            </Parallax>
          </div>
          <div className="donut-img">
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              translateX={isMobile ? [0, 4] : [0, 8]}
              speed={isMobile ? 7 : 10}
            >
              <img src={Donut} alt="fireworks" />
            </Parallax>
          </div>
        </div>
      </div>

      <div className="discover-gift-container">
        <div className="container-content">
          <div className="trophy-img">
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              translateX={[10, 0]}
              speed={isMobile ? 2 : 5}
            >
              <img src={Trophy} alt="trophy" className="img-fit" />
            </Parallax>
            <div className="smoke-img">
              <Parallax
                shouldAlwaysCompleteAnimation={true}
                translateX={[10, 0]}
                speed={isMobile ? 2 : 5}
              >
                <img src={Smoke} alt="smoke" className="img-fit" />
              </Parallax>
            </div>
          </div>
          <div className="giftbox-img">
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              speed={isMobile ? 5 : 10}
            >
              <img src={GiftBox} alt="gift" />
            </Parallax>
          </div>
        </div>
      </div>

      <div className="desc-container-2">
        <p className="section-desc-2" dir={lang === "ar" ? "rtl" : "ltr"}>
          {t("discover.description2")}
        </p>
        <div className="discover-events-container ">
          <div className="discover-events-button">
            <Link
              className="btn btn-primary"
              target="_blank"
              dir={lang === "ar" ? "rtl" : "ltr"}
              to={`${ENV.EID_EVENT}${lang}/${ENV.EID_EVENT_QUERY_PARAM}`}
              onClick={() => triggerEvent("Eid_Events_2025", "link_click")}
            >
              {t("buttons.title8")}
            </Link>
          </div>
          <div className="logo-container">
            <img src={EnjoySaudiLogo} alt="Enjoy Saudi" />
          </div>
        </div>
      </div>

      <div className="discover-sweets-container">
        <div className="container-content">
          <div className="sweetsplate-img">
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              translateX={isMobile ? [0, 4] : [0, 8]}
              speed={isMobile ? 5 : 10}
            >
              <img src={SweetsPlate} alt="sweets" />
            </Parallax>
          </div>
          <div className="balloon-img">
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              speed={isMobile ? 8 : 15}
            >
              <img src={GreenBalloon} alt="balloon" />
            </Parallax>
          </div>
          <div className="sparkles-img">
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              speed={isMobile ? 3 : 5}
            >
              <img src={Sparkles} alt="sparkles" />
            </Parallax>
          </div>
        </div>
      </div>

      <div className="discover-bills-container">
        <div className="container-content">
          <div className="sparkles-inverted-img">
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              speed={isMobile ? 3 : 5}
            >
              <img src={Sparkles} alt="sparkles" />
            </Parallax>
          </div>
          <div className="flying-bills-container">
            <div className="bills-container-content">
              <div className="top-bill">
                <Parallax
                  shouldAlwaysCompleteAnimation={true}
                  translateX={isMobile ? [3, 0] : [6, 0]}
                  speed={isMobile ? 4 : 7}
                >
                  <img src={TopBill} alt="bill" />
                </Parallax>
              </div>
              <div className="center-bill">
                <Parallax
                  shouldAlwaysCompleteAnimation={true}
                  translateX={isMobile ? [2.5, 0] : [5, 0]}
                  speed={isMobile ? 3 : 5}
                >
                  <img src={CenterBill} alt="bill" />
                </Parallax>
              </div>
              <div className="bottom-bill">
                <Parallax
                  shouldAlwaysCompleteAnimation={true}
                  translateX={isMobile ? [3.5, 0] : [7, 0]}
                  speed={isMobile ? 5 : 10}
                >
                  <img src={BottomBill} alt="bill" />
                </Parallax>
              </div>
              <div className="bill-and-wallet">
                <Parallax
                  shouldAlwaysCompleteAnimation={true}
                  speed={isMobile ? 4 : 8}
                >
                  <img src={Wallet} alt="wallet" />
                </Parallax>
              </div>
            </div>
          </div>
          <div className="candy-img">
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              //translateY={isMobile ? [0, -25] : [0, -50]}
              rotate={isMobile ? [0, 10] : [0, 20]}
              speed={isMobile ? 5 : 10}
            >
              <img src={Candy} alt="candy" />
            </Parallax>
          </div>
          <div className="redcarpet-img">
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              translateX={isMobile ? [4, 0] : [8, 0]}
              speed={isMobile ? 8 : 15}
            >
              <img src={RedCarpet} alt="carpet" />
            </Parallax>
          </div>
          <div className="confetti-img">
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              translateX={isMobile ? [0, -10] : [0, -20]}
              //translateY={isMobile ? [4, 0] : [8, 0]}
              rotate={isMobile ? [0, 15] : [0, 30]}
              speed={isMobile ? 6 : 12}
            >
              <img src={YellowConfetti} alt="confetti" />
            </Parallax>
          </div>
        </div>
      </div>

      <div className="discover-section-logos">
        <div className="logo-container">
          <div className="eid-events-logo">
            <img src={EidEventsLogo} alt="Eid Events" />
          </div>
          <div className="vertical-seperator"></div>
          <div className="gea-logo">
            <img src={GEALogo} alt="GEA" />
          </div>
        </div>
      </div>
      <div className="discover-section-bottom-filler"></div>
    </section>
  );
}
