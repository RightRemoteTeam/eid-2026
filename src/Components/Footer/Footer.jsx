import eidEventsLogo from "../../assets/images/logos/eid-events-logo.png";
import geaLogo from "../../assets/images/logos/gea-logo.png";

export default function Footer() {
  return (
    <>
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

      <div
        style={{
          padding: "30px",
          backgroundColor: "#8a59c8",
          // backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="re-edited-box-icon"
          style={{
            backgroundColor: "#8a59c8",
            // backgroundColor: "#ffffff",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="https://raqmi.dga.gov.sa/platforms/platforms/6cf4b27f-d4d8-4706-a82d-6e922ddfd9e4/platform-license"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <img
              src="https://raqmi.dga.gov.sa/PlatformsApi/api/Attachments/9e4271bc-8229-4bb3-9ad0-b1b000de9ec4"
              alt="Footer Logo"
              className="saudi-logo"
              style={{
                display: "flex",
                flex: 1,
                maxHeight: "125px",
              }}
            />
          </a>
        </div>
      </div>
    </>
  );
}
