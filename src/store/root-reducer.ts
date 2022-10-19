import { combineReducers } from '@reduxjs/toolkit';
import { Reducer } from '../assets/const';
import { appReducer } from './app-slice/app-slice';

export const RootReducer = combineReducers({
  [Reducer.App]: appReducer,
});

export type TypeRootState = ReturnType<typeof RootReducer>;
