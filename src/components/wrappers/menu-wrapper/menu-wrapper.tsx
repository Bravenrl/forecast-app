import { ReactNode } from 'react';
import styles from './menu-wrapper.module.scss';

type MenuWrapperProps = {
  children: ReactNode;
};

function MenuWrapper({ children }: MenuWrapperProps): JSX.Element {
  return <div className={styles.wrapper}>{children}</div>;
}

export default MenuWrapper;
