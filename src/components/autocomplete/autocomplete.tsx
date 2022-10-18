import { ChangeEvent, useEffect } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import List from '../ui/list/list';
import ListItem from '../ui/list/list-item/list-item';
import styles from './autocomplete.module.scss';

type PlacesAutocompleteProps = {
  isLoaded: boolean;
};

const PlacesAutocomplete = ({
  isLoaded,
}: PlacesAutocompleteProps): JSX.Element => {
  const {
    ready,
    value,
    init,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    initOnMount: false,
    requestOptions: {
      language: 'us',
    },
    debounce: 300,
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }: google.maps.places.AutocompletePrediction) =>
    () => {
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log('📍 Coordinates: ', { lat, lng });
      });
    };

  useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [init, isLoaded]);

  return (
    <div
      className={styles.container}
      // ref={ref}
    >
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder='Select city'
      />
      {status === 'OK' && (
        <List>
          {data.map((suggestion) => {
            const {
              place_id,
              structured_formatting: { main_text },
            } = suggestion;

            return (
              <ListItem key={place_id} handleClick={handleSelect(suggestion)}>
                {main_text}
              </ListItem>
            );
          })}
        </List>
      )}
    </div>
  );
};

export default PlacesAutocomplete;
