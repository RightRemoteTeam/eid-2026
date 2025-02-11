import React  from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import FooterLogoone from "../../assets/images/EGA_Logo.png";
import FooterLogotwo from "../../assets/images/EGA_Logo_ar.png";
import footerPinkOverlay from "../../assets/images/footerPink.png";
import footerGreenOverlay from "../../assets/images/footerGreen.png";
import footerOrangeOverlay from "../../assets/images/footerOrange.png";
import { Parallax } from "react-scroll-parallax";
import { useTheme } from '../ThemeContext';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();

  const handleLangChange = () => {
      const currentLanguage = i18n.language;
      const newLanguage = currentLanguage === "en" ? "ar" : "en";
      const newPath = location.pathname.replace(currentLanguage, newLanguage);
      navigate({
        pathname: newPath,
        search: location.search, // Preserve existing query parameters
      });
      i18n.changeLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
    }

    


    return (
      <>
          <footer className={`footerMain ${theme}`}>
              <div className='footerContainer'>
                <div className='btnWrap'>
                  <a className="btn btn-primary download-btn" href="/en">
                    {t("footerMain.btn")}
                  </a>
                </div>
                <div className='footerLogo'>
                  <a href='#'> <Parallax  speed={5}><img src={FooterLogotwo} alt="" /></Parallax></a>
                  <a href='#'><Parallax  speed={5}><img src={FooterLogoone} alt="" /></Parallax></a>
                </div>
                <div className='footerLogo'>
                  <a href='#'> <Parallax  speed={5}><img src={FooterLogotwo} alt="" /></Parallax></a>
                  <a href='#'><Parallax  speed={5}><img src={FooterLogoone} alt="" /></Parallax></a>
                </div>
                <div className='overlayFooter'>
                  <div className='overlayFooterGreen'><img src={footerGreenOverlay} alt="" /></div>
                  <div className='overlayFooterYellow'><img src={footerOrangeOverlay} alt="" /></div>
                  <div className='overlayFooterRed'><img src={footerPinkOverlay} alt="" /></div>
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
    )
}
