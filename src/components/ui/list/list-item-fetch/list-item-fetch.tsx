import { useEffect, useState } from 'react';
import { getWeather } from '../../../../api/service';
import { City, CurrentWeatherData } from '../../../../assets/types-data';

type ListItemFetchProps = {
  suggestion: google.maps.places.AutocompletePrediction;
  handleClick: (city: City) => void;
};

function ListItemFetch({
  suggestion: {
    structured_formatting: { main_text, secondary_text },
  },
  handleClick,
}: ListItemFetchProps): JSX.Element | null {
  const [data, setData] = useState<null | CurrentWeatherData>(null);

  useEffect(() => {
    getWeather(main_text)
      .then(({ data }) => {
        setData(data);
      })
      .catch(() => setData(null));
  }, [main_text]);

  if (!data) return null;

  return (
    <li
      tabIndex={0}
      onClick={() =>
        handleClick({
          name: main_text,
          country: data.sys.country,
          coord: data.coord,
          metric: 'metric',
        })
      }
    >{`${main_text} | ${data.sys.country}`}</li>
  );
}

export default ListItemFetch;
