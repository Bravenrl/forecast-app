import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Slice } from '../../assets/const';
import { LangsType } from '../../assets/types-data';

const initialState: { lang: LangsType } = {
  lang: 'en',
};

export const appSlice = createSlice({
  name: Slice.App,
  initialState,
  reducers: {
    changeLang: (state, { payload }: PayloadAction<LangsType>) => {
      state.lang = payload;
    },
  },
});

export const {
  reducer: appReducer,
  actions: { changeLang },
} = appSlice;
