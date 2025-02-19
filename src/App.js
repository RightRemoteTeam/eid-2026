import { useEffect, useState } from "react";
import "./assets/SCSS/main.scss";
import { Outlet, useParams, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"
import { checkLang } from "./Components/Functions";
import { useTranslation } from "react-i18next";
import { useTheme } from "./Components/ThemeContext";
import ReactGA from 'react-ga4';
import { GoogleAnalytics } from "./Components/GoogleAnalytics";
import ENV from "./Components/Constants";

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

  function initializeGA() {
    if (!initialized) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
      initialized = true;
    }
  }
  useEffect(() => {
    initializeGA();
  }, []);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location, trackPageView]);

  useEffect(() => {
    let timeout;
  
    const checkIfImagesLoaded = () => {
      requestAnimationFrame(() => {
        const images = document.querySelectorAll("img"); // Get all images after DOM update
        let loadedImages = 0;
        let totalImages = images.length;
    
        if (totalImages === 0) {
          console.warn("No images found. Forcing page load.");
          setPageLoaded(true);
          return;
        }
  
        const imageLoaded = () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            clearTimeout(timeout);
            console.log("All images loaded!");
            setPageLoaded(true);
          }
        };
  
        images.forEach((img) => {
          if (img.complete) {
            imageLoaded();
          } else {
            imageLoaded();
            img.addEventListener("load", imageLoaded);
            img.addEventListener("error", imageLoaded);
          }
        });
  
        // Fallback in case images fail to load
        timeout = setTimeout(() => {
          console.warn("Forcing loader to hide after timeout.");
          setPageLoaded(true);
        }, 5000);
      });
    };
  
    setTimeout(() => checkIfImagesLoaded(), 300); // Delay execution slightly to ensure React has rendered
  
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!pageLoaded) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = ""; // Restore scroll
    }
  
    return () => {
      document.body.style.overflow = ""; // Cleanup in case of unmount
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
      {!pageLoaded &&
        <div className={`preLoader ${pageLoaded ? "hidden" : "visible"}`}>
          <div className="spinner"></div>
        </div>
      }
      <div
        className={`wrapper ${theme} ${lang === "en" ? "ltr" : "rtl"} ${pageLoaded ? "visible" : "invisible"
          }`}
      >
        <Navbar
          audioEnabled={audioEnabled}
          setAudioEnabled={setAudioEnabled}
        />
        <Outlet context={[audioEnabled, setAudioEnabled, pageLoaded, setPageLoaded]} />
        <Footer />
      </div>
    </>
  );
}

export default App;
