import { CurrentWeatherData, ForecastData, Units } from '../assets/types-data';
import { api } from './api';

export const googleWeatherApiKey = process.env.REACT_APP_WEATHER_KEY ?? '';
const cntDaysForecast = 8;

export const getForecast = async (
  city: string,
  lang?: string,
  units:Units='metric'
) => {
  return await api.get<ForecastData>('/forecast', {
    params: {
      q: city,
      lang,
      units,
      cnt: cntDaysForecast,
      appid: googleWeatherApiKey,
    },
  });
};

export const getWeather = async (city: string, lang?: string, units:Units='metric') => {
  return await api.get<CurrentWeatherData>('/weather', {
    params: { q: city, lang, appid: googleWeatherApiKey, units },
  });
};
