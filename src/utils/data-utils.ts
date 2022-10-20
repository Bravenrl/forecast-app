import dayjs from 'dayjs';
import { ChartData, DayForecast } from '../assets/types-data';


export const getChartData = (day: DayForecast): ChartData => ({
  date: dayjs.unix(day.dt).format('DD.MM'),
  temp: day.main.temp,
});
