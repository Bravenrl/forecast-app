import { useInitData } from '../../../hooks/use-init-data';
import Card from '../../ui/card/card';
import styles from './table.module.scss';

type TableProps = {
  isLoaded: boolean;
};

function Table({ isLoaded }: TableProps): JSX.Element | null {
  const data = useInitData();
  console.log(data);
  if (!isLoaded) return null;

  return (
    <div className={styles.table}>
      {data.map((city) => (
        <Card key={city.placeId} city={city} />
      ))}
    </div>
  );
}

export default Table;
