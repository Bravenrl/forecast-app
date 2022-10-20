import { useJsApiLoader } from '@react-google-maps/api';
import LangMenu from './components/lang-menu/lang-menu';
import MenuWrapper from './components/wrappers/menu-wrapper/menu-wrapper';
import Table from './components/wrappers/table/table';
import './App.scss';
import AutocompleteWrap from './components/wrappers/autocomplete-wrap/autocomplete-wrap';
import { useSelector } from 'react-redux';
import { getLang } from './store/app-slice/app-selectors';

export const googleMapsApiKey = process.env.REACT_APP_API_KEY ?? '';

function App(): JSX.Element {
  const lang = useSelector(getLang);

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

      <Table isLoaded={isLoaded} />
    </div>
  );
}

export default App;
