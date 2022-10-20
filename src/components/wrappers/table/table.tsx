import { useSelector } from 'react-redux';
import { getCities } from '../../../store/app-slice/app-selectors';
import Card from '../../ui/card/card';
import styles from './table.module.scss';

type TableProps = {
  isLoaded: boolean;
};

function Table({ isLoaded }: TableProps): JSX.Element | null {
  const cities = useSelector(getCities);
  if (!isLoaded) return null;

  return (
    <div className={styles.table}>
      {cities.map((city) => (
        <Card key={city.placeId} city={city}/>
      ))}
    </div>
  );
}

export default Table;
