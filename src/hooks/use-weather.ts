import { useEffect, useState } from 'react';
import { getForecast, getWeather } from '../api/service';
import { ChartData, City, CurrentWeatherData } from '../assets/types-data';
import { getChartData } from '../utils/data-utils';

export const useWeather = (city: City) => {
  const [weather, setWeather] = useState<CurrentWeatherData | null>(null);
  const [chartData, setChartData] = useState<ChartData[] | null>(null);

  useEffect(() => {
    getWeather(city.name)
      .then(({ data }) => {
        setWeather(data);
      })
      .catch(() => setWeather(null));
  }, [city]);

  useEffect(() => {
    getForecast(city.name)
      .then(({ data }) => {
        const forecastData = data.list.map(getChartData);
        setChartData(forecastData);
      })
      .catch(() => setChartData(null));
  }, [city]);

  return {
    chartData,
    weather,
  };
};
