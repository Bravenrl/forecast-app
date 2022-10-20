import {
  City,
  CurrentWeatherData,
  ForecastData,
} from '../../../assets/types-data';
import styles from './card.module.scss';
import { getGeocode } from 'use-places-autocomplete';
import { useSelector } from 'react-redux';
import { getLang } from '../../../store/app-slice/app-selectors';
import ForecastAriaChart from './forecast-aria-chart/forecast-aria-chart';
import { useWeather } from '../../../hooks/use-weather';
import { useNameTranslate } from '../../../hooks/use-name-translate';

type CardProps = {
  city: City;
};

function Card({ city }: CardProps): JSX.Element {
  const lang = useSelector(getLang);
  const cityName = useNameTranslate(city, lang);
  const { weather, chartData } = useWeather(city);

  console.log(weather);

  return (
    <div className={styles.card}>
      {cityName}
      <ForecastAriaChart />
    </div>
  );
}

export default Card;
