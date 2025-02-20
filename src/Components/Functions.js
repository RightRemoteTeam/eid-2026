import React from "react";
//import { useTranslation } from 'react-i18next';
//import { useModal } from './ModalContext';
import { GoogleAnalytics } from "./GoogleAnalytics";
import playIcon from "./../assets/images/icons/play-audio.png";
import pauseIcon from "./../assets/images/icons/pause-audio.png";

export const ToggleThemeButton = ({ theme, toggleTheme }) => {
  const isDarkMode = theme === "dark-mode";
  //const icon = isDarkMode ? moonIcon : sunIcon;

  return (
    <div className={`toggle-button ${theme}`} onClick={toggleTheme}>
      <img src={""} className="icon" alt="Toggle icon" />
    </div>
  );
};

export const AudioToggleButton = ({ audioEnabled, setAudioEnabled }) => {
  //const { t } = useTranslation();
  //const { openModal } = useModal();
  const { trackEvent } = GoogleAnalytics();

  const triggerAudioEvent = (event_label, event_category) => {
    trackEvent({
      action: "click",
      category: event_category,
      label: event_label,
      value: 1,
    });
  };

  const playAudio = async () => {
    try {
      // let stream =await navigator.mediaDevices.getUserMedia({ audio: true });
      // setAudioEnabled(stream.active);
      setAudioEnabled(true);
      triggerAudioEvent("play", "app_audio");
    } catch (err) {
      setAudioEnabled(false);
      triggerAudioEvent("pause", "app_audio");
      //openModal(t('modal.audio_permission_error'));
    }
  };

  const pauseAudio = async () => {
    setAudioEnabled(false);
    triggerAudioEvent("pause", "app_audio");
  };

  return (
    <div className="switch-container">
      <button
        className="switch-button"
        onClick={pauseAudio}
        disabled={!audioEnabled}
      >
        <img src={pauseIcon} alt="Pause audio" />
      </button>
      <button
        className="switch-button"
        onClick={playAudio}
        disabled={audioEnabled}
      >
        <img src={playIcon} alt="Play audio" />
      </button>
    </div>
  );
};
export const checkLang = (i18n, lang) => {
  if (lang === "en") {
    i18n.changeLanguage("en");
    document.body.classList.remove("rtl");
  } else if (lang === "ar") {
    i18n.changeLanguage("ar");
    document.body.classList.add("rtl");
  } else {
    i18n.changeLanguage("ar");
    document.body.classList.add("rtl");
  }
};
export const changeMeta = (lang, title, description) => {
  if (lang === "en") {
    document.body.classList.remove("rtl");
    document.title = title;
    document.querySelector('meta[name="title"]').setAttribute("content", title);
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", description);
  } else if (lang === "ar") {
    document.body.classList.add("rtl");
  } else {
    document.body.classList.add("rtl");
  }
};
