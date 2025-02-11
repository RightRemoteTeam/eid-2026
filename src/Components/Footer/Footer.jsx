import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, Link, useParams } from "react-router-dom";
import FooterLogoone from "../../assets/images/footer/EGA_Logo.png";
import FooterLogotwo from "../../assets/images/nav/EGA_Logo_ar.png";
import FooterLogoDark from "../../assets/images/nav/EGA_Logo_ar_dark.png";
import footerPinkOverlay from "../../assets/images/footer/footerPink.png";
import footerGreenOverlay from "../../assets/images/footer/footerGreen.png";
import footerOrangeOverlay from "../../assets/images/footer/footerOrange.png";
import { Parallax } from "react-scroll-parallax";
import { useTheme } from "../ThemeContext";
import { GoogleAnalytics } from "../GoogleAnalytics";

export default function Footer() {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { trackEvent } = GoogleAnalytics();
  const [shareBtn, setShareBtn] = useState(false);
  const [greetingsPage, setGreetingsPage] = useState(false);

  const triggerEvent = (event_label, event_category) => {
    trackEvent({
      action: "click",
      category: event_category,
      label: event_label,
      value: 1,
    });
  };
  const handleLangChange = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    const newPath = location.pathname.replace(currentLanguage, newLanguage);
    navigate({
      pathname: newPath,
      search: location.search, // Preserve existing query parameters
    });
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    const pathname = location.pathname;

    const match = pathname.match(/^\/([^\/]+)\/(.+)$/);

    if (match) {
      const languageCode = match[1];
      const routeName = match[2];
      if (routeName == "share") {
        setShareBtn(true);
        setGreetingsPage(false);
      } else if (routeName == "greetings" || routeName == "preview") {
        setGreetingsPage(true);
        setShareBtn(false);
      } else{
        setGreetingsPage(false);
        setShareBtn(false);
      }
    }else{
      setGreetingsPage(false);
        setShareBtn(false);
    }
  }, [location.pathname]);

  return (
    <>
      <footer className={`footerMain ${theme}`}>
        <div className="footerContainer">
          <div className="btnWrap">
            {shareBtn ? (
              <Link
                onClick={() => {
                  triggerEvent("Create_Greetings_Card", "back_to_top");
                  window.scrollTo(0, 0);
                }}
                className="btn btn-primary download-btn"
                to={`/${lang}/greetings`}
              >
                {t("greetingSection.createbutton")}
              </Link>
            ) : !greetingsPage ? (
              <Link
                onClick={() => {
                  triggerEvent("Replay_The_Journey_2024", "back_to_top");
                  window.scrollTo(0, 0);
                }}
                className="btn btn-primary download-btn"
                to={`/${lang}`}
              >
                {t("footerMain.btn")}
              </Link>
            ): null}
          </div>
          <div className="footerLogo">
            <Link to="#">
              {" "}
              <Parallax speed={5}>
                <img className="footerLight" src={FooterLogotwo} alt="" />
                <img className="footerDark" src={FooterLogoDark} alt="" />
              </Parallax>
            </Link>
            <Link to="#">
              <Parallax speed={5}>
                <img src={FooterLogoone} alt="" />
              </Parallax>
            </Link>
          </div>
          {/* 
                <div className='footerLogo'>
                  <a to='#'> <Parallax  speed={5}><img src={FooterLogotwo} alt="" /></Parallax></a>
                  <a to='#'><Parallax  speed={5}><img src={FooterLogoone} alt="" /></Parallax></a>
                </div>
    */}
          <div className="overlayFooter">
            <div className="overlayFooterGreen">
              <Parallax easing={"easeInOutCubic"} speed={10}>
                <img src={footerGreenOverlay} alt="" />
              </Parallax>
            </div>
            <Parallax easing={"easeInOutCubic"} speed={5}>
              <div className="overlayFooterYellow">
                <img src={footerOrangeOverlay} alt="" />
              </div>
            </Parallax>

            <div className="overlayFooterRed">
              <Parallax easing={"easeInOutCubic"} speed={5}>
                <img src={footerPinkOverlay} alt="" />
              </Parallax>
            </div>
          </div>
          {/* <div className='footerLink'>
                  <ul>
                    <li><a href='#'>{t("footerMain.menuone")}</a></li>
                    <li><a href='#'>{t("footerMain.menutwo")}</a></li>
                  </ul>

                </div> */}
        </div>
      </footer>
    </>
  );
}
