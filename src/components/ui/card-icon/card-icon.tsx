import { WeatherIcon } from '../../../assets/types-data';
import styles from './card-icon.module.scss';

type CardIconProps = {
  data: WeatherIcon[];
};

function CardIcon({ data }: CardIconProps): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src={`http://openweathermap.org/img/wn/${data[0].icon}@2x.png`}
          alt='weather'
          height={60} width={60}
        />
      </div>
      <span className={styles.description}>{data[0].description}</span>
    </div>
  );
}

export default CardIcon;
