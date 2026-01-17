export const checkLang = (i18n, lang) => {
  if (lang === "en") {
    i18n.changeLanguage("en");
    document.body.classList.remove("rtl");
    document.documentElement.setAttribute("lang", "en");
  } else if (lang === "ar") {
    i18n.changeLanguage("ar");
    document.body.classList.add("rtl");
    document.documentElement.setAttribute("lang", "ar");
  } else {
    i18n.changeLanguage("ar");
    document.body.classList.add("rtl");
    document.documentElement.setAttribute("lang", "ar");
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
