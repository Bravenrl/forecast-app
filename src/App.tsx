import { useJsApiLoader } from '@react-google-maps/api';
import LangMenu from './components/lang-menu/lang-menu';
import MenuWrapper from './components/wrappers/menu-wrapper/menu-wrapper';
import Table from './components/wrappers/table/table';
import './App.scss';
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
      <MenuWrapper>
        <LangMenu />
      </MenuWrapper>

      <AutocompleteWrap isLoaded={isLoaded} />

      <Table isLoaded={isLoaded} />
    </div>
  );
}

export default App;
