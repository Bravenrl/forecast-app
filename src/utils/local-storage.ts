import { City } from '../assets/types-data';

export const getCityLocalStorage = (): City[] | [] => {
  const cities = localStorage.getItem('cities');
  return cities ? JSON.parse(cities) : [];
};

export const setCityLocalStorage = (cities: City[]) => {
  localStorage.setItem('cities', JSON.stringify(cities));
};

export const removeUserLocalStorage = () => {
  localStorage.removeItem('cities');
};
