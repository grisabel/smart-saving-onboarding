import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "loginButtonLabel": "Log In",
        "login now": "Log in now",
        "better financial control": "Take a step towards better financial control!"
      },
    },
    es: {
      translation: {
        "loginButtonLabel": "Iniciar Sesión",
        "login now": "Inicia sesión ahora.",
        "better financial control": "¡Da un paso hacia un mejor control financiero!"
      },
    },
  },
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
