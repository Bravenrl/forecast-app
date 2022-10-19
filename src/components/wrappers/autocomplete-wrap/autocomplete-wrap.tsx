
import Autocomplete from '../../autocomplete/autocomplete';
import styles from './autocomplete-wrap.module.scss';

type AutocompleteWrapProps = {
  isLoaded: boolean;
};

function AutocompleteWrap({ isLoaded }: AutocompleteWrapProps): JSX.Element {
  return <div className={styles.wrapper}>
    <Autocomplete isLoaded={isLoaded} />
        
  </div>;
}

export default AutocompleteWrap;
