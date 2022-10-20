import {
  City,
} from '../../../assets/types-data';
import styles from './card.module.scss';
import { useSelector } from 'react-redux';
import { getLang } from '../../../store/app-slice/app-selectors';
import { useWeather } from '../../../hooks/use-weather';
import { useNameTranslate } from '../../../hooks/use-name-translate';
import ForecastAriaChart from '../forecast-aria-chart/forecast-aria-chart';
import { memo } from 'react';
import { getIsAbove } from '../../../utils/data-utils';
import DegreeFigure from '../degree-figure/degree-figure';
import WeatherParams from '../weather-params/weather-params';
import CardTitle from './card-title/card-title';

type CardProps = {
  city: City;
};

function Card({ city }: CardProps): JSX.Element | null {
  const lang = useSelector(getLang);
  const cityName = useNameTranslate(city, lang);
  const { weather, chartData } = useWeather(city, lang);

  if (!weather) return null;

  const mainTemp = Math.round(weather.main.temp);
  const feelTemp = Math.round(weather.main.feels_like);
  const isAbove = getIsAbove(mainTemp, city.unit);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <CardTitle cityName={cityName} country={city.country} date={weather.dt} lang={lang}/>
      </div>
      <ForecastAriaChart chartData={chartData} isAbove={isAbove} />
      {weather && (
        <div className={styles.weather}>
          <DegreeFigure temp={mainTemp} feel={feelTemp} city={city} />
          <WeatherParams unit={city.unit} data={weather} isAbove={isAbove} />
        </div>
      )}
    </div>
  );
}

export default memo(Card);
