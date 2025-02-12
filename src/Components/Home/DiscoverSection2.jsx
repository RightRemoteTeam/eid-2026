import React, { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/SCSS/Home/discover2.scss";
import data from "../Locale/en-new.json";
import CartWheel from "../../assets/images/discover/cart-wheel.png";
import Cloud from "../../assets/images/discover/cloud.png";
import FireWorks from "../../assets/images/discover/fireworks.png";
import EnjoySaudi from "../../assets/images/discover/enjoy-saudi-logo.png";

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
            <Parallax
              translateX={[30, 10]}
              scale={[0.1, 1]}
              opacity={[0.3, 1]}
              speed={30}
            >
              <img src={FireWorks} alt="fireworks" />
            </Parallax>
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
      <div className="desc-container-2">
        <p className="section-desc-2">{data.discover.description2}</p>
        <div className="discover-events-container ">
          <button className="btn btn-primary">Discover our EID events</button>
          <div>
            <img src={EnjoySaudi} alt="Enjoy Saudi" />
          </div>
        </div>
      </div>
    </div>
  );
}
