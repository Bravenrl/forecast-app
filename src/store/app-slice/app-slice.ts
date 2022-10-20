import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slice } from '../../assets/const';
import { City, LangsType, Unit } from '../../assets/types-data';
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
    changeCityUnit: (
      state,
      { payload }: PayloadAction<{ placeId: string; unit: Unit }>
    ) => {
      state.cities = state.cities.map((city) =>
        city.placeId === payload.placeId
          ? { ...city, unit: payload.unit }
          : city
      );
      setCityLocalStorage(state.cities);
    },
  },
});

export const {
  reducer: appReducer,
  actions: { changeCityUnit, changeLang, addCity },
} = appSlice;
