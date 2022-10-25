import { useJsApiLoader } from '@react-google-maps/api';
import LangMenu from './components/lang-menu/lang-menu';
import MenuWrapper from './components/wrappers/menu-wrapper/menu-wrapper';
import Table from './components/wrappers/table/table';
import AutocompleteWrap from './components/wrappers/autocomplete-wrap/autocomplete-wrap';
import { googleMapsApiKey } from './assets/const';
import './App.scss';

function App(): JSX.Element {
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey,
    libraries: ['places'],
    version: 'beta',
  });

  return (
    <div className='container'>
      <MenuWrapper>
        <LangMenu />
      </MenuWrapper>

      <AutocompleteWrap isLoaded={isLoaded} />

      {isLoaded && <Table />}
    </div>
  );
}

export default App;
