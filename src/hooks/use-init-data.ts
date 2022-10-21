import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getGeocode } from 'use-places-autocomplete';
import { City, Coord } from '../assets/types-data';
import { getCities, getLang } from '../store/app-slice/app-selectors';
import { geoBrowserLocation } from '../utils/geolocation';

export const useInitData = () => {
  const cities = useSelector(getCities);
  const lang = useSelector(getLang);
  // const [city, setCity] = useState<City>({} as City);
  // const [coord, setCoord] = useState<Coord | null>(null);

  // useEffect(() => {
  //   if (cities.length !== 0) {
  //     return;
  //   }
  //   geoBrowserLocation().then((coord) => {
  //     // console.log(coord)
  //     setCoord(coord);
  //   });
  // }, [cities]);

  // useEffect(() => {
  //   const parameter: google.maps.GeocoderRequest = {
  //     location: coord,
  //     language: lang,
  //   };
  //   if (!coord) {
  //     return;
  //   }

  //   getGeocode(parameter)
  //     .then((results) => {
  //       // console.log(results);
  //       setCity({
  //         name: results[0].address_components[0].short_name,
  //         placeId: results[0].place_id,
  //         country: results[0].address_components[3].short_name,
  //         unit: 'metric',
  //       });
  //       // console.log(city)
  //     })
  //     .catch(() => {
  //       setCity({} as City);
  //     });
  // }, [city, coord, lang]);
  return cities;
  // return cities.length <  0 ? cities : [city];
};
