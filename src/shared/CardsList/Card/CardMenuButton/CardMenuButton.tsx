import React from 'react';
import { Icon, EIcons } from '../../../Icons/Icon';
import styles from './cardmenubutton.less';

interface IComponentWithClass{
  className? : string,
}


export function CardMenuButton( {className} : IComponentWithClass) {
  return (
    <div className={className}>
      <button className={styles.menuButton}>
        <Icon  name={EIcons.menu} size={16}/>
      </button>
    </div>
  );
}
