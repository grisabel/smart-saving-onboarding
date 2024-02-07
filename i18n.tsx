import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "loginButtonLabel": "Log In",
        "registerButtonLabel": "I want to sign up!",
        "login now": "Log in now",
        "better financial control": "Take a step towards better financial control!",
        "forgotPassword": "Forgot your password?",
        "input-email-label" : "Email",
        "input-email-placeholder" : "Enter your email"
      },
    },
    es: {
      translation: {
        "loginButtonLabel": "Iniciar Sesión",
        "registerButtonLabel": "¡Quiero darme de alta!",
        "login now": "Inicia sesión ahora.",
        "better financial control": "¡Da un paso hacia un mejor control financiero!",
        "forgotPassword": "¿Olvidaste la contraseña?",
        "input-email-label" : "Email",
        "input-email-placeholder" : "Introduzca su email"
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
