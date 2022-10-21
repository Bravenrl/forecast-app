import { Langs } from './const';

export type LangsType = keyof typeof Langs;

export type Unit = 'standard' | 'metric' | 'imperial';

export type Coord = {
  lng: number;
  lat: number;
};

export type City = {
  name: string;
  country: string;
  unit: Unit;
  placeId: string;
};

export type WeatherIcon = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

export type Temp = {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
};

export type Feel = {
  day: number;
  night: number;
  eve: number;
  morn: number;
};

export type MainInfo = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
  temp_kf: number;
};

export type CurrentWeatherData = {
  coord: Coord;
  weather: WeatherIcon[];
  base: string;
  main: MainInfo;
  visibility: number;
  wind: Wind;
  rain: {
    '1h': number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type ForecastData = {
  city: {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
  cod: string;
  message: number;
  cnt: number;
  list: DayForecast[];
};

export type ChartData = {
  date: string;
  temp: number;
};

export type DayForecast = {
  dt: number;
  wind: Wind;
  weather: WeatherIcon[];
  clouds: number;
  pop: number;
  visibility: number;
  main: MainInfo;
};
