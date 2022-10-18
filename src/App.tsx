import { useJsApiLoader } from '@react-google-maps/api';
import './App.scss';
import Autocomplete from './components/autocomplete/autocomplete';
import LangMenu from './components/lang-menu/lang-menu';
import SearchButton from './components/ui/SearchButton/search-button';
import AutocompleteWrap from './components/wrappers/autocomplete-wrap/autocomplete-wrap';
import MenuWrapper from './components/wrappers/menu-wrapper/menu-wrapper';

export const googleMapsApiKey = process.env.REACT_APP_API_KEY ?? '';

function App(): JSX.Element {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey,
    libraries: ['places'],
  });

  return (
    <div className='container'>
      <MenuWrapper>
        <LangMenu />
      </MenuWrapper>

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
