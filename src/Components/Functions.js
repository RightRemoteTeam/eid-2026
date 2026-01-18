export const checkLang = (i18n, lang) => {
  if (lang === "en") {
    i18n.changeLanguage("en");
    document.body.classList.add("ltr");
    document.body.classList.remove("rtl");
    document.documentElement.setAttribute("lang", "en");
    document.documentElement.setAttribute("dir", "ltr");
  } else if (lang === "ar") {
    i18n.changeLanguage("ar");
    document.body.classList.add("rtl");
    document.body.classList.remove("ltr");
    document.documentElement.setAttribute("lang", "ar");
    document.documentElement.setAttribute("dir", "rtl");
  } else {
    i18n.changeLanguage("ar");
    document.body.classList.add("rtl");
    document.body.classList.remove("ltr");
    document.documentElement.setAttribute("lang", "ar");
    document.documentElement.setAttribute("dir", "rtl");
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
