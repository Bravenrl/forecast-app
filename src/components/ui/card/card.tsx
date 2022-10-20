import {
  City,
  CurrentWeatherData,
  ForecastData,
} from '../../../assets/types-data';
import styles from './card.module.scss';
import { getGeocode } from 'use-places-autocomplete';
import { useSelector } from 'react-redux';
import { getLang } from '../../../store/app-slice/app-selectors';
import { useWeather } from '../../../hooks/use-weather';
import { useNameTranslate } from '../../../hooks/use-name-translate';
import ForecastAriaChart from '../forecast-aria-chart/forecast-aria-chart';
import UnitButton from '../unit-button/unit-button';
import { memo } from 'react';
import { getIsAbove } from '../../../utils/data-utils';
import DegreeFigure from '../degree-figure/degree-figure';

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
      {cityName}
      <ForecastAriaChart chartData={chartData} isAbove={isAbove} />
      {weather && <DegreeFigure temp={mainTemp} feel={feelTemp} city={city} />}
    </div>
  );
}

export default memo(Card);
