import React from 'react';
import { ComplainIcon } from './ComplainIcon';
import { HideIcon } from './HideIcon';
import { MenuIcon } from './MenuIcon';
import { MessageIcon } from './MessageIcon';
import { SaveIcon } from './SaveIcon';
import { ShareIcon } from './ShareIcon';
import styles from './icons.less';

const Icons: { [key in keyof typeof EIcons]: any } = {
  menu: MenuIcon,
  complain: ComplainIcon,
  save: SaveIcon,
  message: MessageIcon,
  share: ShareIcon,
  hide: HideIcon,
}

interface IIconProps {
  size: number,
  name: EIcons,
}

export enum EIcons {
  menu='menu',
  complain='complain',
  save='save',
  message='message',
  share='share',
  hide='hide',
}

export  function Icon({size, name}: IIconProps) {
  const IconName = Icons[name];
  return  <IconName size={size}/>;
}