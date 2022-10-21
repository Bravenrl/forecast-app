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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getWeather(city.name, lang, city.unit)
      .then(({ data }) => {
        setWeather(data);
      })
      .catch(() => setWeather(null))
      .finally(() => {
        setIsLoading(false);
      });
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
    isLoading,
  };
};
