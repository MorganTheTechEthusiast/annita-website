import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Add your English translations here
      welcome: "Welcome",
      // ... other translations
    },
  },
  fr: {
    translation: {
      // Add your French translations here
      welcome: "Bienvenue",
      // ... other translations
    },
  },
  ar: {
    translation: {
      // Add your Arabic translations here
      welcome: "أهلا وسهلا",
      // ... other translations
    },
  },
  // Add other languages as needed
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
