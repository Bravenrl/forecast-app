import { CurrentWeatherData, ForecastData, Metric } from '../assets/types-data';
import { api } from './api';

export const googleWeatherApiKey = process.env.REACT_APP_WEATHER_KEY ?? '';
const cntDaysForecast = 8;

export const getForecast = async (
  city: string,
  lang?: string,
  metric?: Metric
) => {
  const { data } = await api.get<ForecastData>('/forecast', {
    params: {
      q: city,
      lang,
      metric,
      cnt: cntDaysForecast,
      appid: googleWeatherApiKey,
    },
  });

  return data;
};

export const getWeather = async (city: string, lang?: string) => {
  return await api.get<CurrentWeatherData>('/weather', {
    params: { q: city, lang, appid: googleWeatherApiKey, metric: 'metric' },
  });
};
