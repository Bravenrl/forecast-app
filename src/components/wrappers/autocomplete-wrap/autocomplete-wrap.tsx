import { ReactNode } from 'react';
import styles from './autocomplete-wrap.module.scss';

type AutocompleteWrapProps = {
  children: ReactNode[];
};

function AutocompleteWrap({ children }: AutocompleteWrapProps): JSX.Element {
  return <div className={styles.wrapper}>{children}</div>;
}

export default AutocompleteWrap;
