import { Reducer } from '../../assets/const';
import { City, LangsType } from '../../assets/types-data';
import { TypeRootState } from '../store';


export const getCities = (state: TypeRootState): City[] | [] =>
  state[Reducer.Data].cities;

export const getLang = (state: TypeRootState): LangsType =>
  state[Reducer.App].lang;
