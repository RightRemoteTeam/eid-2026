import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { GoogleAnalytics } from "../GoogleAnalytics";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const location = useLocation();
  const navigate = useNavigate();
  const { trackEvent } = GoogleAnalytics();
  const handleLangChange = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "ar" : "en";
    triggerLanguageEvent(newLanguage, "app_language");
    const newPath = location.pathname.replace(currentLanguage, newLanguage);
    navigate({
      pathname: newPath,
      search: location.search, // Preserve existing query parameters
    });
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    // Update HTML lang attribute
    document.documentElement.setAttribute("lang", newLanguage);
  };
  const triggerLanguageEvent = (event_label, event_category) => {
    trackEvent({
      action: "click",
      category: event_category,
      label: event_label,
      value: 1,
    });
  };
  return (
    <nav className="navbar">
      <div className={`language-switcher ${i18n.language === "en" ? "lang-en" : "lang-ar"}`}>
        <span onClick={handleLangChange}>{t("header.language")}</span>
      </div>
    </nav>
  );
}
