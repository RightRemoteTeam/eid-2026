import React from "react";
import { Parallax } from "react-scroll-parallax";

// Assets
import dallah from "../../assets/images/icons/dallah.svg";
import dallah2 from "../../assets/images/icons/dallah2.svg";
import greencard from "../../assets/images/cards/greencard.svg";
import orangecard from "../../assets/images/cards/orangecard.svg";
import btn1 from "../../assets/images/cards/BTN_1.svg";
import btn2 from "../../assets/images/cards/BTN_2.svg";

export default function GreetingCardsSection() {
  return (
    <section className="greeting-cards-section">
      <div className="greeting-cards-content">
        {/* Left Dallah */}
        <Parallax speed={-5} className="layer dallah-left">
          <img src={dallah2} alt="Dallah" />
        </Parallax>

        {/* Right Dallah */}
        <Parallax speed={-5} className="layer dallah-right">
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
            <img src={btn1} alt="أضف معايدتك وشاركها" className="card-btn btn-1" />
            <p className="cards-text">
              تحميل بطاقات المعايدة
              <br />
              لتشارك الفرح مع أحبائك
            </p>
            <img src={btn2} alt="بطاقة معايدتك" className="card-btn btn-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
