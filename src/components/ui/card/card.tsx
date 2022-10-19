import { City } from '../../../assets/types-data';
import styles from './card.module.scss';
import { getGeocode } from 'use-places-autocomplete';
import { useEffect } from 'react';

type CardProps = {
  // city: City;
};

function Card({}: CardProps): JSX.Element {
  const parameter: google.maps.GeocoderRequest = {
    // la: "Section 5, Xinyi Road, Xinyi District, Taipei City, Taiwan",
    // or
    // placeId: 'ChIJraeA2rarQjQRPBBjyR3RxKw',
    language: 'en',
    location: { lat: -34, lng: 151 },
  };

  useEffect(() => {
    getGeocode(parameter)
      .then((results) => {
        console.log('Geocoding results: ', results);
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }, [parameter]);

  return <div className={styles.card}>Card</div>;
}

export default Card;
