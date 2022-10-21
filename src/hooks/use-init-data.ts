import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getGeocode } from 'use-places-autocomplete';
import { getWeather } from '../api/service';
import { City } from '../assets/types-data';
import { getCities, getLang } from '../store/slices/selectors';
import { getBrowserLocation } from '../utils/geolocation';

export const useInitData = () => {
  const cities = useSelector(getCities);
  const lang = useSelector(getLang);
  const [city, setCity] = useState<City>({} as City);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (cities.length !== 0) {
      return;
    }
    getBrowserLocation()
      .then((coord) => {
        const parameter: google.maps.GeocoderRequest = {
          location: coord,
          language: lang,
        };
        return getGeocode(parameter);
      })
      .then((results) => {
        setCity({
          name: results[0].address_components[3].short_name,
          country: '',
          placeId: results[0].place_id.split('_')[0],
          unit: 'metric',
        });
        setIsLoaded(true);
      })
      .catch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => {
    if (!isLoaded) return;
    getWeather(city.name)
      .then(({ data }) => {
        setCity({ ...city, country: data.sys.country });
      })
      .catch();

    setIsLoaded(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  return cities.length === 0 ? [city] : cities;
};
