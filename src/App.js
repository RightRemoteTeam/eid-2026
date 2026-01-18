import { useEffect, useState } from "react";
import "./assets/SCSS/main.scss";
import { Outlet, useParams, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { checkLang } from "./Components/Functions";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga4";
import { GoogleAnalytics } from "./Components/GoogleAnalytics";
import ENV from "./Components/Constants";
import { useParallaxController } from "react-scroll-parallax";

function App() {
  const GA_MEASUREMENT_ID = ENV.GA;
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const [pageLoaded, setPageLoaded] = useState(false);
  const location = useLocation();
  const { trackPageView } = GoogleAnalytics();
  const parallaxController = useParallaxController();

  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }, [GA_MEASUREMENT_ID]);

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location, trackPageView]);

  useEffect(() => {
    let timeout;

    const checkIfImagesLoaded = () => {
      requestAnimationFrame(() => {
        const images = document.querySelectorAll("img");
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
            parallaxController.update();
          }
        };

        images.forEach((img) => {
          if (img.complete) {
            imageLoaded();
          } else {
            img.addEventListener("load", imageLoaded);
            img.addEventListener("error", imageLoaded);
          }
        });
      });
    };

    setTimeout(() => checkIfImagesLoaded(), 300);

    return () => clearTimeout(timeout);
  }, [parallaxController]);

  useEffect(() => {
    if (!pageLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [pageLoaded]);

  useEffect(() => {
    checkLang(i18n, lang);
  }, [lang, i18n]);

  return (
    <>
      {!pageLoaded && (
        <div className={`preLoader ${pageLoaded ? "hidden" : "visible"}`}>
          <img src="/loader/Loading.png" alt="Loading" className="loader-image" />
        </div>
      )}
      <div
        className={`wrapper ${lang === "en" ? "ltr" : "rtl"} ${
          pageLoaded ? "visible" : "invisible"
        }`}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
