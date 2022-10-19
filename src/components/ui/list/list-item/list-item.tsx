import { ReactNode } from 'react';

type ListItemFetchProps = {
  children: ReactNode;
  handleClick: () => void;
};

function ListItemFetch({
  children,
  handleClick,
}: ListItemFetchProps): JSX.Element | null {
  return (
    <li tabIndex={0} onClick={handleClick}>
      {children}
    </li>
  );
}

export default ListItemFetch;
