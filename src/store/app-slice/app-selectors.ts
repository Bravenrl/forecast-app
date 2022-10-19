import { Reducer } from '../../assets/const';
import { City } from '../../assets/types-data';
import { TypeRootState } from '../root-reducer';

export const getUser = (state: TypeRootState): City[] | [] =>
  state[Reducer.App].cities;

export const getUserIsLoading = (state: TypeRootState): string =>
  state[Reducer.App].lang;
