import { Coord } from '../assets/types-data';

export const getBrowserLocation = (): Promise<Coord> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude: lat, longitude: lng } = position.coords;
        console.log(lat, lng);
        resolve({ lat, lng } as Coord);
      },
      (e) => {
        reject(e)
      },
      { enableHighAccuracy: true, timeout: 30000 }
    );
  });
};
