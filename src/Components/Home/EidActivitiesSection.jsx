import React from "react";
import { Parallax } from "react-scroll-parallax";

// Assets from icons
import bowl from "../../assets/images/icons/bowl.svg";
import oud from "../../assets/images/icons/oud.svg";
import musicnote3 from "../../assets/images/icons/musicnote3.svg";
import giantwheel from "../../assets/images/icons/giantwheel.svg";
import diamonds from "../../assets/images/icons/diamonds.svg";
import enjoy from "../../assets/images/icons/enjoy.svg";

// Assets from cards
import badge4 from "../../assets/images/cards/badge4.svg";
import btn3 from "../../assets/images/cards/BTN_3.svg";

export default function EidActivitiesSection() {
  return (
    <section className="eid-activities-section">
      <div className="eid-activities-content">
        {/* Top Badge with Bowl */}
        <div className="top-elements">
          <Parallax speed={2} className="layer bowl-element">
            <img src={bowl} alt="Bowl" />
          </Parallax>
          <img src={badge4} alt="Badge" className="badge-element" />
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
          <p className="activities-text">
            وبعد غيبوبة العيد يتجدد الحماس وتجيك
            <br />
            طاقة العيد، وهنا.. يبيلك شي لفرحتك يزيد..
            <br />
            وين نروح وش نسوي؟
          </p>

          {/* Button with Diamonds */}
          <div className="button-diamonds">
            <img src={diamonds} alt="Diamonds" className="diamonds-left" />
            <img src={btn3} alt="اكتشف فعاليات العيد" className="activities-btn" />
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
