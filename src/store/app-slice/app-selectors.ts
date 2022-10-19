import { Reducer } from '../../assets/const';
import { City } from '../../assets/types-data';
import { TypeRootState } from '../root-reducer';

export const getCity = (state: TypeRootState): City[] | [] =>
  state[Reducer.App].cities;

export const getLang = (state: TypeRootState): string =>
  state[Reducer.App].lang;
