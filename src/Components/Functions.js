import React from "react";

export const ToggleThemeButton = ({ theme, toggleTheme }) => {
  const isDarkMode = theme === "dark-mode";

  return (
    <div className={`toggle-button ${theme}`} onClick={toggleTheme}>
      <img src={""} className="icon" alt="Toggle icon" />
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
