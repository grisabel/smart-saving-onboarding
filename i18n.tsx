import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        loginButtonLabel: "Log In",
        registerButtonLabel: "I want to sign up!",
        "btn-back": "Back",
        "btn-next": "Continue",
        "btn-return": "Return",

        "input-email-label": "Email",
        "input-email-placeholder": "Enter your email",
        "input-repeat-email-label": "Email",
        "input-repeat-email-placeholder": "Repeat your email",
        "input-password-label": "Password",
        "input-password-placeholder": "Enter your password",
        "input-repeat-password-label": "Repeat Password",
        "input-repeat-password-placeholder": "Repeat your password",
        "input-text-name-label": "Name",
        "input-text-name-placeholder": "Enter your name",
        "input-text-lastname-label": "Last name",
        "input-text-lastname-placeholder": "Enter your last names",
        "input-text-birthday-label": "Date of birth",
        "input-text-birthday-placeholder": "dd/mm/aaaa",
        "input-select-goal-label": "Financial goal",
        "input-select-goal-placeholder": "Select your goal",

        "login now": "Log in now",
        "better financial control":
          "Take a step towards better financial control!",
        forgotPassword: "Forgot your password?",
        "achieve-goals": "We help you to achieve your goals!",
        "create-account": "Create an account",
        welcome: "Welcome!",
        "about-yourself": "Tell us about youself.",
        "forgot-your-password": "Forgot your password?",
        "give-your-data":
          "Provide us with the following details and we will send you a link to reset your password.",
        "sent-email": "An email has been sent to",
        "sent-email-success":
          "You have successfully completed the registration process.",
        "take-control":
          "Start taking control of your income and expenses today",
        "choose-password": "Choose a secure password",
        "not-forget-password":
          "And most importantly, don't forget it or you'll have to do this all over again!",
        "error-password":
          "Oops, we seem to have encountered a problem during the process.",
        "team-working":
          "Our team is already investigating and working to fix it.",
        "try-again-later":
          "Please try again later. We are sorry for the inconvenience and thank you for your understanding",
        "need-email": "We need your email address.",
        "contact-with-you": "So we will be in touch with you.",
        "lock-account": "It's time to lock your account!",
        "secure-password": "Choose a password that only you know.",
        congratulation: "Congratulations!",
        "onboarding-completed":
          "You have successfully completed the registration process.",
        "reset-password-completed":
          "You have successfully completed the reset password process.",
        "login-now": "Start taking control of your income and expenses today.",

        "password-validator-lenght-rule":
          "Password must be at least 6 characters long.",
        "password-validator-uppercase-rule":
          "Password must have at least one uppercase letter.",
        "password-validator-lowercase-rule":
          "Password must have at least one lower case letter.",
        "password-validator-number-rule":
          "Password must have at least one number.",
        "password-validator-special-char-rule":
          "Password must have at least one special character from the following list “_  @ # !” .",
        "password-validator-equals-rule": "Both passwords must match.",

        "email-validator-domain-rule": "Email format is not correct.",
        "email-validator-equals-rule": "Both emails must match.",

        "objective-education-savings": "Education Savings",
        "objective-emergency": "Emergency Fund",
        "objective-retirement": "Retirement",
        "objective-smart-investment": "Smart Investment",

        "objective-education-savings-explain":
          "Education Savings: Start today for your children's academic future",
        "objective-emergency-explain":
          "Emergency Fund: Your safety net against unforeseen events.",
        "objective-retirement-explain":
          "Retirement: Plan today for a peaceful retirement.",
        "objective-smart-investment-explain":
          "Retirement: Plan today for a peaceful retirement.",

        "error-login-password-title": "Oops! Incorrect Username or Password",
        "error-login-password-description":
          "Please check your username and password and try again. We all have those crazy keyboard days! 😉",
        "error-login-server-title":
          "Oops! It looks like the server took a little break without notice",
        "error-login-server-description":
          "Our tech team is giving it a serious talk. Please try again in a little while.",
      },
    },
    es: {
      translation: {
        loginButtonLabel: "Iniciar Sesión",
        registerButtonLabel: "¡Quiero darme de alta!",
        "btn-back": "Atrás",
        "btn-next": "Continuar",
        "btn-return": "Volver",

        "input-email-label": "Email",
        "input-email-placeholder": "Introduzca su email",
        "input-repeat-email-label": "Repetir Email",
        "input-repeat-email-placeholder": "Repita su email",
        "input-password-label": "Contraseña",
        "input-password-placeholder": "Introduzca su contraseña",
        "input-repeat-password-label": "Repetir Contraseña",
        "input-repeat-password-placeholder": "Repita su contraseña",
        "input-text-name-label": "Nombre",
        "input-text-name-placeholder": "Introduzca su nombre",
        "input-text-lastname-label": "Apellidos",
        "input-text-lastname-placeholder": "Introduzca sus apellidos",
        "input-text-birthday-label": "Fecha de nacimiento",
        "input-text-birthday-placeholder": "dd/mm/aaaa",
        "input-select-goal-label": "Objetivo financiero",
        "input-select-goal-placeholder": "Seleccione su objetivo",

        "login now": "Inicia sesión ahora.",
        "better financial control":
          "¡Da un paso hacia un mejor control financiero!",
        forgotPassword: "¿Olvidaste la contraseña?",
        "achieve-goals": "¡Te ayudamos a conseguir tus metas!",
        "create-account": "Créate una cuenta",
        welcome: "¡Bienvenido!",
        "about-yourself": "Cuéntanos un poco sobre ti.",
        "forgot-your-password": "¿Olvidaste tu contraseña?",
        "give-your-data":
          "Facilítanos los siguientes datos y te enviaremos un enlace para restablecer tu contraseña.",
        "sent-email": "Se ha enviado un email a",
        "sent-email-success":
          "Has completado con éxito el proceso de registro.",
        "take-control":
          "Comienza a tomar el control de tus ingresos y gastos hoy mismo.",
        "choose-password": "Elige una contraseña segura.",
        "not-forget-password":
          "¡Y lo más importante, no la olvides o tendrás que hacer todo esto de nuevo!",
        "error-password":
          "Ups, parece que hemos encontrado un problema durante el proceso.",
        "team-working":
          "Nuestro equipo ya está investigando y trabajando para solucionarlo.",
        "try-again-later":
          "Por favor, inténtalo de nuevo más tarde. Lamentamos la molestia y agradecemos tu compresión.",
        "need-email": "Necesitamos tu correo electrónico.",
        "contact-with-you": "Así estaremos en contacto contigo.",
        "lock-account": "¡Es hora de ponerle candado a tu cuenta!",
        "secure-password": "Escoge una contraseña que solo tú conozcas.",
        congratulation: "¡Enhorabuena!",
        "onboarding-completed":
          "Has completado con éxito el proceso de registro.",
        "reset-password-completed":
          "Has completado con éxito el proceso de cambio de contraseña.",
        "login-now":
          "Comienza a tomar el control de tus ingresos y gastos hoy mismo.",

        "password-validator-lenght-rule":
          "La contraseña debe tener un mínimo de 6 caracteres.",
        "password-validator-uppercase-rule":
          "La contraseña debe tener al menos una letra mayúscula.",
        "password-validator-lowercase-rule":
          "La contraseña debe tener al menos una letra minúscula.",
        "password-validator-number-rule":
          "La contraseña debe tener al menos una número.",
        "password-validator-special-char-rule":
          "La contraseña debe tener al menos carácter especial de la siguiente lista “_  @ # !” .",
        "password-validator-equals-rule": "Ambas contraseñas deben coincidir.",

        "email-validator-domain-rule": "El formato de email no es correcto.",
        "email-validator-equals-rule": "Ambos emails deben coincidir.",

        "objective-education-savings": "Ahorro Educativo",
        "objective-emergency": "Fondo de Emergencia",
        "objective-retirement": "Jubilación",
        "objective-smart-investment": "Inversión Inteligente",

        "objective-education-savings-explain":
          "Ahorro Educativo: Inicia hoy para el futuro académico de tus hijos.",
        "objective-emergency-explain":
          "Fondo de Emergencia: Tu red de seguridad ante imprevistos.",
        "objective-retirement-explain":
          "Jubilación: Planifica hoy para un retiro tranquilo.",
        "objective-smart-investment-explain":
          "Inversión Inteligente: Haz crecer tu patrimonio paso a paso.",

        "error-login-password-title": "¡Ups! Usuario o Contraseña Incorrecto",
        "error-login-password-description":
          "Verifica tu usuario y contraseña e inténtalo de nuevo. ¡Todos tenemos días locos con el teclado! 😉",
        "error-login-server-title":
          "¡Ups! Parece que el servidor se tomó un pequeño descanso sin previo aviso",
        "error-login-server-description":
          "Nuestro equipo de tecnología le está dando una charla seria. Por favor, inténtalo de nuevo en un rato.",
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
