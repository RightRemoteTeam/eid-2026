import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { useParams } from "react-router-dom";

import "../../assets/SCSS/Home/buttonSection.scss";
import { Parallax } from "react-scroll-parallax";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import buttonStarImage from "../../assets/images/buttonStarImage.png";
import ENV from "../Constants";
import { GoogleAnalytics } from "../GoogleAnalytics";
import DownloadFilePopup from "./DownloadPopup";
import greetingElement01 from "../../assets/images/greetingElement01.png";
import bookletElement01 from "../../assets/images/bookletElement01.png";
import HouseThumbnail from "../../assets/images/house_thumb.png";
import CompanyThumbnail from "../../assets/images/companies_thumb.png";

gsap.registerPlugin(ScrollTrigger);

export default function ButtonSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfthumbnail, setPdfthumbnail] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [targetEventName, setTargetEventName] = useState("");
  const { lang } = useParams();
  const animPlayed = useRef(false);
  const sectionRef = useRef(null);
  const { trackEvent } = GoogleAnalytics();
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
    gsap.to([".buttonStars"], {
      scale: 1.2,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  };
  const { t } = useTranslation();
  const triggerEvent = (event_label, event_category) => {
    console.log("event_label:", event_label);
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
  return (
    <>
      <DownloadFilePopup
        isOpen={isModalOpen}
        image={pdfthumbnail}
        closeModal={handleCloseModal}
        targetEvent={targetEventName}
        url={downloadLink}
      />
      <section ref={sectionRef} className="ButtonSection Buttontranslate">
        <div className="ButtonContainer">
          <div className="buttonsectionWrap">
            {/* <a
              onClick={() => triggerEvent("Eid_Events_2024", "link_click")}
              href={`${ENV.EID_EVENT}${lang}`}
              target="_blank"
              disabled
              className="btn btn-primary"
              dangerouslySetInnerHTML={{ __html: t("Buttontranslate.title4") }}
              rel="noreferrer"
            /> */}
            <a
              onClick={
                () => {
                  triggerEvent("Booklet_2024_click", "link_click")
                  setModalData(
                    ENV.BOOKLET,
                    bookletElement01,
                    "Booklet_2024"
                  );
              }}
              className="btn btn-primary"
              dangerouslySetInnerHTML={{ __html: t("Buttontranslate.title4") }}
            />
            <button
              onClick={() => {
                triggerEvent("Greeting_Cards_2024_click", "link_click");
                setModalData(
                  ENV.GREETING_CARD,
                  greetingElement01,
                  "Greeting_Cards_2024"
                );
              }}
              href={ENV.GREETING_CARD}
              download
              className="btn btn-primary"
              dangerouslySetInnerHTML={{ __html: t("Buttontranslate.title2") }}
            />
            <button
              onClick={() => {
                triggerEvent("House_Decorations_2024_click", "link_click");
                setModalData(
                  ENV.HOUSE_DECORATION_HORIZANTAL,
                  HouseThumbnail,
                  "Houses_Decorations_2024"
                );
              }}
              className="btn btn-primary"
              dangerouslySetInnerHTML={{ __html: t("Buttontranslate.title1") }}
            />
            <button
              onClick={() => {
                triggerEvent("Office_Decorations_2024_click", "link_click");
                setModalData(
                  ENV.COMPANY_DECORATION_HORIZANTAL,
                  CompanyThumbnail,
                  "Companies_Decorations_2024"
                );
              }}
              className="btn btn-primary"
              dangerouslySetInnerHTML={{ __html: t("Buttontranslate.title5") }}
            />
          </div>
        </div>
        <div className="button-element-star">
          <div className="button-star">
            <Parallax speed={10}>
              <img
                src={buttonStarImage}
                className=" buttonStars img-fit"
                alt=""
              />
            </Parallax>
          </div>
        </div>
      </section>
    </>
  );
}
