import { useEffect, useState } from 'react';
import { getGeocode } from 'use-places-autocomplete';
import { City, LangsType } from '../assets/types-data';

export const useNameTranslate = (city: City, lang: LangsType) => {
  const [cityName, setCityName] = useState<string>('');
  useEffect(() => {
    const parameter: google.maps.GeocoderRequest = {
      placeId: city.placeId,
      language: lang,
    };
    getGeocode(parameter)
      .then((results) => {
        setCityName(results[0].address_components[0].long_name);
      })
      .catch(() => {
        setCityName(city.name);
      });
  }, [city.name, city.placeId, lang]);

  return cityName;
};
