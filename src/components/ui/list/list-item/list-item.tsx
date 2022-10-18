type ListItemProps = {
  children: string;
  handleClick: () => void;
};

function ListItem({ children, handleClick }: ListItemProps): JSX.Element {
  return (
    <li onClick={handleClick}>
      {children}
    </li>
  );
}

export default ListItem;
