import { Parallax } from "react-scroll-parallax";
import frameGreen from "../../assets/images/cards/frame-green.svg";

export default function TextFrameSection({ text, textColor = "text-green", decorations = [] }) {
  return (
    <section className="content-section">
      <div className="section-container">
        <div className="text-frame">
          <div className="frame-bg">
            <img src={frameGreen} alt="" />
          </div>
          <p className={`frame-text ${textColor}`}>{text}</p>
        </div>

        {/* Decorations */}
        {decorations.map((decoration, index) => (
          <Parallax
            key={index}
            speed={decoration.speed || 5}
            translateY={decoration.translateY || [0, -20]}
            className={`parallax-decoration ${decoration.className || ''}`}
            style={decoration.style || {}}
          >
            <img src={decoration.image} alt="" />
          </Parallax>
        ))}
      </div>
    </section>
  );
}
