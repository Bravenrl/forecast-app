import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slice } from '../../assets/const';
import { City, LangsType } from '../../assets/types-data';
import { InitialState } from '../../assets/types-store';
import {
  getCityLocalStorage,
  setCityLocalStorage,
} from '../../utils/local-storage';

const initialState: InitialState = {
  cities: getCityLocalStorage(),
  lang: 'en',
};

export const appSlice = createSlice({
  name: Slice.App,
  initialState,
  reducers: {
    changeLang: (state, { payload }: PayloadAction<LangsType>) => {
      state.lang = payload;
    },
    addCity: (state, { payload }: PayloadAction<City>) => {
      if (state.cities.find((el) => el.placeId === payload.placeId)) {
        return;
      }

      state.cities = [...state.cities, payload];
      setCityLocalStorage(state.cities);
    },
    changeCityMetric: (state, { payload }: PayloadAction<City>) => {
      state.cities = state.cities.map((city) =>
        city.placeId === payload.placeId
          ? { ...city, metric: payload.metric }
          : city
      );
      setCityLocalStorage(state.cities);
    },
  },
});

export const { reducer: appReducer, actions: {changeCityMetric, changeLang, addCity} } = appSlice;
