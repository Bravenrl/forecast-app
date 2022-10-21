import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slice } from '../../assets/const';
import { City, Unit } from '../../assets/types-data';

const initialState: { cities: City[] } = {
  cities: [],
};

export const dataSlice = createSlice({
  name: Slice.Data,
  initialState,
  reducers: {
    addCity: (state, { payload }: PayloadAction<City>) => {
      if (state.cities.find((el) => el.placeId === payload.placeId)) {
        return;
      }

      state.cities = [...state.cities, payload];
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
    },
    removeCity: (state, { payload }: PayloadAction<string>) => {
      state.cities = state.cities.filter((city) => city.placeId !== payload);
    },
  },
});

export const {
  reducer: dataReducer,
  actions: { changeCityUnit, addCity, removeCity },
} = dataSlice;
