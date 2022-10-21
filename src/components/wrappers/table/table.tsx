import { useInitData } from '../../../hooks/use-init-data';
import Card from '../../ui/card/card';
import styles from './table.module.scss';

function Table(): JSX.Element {
  const data = useInitData();
  return (
    <div className={styles.table}>
      {data.map((city, index) => (
        <Card key={city.placeId+index} city={city} />
      ))}
    </div>
  );
}

export default Table;
