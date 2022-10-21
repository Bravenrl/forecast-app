import { ReactI18NextChild, useTranslation } from 'react-i18next';
import styles from './search-button.module.scss';

type SearchButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

function SearchButton({ type, disabled }: SearchButtonProps): JSX.Element {

  const {t} = useTranslation('translation')

  return (
    <button disabled={disabled} type={type} className={styles.button}>
      <span>{t('add') as ReactI18NextChild}</span>
    </button>
  );
}

export default SearchButton;
