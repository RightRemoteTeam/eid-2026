import React, { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../assets/SCSS/Home/discover2.scss";
import data from "../Locale/en-new.json";
import GiantWheel from "../../assets/images/discover/giant-wheel.svg";
import YellowCarpet from "../../assets/images/common/yellow-carpet.svg";
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
              scale={[0.5, 1]}
              opacity={[0.5, 1]}
              speed={5}
              className="fireworks-container"
            >
              <img src={FireWorks} alt="fireworks" />
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
