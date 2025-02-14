import React from "react";
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/SCSS/Home/discoverSection.scss";
import data from "../Locale/en-new.json";
import GiantWheel from "../../assets/images/discover/giant-wheel.svg";
import YellowCarpet from "../../assets/images/common/yellow-carpet.svg";
import FireWorks from "../../assets/images/discover/fireworks.png";
import OrangeBalloon from "../../assets/images/common/orange-balloon.svg";
import GiftBox from "../../assets/images/common/gift-box.svg";
import EnjoySaudi from "../../assets/images/discover/enjoy-saudi-logo.png";

// Register the ScrollTrigger plugin with gsap
gsap.registerPlugin(ScrollTrigger);

export default function DiscoverSection() {
  return (
    <section className="discover-section">
      <div className="desc-container-1">
        <p className="section-desc-1">{data.discover.description1}</p>
      </div>
      <div className="discover-giantwheel-container">
        <div className="container-content">
          <div className="giantwheel-img">
            <Parallax translateX={[0, 8]} speed={10}>
              <img src={GiantWheel} alt="cart wheel" />
            </Parallax>
          </div>
          <div className="giantwheel-carpet">
            <Parallax speed={15}>
              <img src={YellowCarpet} alt="carpet" />
            </Parallax>
          </div>

          <div className="giantwheel-fireworks">
            <Parallax
              translateX={[0, 8]}
              scale={[0.2, 1]}
              opacity={[0.5, 1]}
              speed={5}
              className="fireworks-container"
            >
              <img src={FireWorks} alt="fireworks" />
            </Parallax>
          </div>
        </div>
      </div>

      <div className="discover-gift-container">
        <div className="container-content">
          <div className="balloon-img">
            <Parallax translateX={[10, 0]} speed={10}>
              <img src={OrangeBalloon} alt="cart wheel" />
            </Parallax>
          </div>
          <div className="giftbox-img">
            <Parallax speed={20}>
              <img src={GiftBox} alt="carpet" />
            </Parallax>
          </div>
        </div>
      </div>

      <div className="desc-container-2">
        <p className="section-desc-2">{data.discover.description2}</p>
        <div className="discover-events-container ">
          <button className="btn btn-primary">Discover our EID events</button>
          <div>
            <img src={EnjoySaudi} alt="Enjoy Saudi" />
          </div>
        </div>
      </div>
    </section>
  );
}
