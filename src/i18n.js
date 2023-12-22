import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ar: {
    translation: {
      'app.title': 'مرحبًا بك في تطبيق React',
      // Add more translations as needed
    },
  },
  en: {
    translation: {
      'app.title': 'Welcome to the React App',
      // Add more translations as needed
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ar', // Default language
  interpolation: {
    escapeValue: false, // not needed for React
  },
});

export default i18n;
