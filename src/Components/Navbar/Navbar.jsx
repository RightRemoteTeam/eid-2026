import React, { useState } from 'react';
import logo from "../../assets/images/EGA_Logo_ar.png"
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import headeroverlay from "../../assets/images/img01.png";
import nightOverlay from "../../assets/images/nightOverlay.png";
import { ToggleThemeButton, AudioToggleButton } from "../Functions";
import ENV from "../Constants";
import { useTheme } from '../ThemeContext';


export default function Navbar({audioEnabled,setAudioEnabled}) {
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
    };
  return (
    <>
        <nav className={`navbar ${theme}`}>
            <div className="navbar-container">
                <div className='headerLeft'>
                    <div className="navbar-language">
                        <div className="language-switcher">
                            <div className="language-options">
                                <span onClick={handleLangChange}>{t("header.language")}</span>
                            </div>
                        </div>
                    </div>
                
                    <div className='switchOnOff'>
                        <AudioToggleButton audioEnabled={audioEnabled} setAudioEnabled={setAudioEnabled} />
                    </div>
                </div>
                <div className="navbar-logo">
                    <div className="logo-box">
                        <a href='/'><img src={logo} alt="" /></a>
                    </div>
                    <div className="corner top-right"></div>
                    <div className="corner top-left"></div>
                </div>
                {/* <div className="hamburger-menu">
                    <div className="hamburger-icon">
                        <span className="icon-line"></span>
                        <span className="icon-line"></span>
                        <span className="icon-line"></span>
                    </div>
                </div> */}
                <div className='headerRight'>
                    <div className='visibleMode'>
                        <ToggleThemeButton theme={theme} toggleTheme={toggleTheme} />
                    </div>
                    <div className='eidEvents'>
                        <a href={ENV.EID_EVENT} target='blank'>Eid Events</a>
                    </div>

                </div>
            </div>
            <div className='overlayHeader HeaderCommon'><img src={headeroverlay} alt="" /></div>
            <div className='overlayHeaderNight HeaderCommon'><img src={nightOverlay} alt="" /></div>
        </nav>
    </>
  )
}
