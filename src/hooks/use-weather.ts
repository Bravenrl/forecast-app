import { useEffect, useState } from 'react';
import { getForecast, getWeather } from '../api/service';
import { ChartData, City, CurrentWeatherData, LangsType } from '../assets/types-data';
import { getChartData } from '../utils/data-utils';

export const useWeather = (city: City, lang:LangsType) => {
  const [weather, setWeather] = useState<CurrentWeatherData | []>([]);
  const [chartData, setChartData] = useState<ChartData[] | []>([]);

  useEffect(() => {
    getWeather(city.name, lang)
      .then(({ data }) => {
        setWeather(data);
        console.log(data);
      })
      .catch(() => setWeather([]));
  }, [city, lang]);

  useEffect(() => {
    getForecast(city.name, lang)
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
