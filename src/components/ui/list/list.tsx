import { ReactNode } from 'react';
import styles from './list.module.scss';

type ListProps = {
  children: ReactNode[];
};

function List({ children }: ListProps): JSX.Element {
  return <ul className={styles.list}>{children}</ul>;
}

export default List;
