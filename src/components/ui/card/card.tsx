import styles from './card.module.scss';

type CardProps = {};

function Card({}: CardProps): JSX.Element {
  return <div className={styles.card}>Card</div>;
}

export default Card;


// https://maps.googleapis.com/maps/api/place/js/AutocompletionService.GetPredictionsJson?1smfs=&4sus=&15e3=&21m1=&2e1=&callback=_xdc_._o5yz6q&key=AIzaSyA9bslaj5Bl5nLuQQXe8rr_PkhDvvZqzMs&token=31699


// https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Mos&key=AIzaSyA9bslaj5Bl5nLuQQXe8rr_PkhDvvZqzMs


// https://api.openweathermap.org/data/2.5/forecast/daily?q=Moscow&appid=39e04fc175f72599ade50ab8368159f2


//  https://api.openweathermap.org/data/2.5/forecast?q=Су&lang=ua&appid=39e04fc175f72599ade50ab8368159f2


// https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=par&key=AIzaSyA9bslaj5Bl5nLuQQXe8rr_PkhDvvZqzMs