import React, { useEffect, useState } from "react";
import {
  useLocation,
  Link,
  useParams,
  useOutletContext,
} from "react-router-dom";
import facebook from "../assets/images/icons/facebook.svg";
import x from "../assets/images/icons/twitter.svg";
import whatsapp from "../assets/images/icons/whatsapp.svg";
import { useTranslation } from "react-i18next";
import ENV from "../Components/Constants";
import { saveAs } from "file-saver";
import { GoogleAnalytics } from "../Components/GoogleAnalytics";
//import { useNavigate } from "react-router-dom";

export default function Preview() {
  //const navigate = useNavigate();
  const { t } = useTranslation();
  const location = useLocation();
  const { lang } = useParams();
  const [pageLoaded, setPageLoaded] = useOutletContext();
  const { card, name, message } = location.state || {};
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [shareUrl, setShareUrl] = useState(null);
  const [filename, setFilename] = useState(card + ".png");
  const { trackEvent } = GoogleAnalytics();
  const triggerEvent = (event_label, event_category) => {
    console.log("event_label:", event_label);
    trackEvent({
      action: "click",
      category: event_category,
      label: event_label,
      value: 1,
    });
  };

  useEffect(() => {
    console.log("Generating preview for card:", card);

    setPageLoaded(false);
    setImage(`${ENV.APP_URL}/api/cards/dark-mode.jpeg`);
    setError(null);
    try {
      fetch(`${ENV.PHP_SERVER}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          card: card,
          message: message,
        }),
      })
        .then((response) => {
          console.log("Response received from server.",response);
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Network response was not ok.");
          }
        })
        .then((data) => {
          if (data.error) {
            setError(data.error);
            // navigate('/');
          } else {
            setImage(`${data.image}`);
            setShareUrl(`${ENV.APP_URL}/api/share.php?id=${data.time}`);
            setFilename(`${data.time}.png`);
            setError(null);
            setPageLoaded(true);
          }
        })
        .catch((error) => {
          setError(error);
          // navigate('/');
        });
    } catch (error) {
      setPageLoaded(true);
      setError(error.message);
      // navigate('/');
    } finally {
      setPageLoaded(true);
    }
  }, []);

  const shareOnFacebook = () => {
    if (error == null) {
      const SCL_shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`;
      window.open(SCL_shareUrl, "_blank");
    }
  };

  const shareOnTwitter = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      `${shareUrl}`
    )}`;
    window.open(tweetUrl, "_blank");
  };
  const shareOnWhatsApp = () => {
    const wtsappUrl = `https://wa.me/?text=${encodeURIComponent(
      `${shareUrl}`
    )}`;
    window.open(wtsappUrl, "_blank");
  };

  const download = () => {
    triggerEvent("Eid_greeting_download_2026", "link_click");
    saveAs(image, filename);
  };

  return (
    <section className="preview-card-container">
      <div className="card" id="card">
        <img src={`${image}`} width="100%" alt="Eid Mubarak Card" />
      </div>
      <div className="social-and-buttons">
        <div className="social-icons">
          <img onClick={shareOnFacebook} src={facebook} alt="facebook" />

          <img onClick={shareOnTwitter} src={x} alt="twitter" />

          <img onClick={shareOnWhatsApp} src={whatsapp} alt="whatsapp" />
        </div>

        <div className="buttons">
          <Link
            to={`/${lang}/greetings`}
            className="btn btn-primary download-btn"
            onClick={() => {
              triggerEvent("Eid_greetings_2026", "link_click");
            }}
          >
            {t("Preview.edit")}
          </Link>
          <button onClick={download} type="button">
            {t("Preview.download")}
          </button>
        </div>
      </div>
    </section>
  );
}
