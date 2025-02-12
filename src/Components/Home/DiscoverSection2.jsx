import React, { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/SCSS/Home/discover2.scss";
import data from "../Locale/en-new.json";
import CartWheel from "../../assets/images/discover/cart-wheel.png";
import Cloud from "../../assets/images/discover/cloud.png";
import FireWorks from "../../assets/images/discover/fireworks.png";
import { t } from "i18next";

// Register the ScrollTrigger plugin with gsap
gsap.registerPlugin(ScrollTrigger);

export default function DiscoverSection2() {
  return (
    <div className="discover-section-2">
      <div className="desc-container-1">
        <p className="section-desc-1">{data.discover.description1}</p>
      </div>
      <div className="discover-cartwheel-container">
        <div className="container-content">
          <div className="cartwheel-img">
            <img src={CartWheel} alt="cart wheel" />
          </div>
          <div className="cartwheel-cloud-img-1">
            <Parallax
              easing="easeInOutCubic"
              translateX={[20, 10]}
              translateY={[0, 0]}
              speed={10}
            >
              <img src={Cloud} alt="cloud" />
            </Parallax>
          </div>

          <div className="cartwheel-fireworks">
            <img src={FireWorks} alt="fireworks" />
          </div>
          <div className="cartwheel-cloud-img-2">
            <Parallax
              easing="easeInOutCubic"
              translateX={[10, 20]}
              translateY={[0, 0]}
              speed={15}
            >
              <img src={Cloud} alt="cloud" />
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  );
}
