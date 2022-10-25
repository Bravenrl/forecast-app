import { ReactI18NextChild, useTranslation } from 'react-i18next';
import { City } from '../../../assets/types-data';
import UnitButton from '../unit-button/unit-button';
import styles from './degree-figure.module.scss';
import Sign from './sign/sign';

type DegreeFigureProps = {
  city: City;
  temp: number;
  feel: number;
};

function DegreeFigure({ temp, feel, city }: DegreeFigureProps): JSX.Element {
  const { t } = useTranslation();
  const isMetric = city.unit === 'metric';

  return (
    <div className={styles.container}>
      <div className={styles.figure}>
        <Sign temp={temp} unit={city.unit} />
        <span>{temp}</span>
        <UnitButton city={city} />
      </div>
      <div className={styles.feel}>
        <span>{t('feels like') as ReactI18NextChild}:</span>
        <Sign temp={feel} unit={city.unit} />
        <span>
          {feel}
        </span>
        <span> {isMetric ? <b>&deg;С</b> : <b>&deg;F</b>} </span>
      </div>
    </div>
  );
}

export default DegreeFigure;
