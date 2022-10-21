import { Coord } from '../assets/types-data';

export const geoBrowserLocation = (): Promise<Coord> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude: lat, longitude: lng } = position.coords;
        resolve({ lat, lng } as Coord);
      },
      () => {
        reject(null);
      },
      { enableHighAccuracy: true, timeout: 3000 }
    );
  });
};
