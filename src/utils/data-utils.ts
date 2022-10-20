import dayjs from 'dayjs';
import { ChartData, ForecastData, Unit } from '../assets/types-data';

export const getChartData = (data: ForecastData): ChartData[] => {
  return data.list.reduce((days, day) => {
    const dayDate = dayjs.unix(day.dt).format('DD.MM');
    if (days.length !== 0 && days.find((item) => item.date === dayDate)) {
      return days;
    }
    return [...days, { date: dayDate, temp: Math.round(day.main.temp) }];
  }, [] as ChartData[]);
};

export const getIsAbove = (temp: number, unit: Unit): boolean => {
  if (unit === 'imperial') {
    return temp > 32;
  }
  if (unit === 'standard') {
    return temp > 273;
  }

  return temp > 0;
};

export const getTempSign = (temp: number, unit: Unit): string => {
  if (temp > 0 && unit === 'metric') return `+${temp}`;
  if (temp < 0) return `-${temp}`;
  return `${temp}`;
};
