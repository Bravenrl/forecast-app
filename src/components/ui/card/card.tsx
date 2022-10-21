import { City } from '../../../assets/types-data';
import styles from './card.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getLang } from '../../../store/slices/selectors';
import { useWeather } from '../../../hooks/use-weather';
import { useNameTranslate } from '../../../hooks/use-name-translate';
import ForecastAriaChart from '../forecast-aria-chart/forecast-aria-chart';
import { memo } from 'react';
import { getIsAbove } from '../../../utils/data-utils';
import DegreeFigure from '../degree-figure/degree-figure';
import WeatherParams from '../weather-params/weather-params';
import CardTitle from './card-title/card-title';
import CardIcon from '../card-icon/card-icon';
import { VscClose } from 'react-icons/vsc';
import { removeCity } from '../../../store/slices/data-slice';
import cx from 'classnames';

type CardProps = {
  city: City;
};

function Card({ city }: CardProps): JSX.Element | null {
  const dispatch = useDispatch();
  const lang = useSelector(getLang);
  const cityName = useNameTranslate(city, lang);
  const { weather, chartData, isLoading } = useWeather(city, lang);

  if (!weather) return null;

  const mainTemp = Math.round(weather.main.temp);
  const feelTemp = Math.round(weather.main.feels_like);
  const isAbove = getIsAbove(mainTemp, city.unit);

  return (
    <div
      className={cx(styles.card, {
        [styles.cold]: !isAbove && !isLoading,
        [styles.warm]: isAbove && !isLoading,
      })}
    >
      <button
        className={styles.remove}
        type='button'
        aria-label='remove'
        onClick={() => dispatch(removeCity(city.placeId))}
      >
        <VscClose />
      </button>
      <div className={styles.header}>
        <CardTitle
          cityName={cityName}
          country={city.country}
          date={weather.dt}
          lang={lang}
        />
        <CardIcon data={weather.weather} />
      </div>
      <ForecastAriaChart chartData={chartData} isAbove={isAbove} />
      {weather && !isLoading && (
        <div className={styles.weather}>
          <DegreeFigure temp={mainTemp} feel={feelTemp} city={city} />
          <WeatherParams unit={city.unit} data={weather} isAbove={isAbove} />
        </div>
      )}
    </div>
  );
}

export default memo(Card);
