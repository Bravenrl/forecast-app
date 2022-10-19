import styles from './search-button.module.scss';

type SearchButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

function SearchButton({ type, disabled }: SearchButtonProps): JSX.Element {
  return (
    <button disabled={disabled} type={type} className={styles.button}>
      add
    </button>
  );
}

export default SearchButton;
