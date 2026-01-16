import eidEventsLogo from "../../assets/images/logos/eid-events-logo.png";
import geaLogo from "../../assets/images/logos/gea-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={eidEventsLogo} alt="فعاليات العيد" />
        </div>

        <div className="footer-divider"></div>

        <div className="footer-logo">
          <img src={geaLogo} alt="هيئة الترفيه" />
        </div>
      </div>
    </footer>
  );
}
