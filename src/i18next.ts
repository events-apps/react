import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import events from './locales/en/events.json';
import common from './locales/en/common.json';

const resources = {
  en: { events, common },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  ns: ['events', 'common'],
  defaultNS: 'events',
  interpolation: {
    escapeValue: false,
  },
});
