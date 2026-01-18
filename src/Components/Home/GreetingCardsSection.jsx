import { Parallax } from "react-scroll-parallax";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ENV from "../Constants";
import { GoogleAnalytics } from "../GoogleAnalytics";
import DownloadFilePopup from "./DownloadPopup";
import { Link } from "react-router-dom";

// Assets
import dallah from "../../assets/images/icons/dallah.svg";
import dallah2 from "../../assets/images/icons/dallah2.svg";
import greencard from "../../assets/images/cards/greencard.png";
import orangecard from "../../assets/images/cards/orangecard.png";
import btn1 from "../../assets/images/cards/BTN_1.svg";
import btn2 from "../../assets/images/cards/BTN_2.svg";

import pdfThumbnail_greetingcards from "../../assets/images/downloadable/pdfThumbnail_greetingcards.png";


export default function GreetingCardsSection() {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pdfthumbnail, setPdfthumbnail] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [targetEventName, setTargetEventName] = useState("");
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

  return (
    <>
      <DownloadFilePopup
        isOpen={isModalOpen}
        image={pdfthumbnail}
        closeModal={handleCloseModal}
        targetEvent={targetEventName}
        url={downloadLink}
      />
      <section className="greeting-cards-section">
        <div className="greeting-cards-content">
          {/* Left Dallah */}
          <Parallax speed={-2} className="layer dallah-left">
            <img src={dallah2} alt="Dallah" />
          </Parallax>

          {/* Right Dallah */}
          <Parallax speed={-2} className="layer dallah-right">
            <img src={dallah} alt="Dallah" />
          </Parallax>

          {/* Cards and Buttons Wrapper */}
          <div className="cards-buttons-wrapper">
            {/* Cards Row */}
            <div className="cards-container">
              <div className="card-wrapper">
                <img src={greencard} alt="Green Card" className="card green-card" />
              </div>
              <div className="card-wrapper">
                <img src={orangecard} alt="Orange Card" className="card orange-card" />
              </div>
            </div>

            {/* Buttons Row */}
            <div className="buttons-row">
              <Link to={`/${lang}/greetings`} className="card-btn btn-1" onClick={triggerEvent("Eid_greetings_2026", "link_click")}>
                <img src={btn1} alt="أضف معايدتك وشاركها" />
              </Link>
              { lang === 'ar' ? 
                  <p className="cards-text">
                    تحميل بطاقات المعايدة
                    <br />
                    لتشارك الفرح مع أحبائك
                  </p>
                :
                  <p className="cards-text">
                  Download greeting cards<br />To share the joy with your loved ones
                  </p>
              }

              <button onClick={() => {
                triggerEvent("Your_Greetings_2026", "link_click");
                setModalData(
                  ENV.EID_GREETING_CARDS,
                  pdfThumbnail_greetingcards
                );
              }} className="card-btn btn-2">
                <img src={btn2} alt="بطاقة معايدتك" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
