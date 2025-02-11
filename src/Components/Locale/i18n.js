import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en.json';
import ar from './ar.json';
const resources = {

    en: {
      translation:en,
    },
  
    ar: {
      translation: ar,
    }
  
  };
  
  i18next
  
    .use(initReactI18next)
  
    .init({
  
      resources,
  
      lng: "en",
  
      interpolation: {
  
        escapeValue: false,
  
      },
  
    });
  
  export default i18next;