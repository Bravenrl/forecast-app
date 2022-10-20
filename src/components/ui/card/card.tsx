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

type CardProps = {
  city: City;
};

function Card({ city }: CardProps): JSX.Element {
  const lang = useSelector(getLang);
  const cityName = useNameTranslate(city, lang);
  const { weather, chartData } = useWeather(city, lang);

  // console.log(weather);

  return (
    <div className={styles.card}>
      {cityName}
      <ForecastAriaChart chartData={chartData} />
      <UnitButton />
    </div>
  );
}

export default Card;
