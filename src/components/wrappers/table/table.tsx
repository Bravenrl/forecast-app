import Card from '../../ui/card/card';
import styles from './table.module.scss';

type TableProps = {};

function Table({}: TableProps): JSX.Element {
  return (
    <div className={styles.table}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Table;
