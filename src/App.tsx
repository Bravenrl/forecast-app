import { useJsApiLoader } from '@react-google-maps/api';
import './App.scss';
import Autocomplete from './components/autocomplete/autocomplete';
import SearchButton from './components/ui/SearchButton/search-button';
import AutocompleteWrap from './components/wrappers/autocomplete-wrap/autocomplete-wrap';

export const googleMapsApiKey = process.env.REACT_APP_API_KEY ?? '';

function App(): JSX.Element {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey,
    libraries: ['places'],
  });

  return (
    <div className='container'>
      <AutocompleteWrap>
        <Autocomplete isLoaded={isLoaded} />
        <SearchButton />
      </AutocompleteWrap>
      {/* <LangDropdown /> */}
      {/* <CityForm />
      <Table /> */}
    </div>
  );
}

export default App;
