import styles from './search-button.module.scss';

type SearchButtonProps = {};

function SearchButton({}: SearchButtonProps): JSX.Element {
  return <button className={styles.button}>add</button>;
}

export default SearchButton;
