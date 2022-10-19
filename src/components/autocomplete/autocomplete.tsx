import { ChangeEvent, useEffect } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { City } from '../../assets/types-data';
import List from '../ui/list/list';
import ListItemFetch from '../ui/list/list-item-fetch/list-item-fetch';

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
      types: ['(cities)'],
      language: 'en',
    },
    debounce: 300,
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSelect = (city: City) => {
    setValue(`${city.name} | ${city.country}`, false);
    clearSuggestions();
  };

  useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [init, isLoaded]);

  return (
    <div className={styles.container}>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder='Select city'
      />
      {status === 'OK' && (
        <List>
          {data.map((suggestion) => {
            return (
              <ListItemFetch
                key={suggestion.place_id}
                handleClick={handleSelect}
                suggestion={suggestion}
              />
            );
          })}
        </List>
      )}
    </div>
  );
};

export default PlacesAutocomplete;
