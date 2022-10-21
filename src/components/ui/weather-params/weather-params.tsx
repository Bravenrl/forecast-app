import { ReactI18NextChild, useTranslation } from 'react-i18next';
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
  const { t } = useTranslation('translation');
  return (
    <div className={styles.container}>
      <div className={styles.param}>
        <span>{t('wind') as ReactI18NextChild}:</span>
        <span className={`${isAbove ? styles.above : styles.below}`}>
          <b>
            {data.wind.speed} {unit === 'imperial' ? 'mph' : 'm/s'}
          </b>
        </span>
      </div>

      <div className={styles.param}>
        <span>{t('humidity') as ReactI18NextChild}:</span>
        <span className={`${isAbove ? styles.above : styles.below}`}>
          <b>{data.main.humidity}%</b>
        </span>
      </div>
      <div className={styles.param}>
        <span>{t('pressure') as ReactI18NextChild}:</span>
        <span className={`${isAbove ? styles.above : styles.below}`}>
          <b>{data.main.pressure}Pa</b>
        </span>
      </div>
    </div>
  );
}

export default WeatherParams;
