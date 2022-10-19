import Card from '../../ui/card/card';
import styles from './table.module.scss';

type TableProps = {
  isLoaded: boolean;
};

function Table({ isLoaded }: TableProps): JSX.Element {
  return <div className={styles.table}>{isLoaded && <Card />}</div>;
}

export default Table;
