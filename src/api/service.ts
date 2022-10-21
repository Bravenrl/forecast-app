import { weatherApiKey } from '../assets/const';
import { CurrentWeatherData, ForecastData, LangsType, Unit } from '../assets/types-data';
import { api } from './api';



export const getForecast = async (
  city: string,
  lang?: LangsType,
  units:Unit='metric'
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

export const getWeather = async (city: string, lang?: LangsType, units:Unit='metric') => {
  return await api.get<CurrentWeatherData>('/weather', {
    params: { q: city, lang, appid: weatherApiKey, units },
  });
};
