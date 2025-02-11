import React, {useRef} from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import fb from "../assets/images/fb.png";
import x from "../assets/images/twitter.png";
import whatsapp from "../assets/images/wtsap.png";
import { useTranslation } from "react-i18next";
import ENV from "../Components/Constants";
import "../assets/SCSS/preview.scss"
import { useScreenshot,createFileName } from 'use-react-screenshot'
import html2canvas from "html2canvas";

export default function Preview() {

  const ref = useRef(null)
  const {t} = useTranslation();
  const location = useLocation();
  const { lang } = useParams();
  const queryParams = new URLSearchParams(location.search);
  const card = queryParams.get("card");
  const name = decodeURIComponent(queryParams.get("name") || "");
  const message = decodeURIComponent(queryParams.get("message") || "");
  const [image, takeScreenshot] = useScreenshot();
  // const getImage = () => takeScreenshot(ref.current).then(download)
  
 
  console.log('message:',message);
  // const download = (image, { name = "img", extension = "png" } = {}) => {
  //   console.log("download triggered");
  //   const a = document.createElement("a");
  //   a.href = image;
  //   a.download = createFileName(extension, name);
  //   a.click();
  // };
  const shareOnFacebook = () => {
    console.log("Share triggered");
    // getImage()
    // const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(ENV.SHARE_URL)}?card=${encodeURIComponent(card + 1)}&name=${encodeURIComponent(name)}&message=${encodeURIComponent(message)}`;
    // window.open(shareUrl, '_blank');
    html2canvas(ref.current).then(function (canvas) {
      const link = document.createElement("a");
      link.download = "test.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }

  const shareOnTwitter = () => {
    // getImage()
    const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(`${ENV.SHARE_URL}?card=${card + 1}&name=${name}&message=${message}`)}`;
    window.open(tweetUrl, '_blank');
  }

  return (
    <section className="preview-card-container">
      <div className="card" id="card" ref={ref} >
        <img
          src={`${process.env.PUBLIC_URL}/cards/g${+card + 1}.png`}
          width="100%"
          alt="Eid Mubarak Card"
        />
        <div className="centered-text ">
          <p className="name">{name}</p>
          <p className="message">{message}</p>
        </div>
      </div>
      <div className="social-and-buttons">
        <div className="social-icons">
          
            <img onClick={shareOnFacebook} src={fb} alt="fb" />
          
          
            <img onClick={shareOnTwitter} src={x} alt="twitter" />
          
          
            <img onClick={shareOnTwitter} src={whatsapp} alt="whatsapp" />
          
        </div>
        <div className="buttons">
          <Link
            to={`/${lang}/greetings`}
            className="btn btn-primary download-btn"
          >
            Back
          </Link>
          <button type="button">Download</button>
        </div>
      </div>
    </section>
  );
}
