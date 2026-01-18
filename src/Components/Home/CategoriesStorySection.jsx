import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ENV from "../Constants";
import useIsMobile from "../Hooks/useIsMobile";
import { GoogleAnalytics } from "../GoogleAnalytics";
import DownloadFilePopup from "./DownloadPopup";

// Asset Button Image Arabic
import corporatePublicationCardAr from "../../assets/images/cards/BTN_AR_corporate_publications.png";
import homePublicationCardAr from "../../assets/images/cards/BTN_AR_home_publications.png";
import greetingCardAr from "../../assets/images/cards/BTN_AR_greeting_card.png";
import eidActivityBookletAr from "../../assets/images/cards/BTN_AR_eid_activities_booklet.png";

// Thumbnail for Assets
import corporatePublicationThumbNail from "../../assets/images/cards/BTN_AR_corporate_publications.png";
import homePublicationCardThumbNail from "../../assets/images/cards/BTN_AR_home_publications.png";
import greetingCardThumbNail from "../../assets/images/cards/BTN_AR_greeting_card.png";
import eidActivityBookletThumbNail from "../../assets/images/cards/BTN_AR_eid_activities_booklet.png";

import sweetBowl from "../../assets/images/icons/bowl.svg";
import eldiyahMessage from "../../assets/images/cards/eldiyah-message.svg";
import musicNote from "../../assets/images/icons/musicnote.svg";
import halfNote from "../../assets/images/icons/musicnote3.svg";
import oud from "../../assets/images/icons/oud.svg";

gsap.registerPlugin(ScrollTrigger);

export default function CategoriesStorySection() {
  const sectionRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfthumbnail, setPdfthumbnail] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [targetEventName, setTargetEventName] = useState("");
  //const isMobile = useIsMobile();

  //const { t } = useTranslation();
  const { lang } = useParams();
  const { trackEvent } = GoogleAnalytics();
  const triggerEvent = (event_label, event_category) => {
    // console.log("event_label:", event_label);
    trackEvent({
      action: "click",
      category: event_category,
      label: event_label,
      value: 1,
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

  useEffect(() => {
    gsap.to(".categories-story-section .music-note", {
      rotation: 15,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.to(".categories-story-section .half-note", {
      rotation: -15,
      duration: 2.2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <>
      <DownloadFilePopup
        isOpen={isModalOpen}
        image={pdfthumbnail}
        closeModal={handleCloseModal}
        targetEvent={targetEventName}
        url={downloadLink}
      />
      <section className="categories-story-section" ref={sectionRef}>
        <div className="categories-story-section-content">
          <div className="categories-story-section-content-block">
            <div className="categories-cards" dir={lang === "ar" ? "rtl" : "ltr"}>
              <div
                onClick={() => {
                  triggerEvent(
                    "Eid_Corporate_Publications_2026_click",
                    "link_click",
                  );
                  setModalData(
                    ENV.EID_CORPORATE_PUBLICATIONS,
                    corporatePublicationThumbNail,
                    "Eid_Corporate_Publications_2026_download",
                  );
                }}
              >
                <img
                  src={corporatePublicationCardAr}
                  alt="Corporate Publication"
                />
              </div>
              <div
                onClick={() => {
                  triggerEvent(
                    "Eid_Home_Publications_2026_click",
                    "link_click",
                  );
                  setModalData(
                    ENV.EID_HOME_PUBLICATIONS,
                    homePublicationCardThumbNail,
                    "Eid_Home_Publications_2026_download",
                  );
                }}
              >
                <img src={homePublicationCardAr} alt="Home Publication" />
              </div>
              <div
                onClick={() => {
                  triggerEvent("Eid_Greeting_Cards_2026_click", "link_click");
                  setModalData(
                    ENV.EID_GREETING_CARDS,
                    greetingCardThumbNail,
                    "Eid_Greeting_Cards_2026_download",
                  );
                }}
              >
                <img src={greetingCardAr} alt="Greeting Cards" />
              </div>
              <div
                onClick={() => {
                  triggerEvent("Eid_Activity_Booklet_2026_click", "link_click");
                  setModalData(
                    ENV.EID_ACTIVITY_BOOKLET,
                    eidActivityBookletThumbNail,
                    "Eid_Activity_Booklet_2026_download",
                  );
                }}
              >
                <img src={eidActivityBookletAr} alt="Eid Activity Booklet" />
              </div>
            </div>

            <div className="layer sweetbowl-1">
              <Parallax speed={3} translateY={[0, 50]} rotate={[0, 15]}>
                <img src={sweetBowl} alt="" />
              </Parallax>
            </div>
            <div className="layer sweetbowl-2">
              <Parallax speed={2} translateY={[0, 30]} rotate={[0, -10]}>
                <img src={sweetBowl} alt="" />
              </Parallax>
            </div>
            <div className="layer sweetbowl-3">
              <Parallax speed={4} translateY={[0, 10]} rotate={[0, 20]}>
                <img src={sweetBowl} alt="" />
              </Parallax>
            </div>
            <div className="layer sweetbowl-4">
              <Parallax speed={2} translateY={[0, 10]} rotate={[0, -15]}>
                <img src={sweetBowl} alt="" />
              </Parallax>
            </div>
            <div className="layer sweetbowl-5">
              <Parallax speed={3} translateY={[0, 10]} rotate={[0, 15]}>
                <img src={sweetBowl} alt="" />
              </Parallax>
            </div>

            <img
              src={eldiyahMessage}
              alt="Eldiyah Message"
              className="layer eldiyah-message"
            />

            <div className="layer music-note">
              <Parallax speed={2} rotate={[0, -8]}>
                <img src={musicNote} alt="" />
              </Parallax>
            </div>

            <div className="layer half-note">
              <Parallax speed={2} translateY={[14, -7]}>
                <img src={halfNote} alt="" />
              </Parallax>
            </div>

            <div className="layer oud">
              <Parallax speed={10} translateY={[10, 0]} translateX={[0, 10]}>
                <img src={oud} alt="" />
              </Parallax>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
