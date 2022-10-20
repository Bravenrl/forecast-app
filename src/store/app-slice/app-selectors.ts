import { Reducer } from '../../assets/const';
import { City, LangsType } from '../../assets/types-data';
import { TypeRootState } from '../root-reducer';

export const getCities = (state: TypeRootState): City[] | [] =>
  state[Reducer.App].cities;

export const getLang = (state: TypeRootState): LangsType =>
  state[Reducer.App].lang;
