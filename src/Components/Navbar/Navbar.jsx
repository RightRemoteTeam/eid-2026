import { useTranslation } from "react-i18next";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { GoogleAnalytics } from "../GoogleAnalytics";
import eidEventsLogo from "../../assets/images/logos/eid-events-logo.png";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();
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

  const handleLogoClick = () => {
    navigate(`/${lang}`);
  };

  return (
    <nav className="navbar">
      <div className={`language-switcher ${i18n.language === "en" ? "lang-en" : "lang-ar"}`}>
        <span onClick={handleLangChange}>{t("header.language")}</span>
      </div>
      <div className="navbar-logo" onClick={handleLogoClick}>
        <img src={eidEventsLogo} alt="Eid Events Logo" />
      </div>
    </nav>
  );
}
