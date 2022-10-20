import { CurrentWeatherData, Unit } from '../../../assets/types-data';
import styles from './weather-params.module.scss';

type WeatherParamsProps = {
  unit: Unit;
  data: CurrentWeatherData;
  isAbove: boolean;
};

function WeatherParams({
  unit,
  data,
  isAbove,
}: WeatherParamsProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.param}>
        <span>Wind:</span>
        <span className={`${isAbove ? styles.above : styles.below}`}>
          <b>
            {data.wind.speed} {unit === 'imperial' ? 'mph' : 'm/s'}
          </b>
        </span>
      </div>

      <div className={styles.param}>
        <span>Humidity:</span>
        <span className={`${isAbove ? styles.above : styles.below}`}>
          <b>{data.main.humidity}%</b>
        </span>
      </div>
      <div className={styles.param}>
        <span>Pressure:</span>
        <span className={`${isAbove ? styles.above : styles.below}`}>
          <b>{data.main.pressure}Pa</b>
        </span>
      </div>
    </div>
  );
}

export default WeatherParams;
