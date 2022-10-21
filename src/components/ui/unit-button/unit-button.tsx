import { City, Unit } from '../../../assets/types-data';
import styles from './unit-button.module.scss';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { changeCityUnit } from '../../../store/slices/data-slice';

type UnitButtonProps = {
  city: City;
};

function UnitButton({ city }: UnitButtonProps): JSX.Element {
  const dispatch = useDispatch();

  const handleClick = (unit: Unit) => {
    dispatch(changeCityUnit({ placeId: city.placeId, unit }));
  };

  return (
    <div className={styles.container}>
      <button
        className={cx({ [styles.active]: city.unit === 'metric' })}
        onClick={() => handleClick('metric')}
      >
        &deg;С
      </button>
      <button
        className={cx({ [styles.active]: city.unit === 'imperial' })}
        onClick={() => handleClick('imperial')}
      >
        &deg;F
      </button>
    </div>
  );
}

export default UnitButton;
