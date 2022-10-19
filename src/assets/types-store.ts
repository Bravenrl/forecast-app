import { City, LangsType } from './types-data';

export type InitialState = {
  cities: City[] | [];
  lang: LangsType;
};
