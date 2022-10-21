import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export const resources = {
  en: {
    translation: {
      'add': 'Add',
      'feels like': 'Feels like',
      'wind': 'Wind',
      'pressure': 'Pressure',
      'humidity': 'Humidity',
      'choose city': 'Choose city from list',
    },
  },
  ru: {
    translation: {
       'add': 'Добавить',
       'feels like': 'Ощущается',
       'wind': 'Ветер',
       'pressure': 'Давление',
       'humidity': 'Влажность',
       'choose city': 'Ваберете город из списка',
    },
  },
  uk: {
    translation: {
      'add': 'Додати',
      'feels like': 'Відчувається',
      'wind': 'Вiтер',
      'pressure': 'Тиск',
      'humidity': 'Вологість',
      'choose city': 'Виберіть місто зі списку',
    },
  },
} as const;

i18n.use(initReactI18next).init({
  debug: true,
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
