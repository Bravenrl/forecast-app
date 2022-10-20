import dayjs from 'dayjs';
import { ChartData, ForecastData, LangsType, Unit } from '../assets/types-data';

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

export const getLocaleDate = (date: number, lang: LangsType) => {
  const now = new Date(date * 1000);
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    weekday: 'short',
  };

  const localeDate =
    lang === 'en'
      ? new Intl.DateTimeFormat('en-Uk', dateOptions)
      : new Intl.DateTimeFormat(lang, dateOptions);

  const time = dayjs.unix(date).format('HH:mm')

  return `${localeDate.format(now)}, ${time}`;
};
