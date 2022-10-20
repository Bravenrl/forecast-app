import dayjs from 'dayjs';
import { ChartData, ForecastData } from '../assets/types-data';

export const getChartData = (data: ForecastData): ChartData[] => {
  return data.list.reduce((days, day) => {
    const dayDate = dayjs.unix(day.dt).format('DD.MM');
    if (days.length !== 0 && days.find((item) => item.date === dayDate)) {
      return days;
    }
    return [...days, { date: dayDate, temp: Math.round(day.main.temp) }];
  }, [] as ChartData[]);
};
