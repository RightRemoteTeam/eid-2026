import { useEffect, useState } from "react";
import "./assets/SCSS/main.scss";
import { Outlet, useParams } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { checkLang } from "./Components/Functions";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "./Components/ThemeContext";
import {AudioToggleButton} from "./Components/Functions";

function App() {
  const { theme } = useTheme();
  const { i18n } = useTranslation();

  const { lang } = useParams();
  const [audioEnabled, setAudioEnabled] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    checkLang(i18n, lang);
  }, [lang]);

  return (
    <div className={`wrapper ${theme} ${lang==='en'?"ltr":"rtl"}`}>
      <Navbar audioEnabled={audioEnabled} setAudioEnabled={setAudioEnabled} />
      <Outlet context={[audioEnabled]} />
      <Footer audioEnabled={audioEnabled} />
    </div>
  );
}

export default App;
