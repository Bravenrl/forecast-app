export const Langs = {
  ru: 'ru',
  uk: 'uk',
  en: 'en',
};

export const maxAutocomplete = 3;

export enum Reducer {
  App = 'App',
}

export enum Slice {
  App = 'App',
}

export const googleMapsApiKey = process.env.REACT_APP_API_KEY ?? '';

export const BASE_URL = 'https://api.openweathermap.org/data/2.5'

export const weatherApiKey = process.env.REACT_APP_WEATHER_KEY ?? '';
