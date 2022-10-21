import { ReactI18NextChild, useTranslation } from 'react-i18next';
import { City } from '../../../assets/types-data';
import UnitButton from '../unit-button/unit-button';
import styles from './degree-figure.module.scss';

type DegreeFigureProps = {
  city: City;
  temp: number;
  feel: number;
};

function DegreeFigure({ temp, feel, city }: DegreeFigureProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.figure}>
        <span>{temp}</span>
        <UnitButton city={city} />
      </div>
      <div className={styles.feel}>
        <span>{t('feels like') as ReactI18NextChild}:</span>
        <span>
          <b>{feel}</b>
        </span>
        <span> {city.unit === 'metric' ? <b>&deg;С</b> : <b>&deg;F</b>} </span>
      </div>
    </div>
  );
}

export default DegreeFigure;
