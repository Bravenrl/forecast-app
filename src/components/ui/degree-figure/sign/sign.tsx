import { Unit } from '../../../../assets/types-data';

type SignProps = {
  temp: number;
  unit: Unit;
};

function Sign({ temp, unit }: SignProps): JSX.Element | null {
  const isMetric = unit === 'metric';

  if (temp === 0 || !isMetric) return null;
  return <span>{temp > 0 ? '+' : '-'}</span>;
}

export default Sign;
