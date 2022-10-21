import usePlacesAutocomplete from 'use-places-autocomplete';
import { ChangeEvent, useEffect, useState } from 'react';
import { City } from '../../assets/types-data';
import List from '../ui/list/list';
import ListItemFetch from '../ui/list/list-item-fetch/list-item-fetch';
import SearchButton from '../ui/search-button/search-button';
import styles from './autocomplete.module.scss';
import { useDispatch } from 'react-redux';
import { addCity } from '../../store/app-slice/app-slice';
import { useTranslation } from 'react-i18next';

type PlacesAutocompleteProps = {
  isLoaded: boolean;
};

const PlacesAutocomplete = ({
  isLoaded,
}: PlacesAutocompleteProps): JSX.Element => {
  const dispatch = useDispatch();
  const [currentCity, setCurrentCity] = useState<City | null>(null);
   const {t} = useTranslation();
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
    setCurrentCity(null);
  };

  const handleSelect = (city: City) => {
    setValue(`${city.name} | ${city.country}`, false);
    setCurrentCity(city);
    clearSuggestions();
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (currentCity) {
      dispatch(addCity(currentCity));
    }
  };

  useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [init, isLoaded]);

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.container}>
        <input
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder={t('choose city')}
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
      <SearchButton type={'submit'} disabled={!currentCity} />
    </form>
  );
};

export default PlacesAutocomplete;
