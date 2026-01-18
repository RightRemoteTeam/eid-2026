import React from "react";
import { Parallax } from "react-scroll-parallax";
import { useParams } from "react-router-dom";

// Assets from icons
import bowl from "../../assets/images/icons/bowl.svg";
import oud from "../../assets/images/icons/oud.svg";
import musicnote3 from "../../assets/images/icons/musicnote3.svg";
import giantwheel from "../../assets/images/icons/giantwheel.svg";
import diamonds from "../../assets/images/icons/diamonds.svg";
import enjoy from "../../assets/images/icons/enjoy.svg";

// Assets from cards
import badge4 from "../../assets/images/cards/badge4.svg";
import badge4_en from "../../assets/images/cards/badge4_en.svg";

import btn3 from "../../assets/images/cards/BTN_3.svg";
import btn3en from "../../assets/images/cards/BTN_3_en.svg";

export default function EidActivitiesSection() {
  const { lang } = useParams();
  return (
      <section className="eid-activities-section">
        <div className="eid-activities-content">
          {/* Top Badge with Bowl */}
          <div className="top-elements">
            <Parallax speed={2} className="layer bowl-element">
              <img src={bowl} alt="Bowl" />
            </Parallax>
            <img src={(lang ==="ar") ? badge4 : badge4_en} alt="Badge" className="badge-element" />
          </div>

          {/* Left Side - Oud and Music Note */}
          <Parallax speed={-2} className="layer oud-element">
            <img src={oud} alt="Oud" />
          </Parallax>
          <Parallax speed={3} className="layer musicnote-element">
            <img src={musicnote3} alt="Music Note" />
          </Parallax>

          {/* Right Side - Giant Wheel */}
          <Parallax speed={-2} className="layer giantwheel-element">
            <img src={giantwheel} alt="Giant Wheel" />
          </Parallax>

          {/* Center Content */}
          <div className="center-content">
            {lang === "en" ? (
              <p className="activities-text">
                After the Eid food coma,<br />the excitement is revived and<br />the energy of Eid returns, and now…<br />you need something to make<br />your happiness even greater.<br />Where do we go, what should we do?<br />Come join the Eid activities,<br />and the joy will multiply!
              </p>
            ) : (
              <p className="activities-text">
                وبعد غيبوبة العيد يتجدد الحماس وتجيك
                <br />
                طاقة العيد، وهنا.. يبيلك شي لفرحتك يزيد..
                <br />
                وين نروح وش نسوي؟
              </p>
            )}
            
            {/* Button with Diamonds */}
            <div className="button-diamonds">
              <img src={diamonds} alt="Diamonds" className="diamonds-left" />
              <a href="https://enjoy.sa/en/" target="_blank" rel="noopener noreferrer" className="activities-btn">
                <img src={lang === "en" ? btn3en : btn3} alt="اكتشف فعاليات العيد" />
              </a>
              <img src={diamonds} alt="Diamonds" className="diamonds-right" />
            </div>

            {/* Enjoy Logo */}
            <div className="enjoy-logo">
              <img src={enjoy} alt="Enjoy Saudi" />
            </div>
          </div>
        </div>
      </section>

  );
}
