import styles from './lang-menu.module.scss';
import { SlGlobe } from 'react-icons/sl';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useState } from 'react';
import List from '../ui/list/list';
import { Langs } from '../../assets/const';
import ListItem from '../ui/list/list-item/list-item';
import cx from 'classnames';

type LangMenuProps = {};

function LangMenu({}: LangMenuProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cx(styles.menu, { [styles.open]: isOpen })}>
      <SlGlobe />
      <span>{'en'.toUpperCase()}</span>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      {isOpen && (
        <List>
          {Object.keys(Langs).map((item) => (
            <ListItem key={item} handleClick={() => {}}>
              {item.toUpperCase()}
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}

export default LangMenu;
