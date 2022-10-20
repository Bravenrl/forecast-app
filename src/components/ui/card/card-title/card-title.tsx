import { LangsType } from '../../../../assets/types-data';
import { getLocaleDate } from '../../../../utils/data-utils';
import styles from './card-title.module.scss';

type CardTitleProps = {
  cityName: string;
  country: string;
  date: number;
  lang: LangsType;
};

function CardTitle({ cityName, country, date, lang }: CardTitleProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h2>
        {cityName}, {country}
      </h2>
      <span>{getLocaleDate(date, lang)}</span>
    </div>
  );
}

export default CardTitle;
