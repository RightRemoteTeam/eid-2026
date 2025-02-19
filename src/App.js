import { useEffect, useState } from "react";
import "./assets/SCSS/main.scss";
import { Outlet, useParams, useLocation  } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"
import { checkLang } from "./Components/Functions";
import { useTranslation } from "react-i18next";
import { useTheme } from "./Components/ThemeContext";
import ReactGA from 'react-ga4';
import {GoogleAnalytics} from "./Components/GoogleAnalytics";
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
    const handleAllImagesLoaded = () => {
      const images = document.querySelectorAll("img");
      let loadedImagesCount = 0;
      const totalImages = images.length;
  
      // If there are no images, mark page as loaded immediately.
      if (totalImages === 0) {
        setPageLoaded(true);
        return;
      }
  
      // Function to be called on each image load/error
      const onImageLoad = () => {
        loadedImagesCount++;
        if (loadedImagesCount === totalImages) {
          setPageLoaded(true);
        }
      };
  
      // Loop through images and attach event listeners if needed.
      images.forEach((img) => {
        if (img.complete) {
          // If image is already loaded, increment count.
          loadedImagesCount++;
        } else {
          // Otherwise, wait for it to load (or error).
          img.addEventListener("load", onImageLoad);
          img.addEventListener("error", onImageLoad);
        }
      });
  
      // In case all images were already loaded.
      if (loadedImagesCount === totalImages) {
        setPageLoaded(true);
      }
    };
  
    if (document.readyState === "complete") {
      // If the document is already complete, check images immediately.
      handleAllImagesLoaded();
    } else {
      // Otherwise, wait for the window load event which fires after all assets have been loaded.
      window.addEventListener("load", handleAllImagesLoaded);
    }
  
    // Cleanup the event listener on unmount.
    return () => window.removeEventListener("load", handleAllImagesLoaded);
  }, []);
  

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
      {!pageLoaded ? (
        <div className={`preLoader visible`}>
          <div className="spinner"></div>
        </div>
      ) : (
        <div
          className={`wrapper ${theme} ${lang === "en" ? "ltr" : "rtl"} ${
            pageLoaded ? "visible" : "invisible"
          }`}
        >
          <Navbar
            audioEnabled={audioEnabled}
            setAudioEnabled={setAudioEnabled}
          />
          <Outlet context={[audioEnabled, setAudioEnabled, pageLoaded, setPageLoaded]} />
          <Footer/>
        </div>
      )}
    </>
  );
}

export default App;
