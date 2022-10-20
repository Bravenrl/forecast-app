import { memo } from 'react';
import { City } from '../../../assets/types-data';
import { getTempSign } from '../../../utils/data-utils';
import UnitButton from '../unit-button/unit-button';
import styles from './degree-figure.module.scss';

type DegreeFigureProps = {
  city: City;
  temp: number;
  feel: number;
};

function DegreeFigure({ temp, feel, city }: DegreeFigureProps): JSX.Element {
  const currentTemp = getTempSign(temp, city.unit);
  const currentFeel = getTempSign(feel, city.unit);
  return (
    <div className={styles.container}>
      <div className={styles.figure}>
        <span>{currentTemp}</span>
        <UnitButton city={city} />
      </div>
      <div className={styles.feel}>
        <span>Feels like:</span>
        <span>{currentFeel}</span>
        {city.unit==='metric' ? <span>&deg;С</span> : <span>&deg;F</span>}
      </div>
    </div>
  );
}

export default DegreeFigure;
