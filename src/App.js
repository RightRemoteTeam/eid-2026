import { useEffect, useState } from "react";
import "./assets/SCSS/main.scss";
import { Outlet, useParams, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { checkLang } from "./Components/Functions";
import { useTranslation } from "react-i18next";
import { useTheme } from "./Components/ThemeContext";
import ReactGA from "react-ga4";
import { GoogleAnalytics } from "./Components/GoogleAnalytics";
import ENV from "./Components/Constants";
import { useParallaxController } from "react-scroll-parallax";

function App() {
  const GA_MEASUREMENT_ID = ENV.GA;
  let initialized = false;
  const { theme } = useTheme();
  const { i18n, t } = useTranslation();
  const { lang } = useParams();
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const location = useLocation();
  const { trackPageView } = GoogleAnalytics();
  const parallaxController = useParallaxController();

  function initializeGA() {
    if (!initialized) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      initialized = true;
    }
  }

  const forceRepaint = () => {
    document.body.style.display = "none";
    void document.body.offsetHeight;
    document.body.style.display = "";

    console.log("Forcing a browser repaint...");
  };

  useEffect(() => {
    initializeGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location, trackPageView]);

  useEffect(() => {
    const handleLoad = () => {
      forceRepaint();
      parallaxController.update();
      setPageLoaded(true);
    };
    if (document.readyState === "complete") {
      forceRepaint();
      parallaxController.update();
      setPageLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, [pageLoaded]);

  useEffect(() => {
    checkLang(i18n, lang);
    // document.title = t("meta.title");
    // document
    //   .querySelector('meta[name="title"]')
    //   .setAttribute("content", t("meta.title"));
    // document
    //   .querySelector('meta[name="description"]')
    //   .setAttribute("content", t("meta.description"));
  }, [lang]);

  return (
    <>
      {!pageLoaded && (
        <div className={`preLoader ${pageLoaded ? "hidden" : "visible"}`}>
          <div className="spinner"></div>
        </div>
      )}
      <div
        className={`wrapper ${theme} ${lang === "en" ? "ltr" : "rtl"} ${
          pageLoaded ? "visible" : "invisible"
        }`}
      >
        <Navbar audioEnabled={audioEnabled} setAudioEnabled={setAudioEnabled} />
        <Outlet
          context={[audioEnabled, setAudioEnabled, pageLoaded, setPageLoaded]}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
