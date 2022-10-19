import styles from './lang-menu.module.scss';
import { SlGlobe } from 'react-icons/sl';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useState } from 'react';
import List from '../ui/list/list';
import { Langs } from '../../assets/const';
import ListItem from '../ui/list/list-item/list-item';
import cx from 'classnames';
import { useOutsideClick } from '../../hooks/use-outside-click';
import { useDispatch, useSelector } from 'react-redux';
import { getLang } from '../../store/app-slice/app-selectors';
import { changeLang } from '../../store/app-slice/app-slice';
import { LangsType } from '../../assets/types-data';

function LangMenu(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick<HTMLDivElement>(() => setIsOpen(false));
  const lang = useSelector(getLang);
  const dispatch = useDispatch();

  const handleClick = (item: LangsType) => {
    setIsOpen(false);
    dispatch(changeLang(item));
  };
  return (
    <div ref={ref} className={cx(styles.menu, { [styles.open]: isOpen })}>
      <SlGlobe />
      <span>{lang.toUpperCase()}</span>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      {isOpen && (
        <List>
          {(Object.keys(Langs) as LangsType[]).map((item) => (
            <ListItem key={item} handleClick={() => handleClick(item)}>
              {item.toUpperCase()}
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}

export default LangMenu;
