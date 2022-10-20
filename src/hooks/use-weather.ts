import { useEffect, useState } from 'react';
import { getForecast, getWeather } from '../api/service';
import {
  ChartData,
  City,
  CurrentWeatherData,
  LangsType,
} from '../assets/types-data';
import { getChartData } from '../utils/data-utils';

export const useWeather = (city: City, lang: LangsType) => {
  const [weather, setWeather] = useState<CurrentWeatherData | null>(null);
  const [chartData, setChartData] = useState<ChartData[] | []>([]);

  useEffect(() => {
    getWeather(city.name, lang, city.unit)
      .then(({ data }) => {
        setWeather(data);
        console.log(data);
      })
      .catch(() => setWeather(null));
  }, [city, lang]);

  useEffect(() => {
    getForecast(city.name, lang, city.unit)
      .then(({ data }) => {
        const forecastData = getChartData(data);
        setChartData(forecastData);
      })
      .catch(() => setChartData([]));
  }, [city, lang]);

  return {
    chartData,
    weather,
  };
};
