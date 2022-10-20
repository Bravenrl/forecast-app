import { CurrentWeatherData, ForecastData, LangsType, Units } from '../assets/types-data';
import { api } from './api';

export const weatherApiKey = process.env.REACT_APP_WEATHER_KEY ?? '';

export const getForecast = async (
  city: string,
  lang?: LangsType,
  units:Units='metric'
) => {
  return await api.get<ForecastData>('/forecast', {
    params: {
      q: city,
      lang,
      units,
      appid: weatherApiKey,
    },
  });
};

export const getWeather = async (city: string, lang?: LangsType, units:Units='metric') => {
  return await api.get<CurrentWeatherData>('/weather', {
    params: { q: city, lang, appid: weatherApiKey, units },
  });
};
