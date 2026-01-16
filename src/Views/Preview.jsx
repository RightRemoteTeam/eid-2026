import React, {useEffect, useState} from "react";
import { useLocation, Link, useParams, useOutletContext,useNavigate } from "react-router-dom";
import fb from "../assets/images/fb.png";
import x from "../assets/images/twitter.png";
import whatsapp from "../assets/images/wtsap.png";
import { useTranslation } from "react-i18next";
import ENV from "../Components/Constants";
import "../assets/SCSS/preview.scss"
import { saveAs } from 'file-saver'
import { useTheme } from "../Components/ThemeContext";
export default function Preview() {

  const { theme } = useTheme();
  const {t} = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const [pageLoaded,setPageLoaded] = useOutletContext();

  const { card, name } = location.state || {};
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [shareUrl, setShareUrl] = useState(null);
  const [filename, setFilename] = useState(card+'.png');


  useEffect(() => {
    setPageLoaded(false)
    console.log('theme:',theme);
    setImage(`${ENV.APP_URL}/cards/${theme}.jpeg`);
    setError(null);
    try {
      fetch(`${ENV.PHP_SERVER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        card: card
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then(data => {
      if (data.error) {
        setError(data.error);
        // navigate('/');
      }else{
        setImage(`${data.image}`);
        setShareUrl(`${ENV.APP_URL}/${lang}/share?id=${data.time}`);
        setFilename(`${data.time}.png`)
        setError(null);
        setPageLoaded(true)
      }
    })
    .catch(error => {
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
  }, [])
  
  const shareOnFacebook = () => {
    if (error == null) {
      const SCL_shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
      window.open(SCL_shareUrl, '_blank');
    }
  }

  const shareOnTwitter = () => {

    const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(`${shareUrl}`)}`;
    window.open(tweetUrl, '_blank');
  }
  const shareOnWhatsApp = () => {

    const wtsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareUrl}`)}`;
    window.open(wtsappUrl, '_blank');
  }

  const download = () => {
    
    saveAs(image, filename);
    
  }

  return (
    <section className="preview-card-container">
      <div className="card" id="card" >
        <img
          src={`${image}`}
          width="100%"
          alt="Eid Mubarak Card"
        />
        {/* <div className="centered-text ">
          <p className="name">{name}</p>
          <p className="message">{message}</p>
        </div> */}
      </div>
      <div className="social-and-buttons">
      {/*
        <div className="social-icons">
          
            <img onClick={shareOnFacebook} src={fb} alt="fb" />
          
          
            <img onClick={shareOnTwitter} src={x} alt="twitter" />
          
          
            <img onClick={shareOnWhatsApp} src={whatsapp} alt="whatsapp" />
          
        </div>
      */}
        <div className="buttons">
          <Link
            to={`/${lang}/greetings`}
            className="btn btn-primary download-btn"
          >
            {t('Preview.edit')}
          </Link>
          <button onClick={download} type="button">{t('Preview.download')}</button>
        </div>
      </div>
    </section>
  );
}
