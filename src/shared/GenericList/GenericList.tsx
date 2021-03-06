import * as React from 'react';
import { Icon, EIcons } from '../Icons/Icon';
import styles from './genericlist.less';



interface IMyListProps {
  list :IItem[];
  // onClick: (id: string) => void;
}

interface IItem {
  value: string;
  id: string;
  onClick: (id: string) => void;
}
interface IGenericListProps {
  list :IGItem[];
}

interface IGItem {
  id: string;
  text: string;
  onClick: (id: string) => void;
  className?: string;
  As?: 'a' | 'li' | 'button' | 'div';
  href?: string;
  icon?: EIcons;
}


export function MyList({ list }: IMyListProps) {
  return (
    <ul>
       {list.map((item) => (
        // <li onClick={() => onClick(item.id)} key={item.id}>{item.value}</li>
        <li key={item.id} onClick={() => item.onClick(item.id)}>{item.value}</li>
       ))}
    </ul>
  )
}


export function GenericList({list}: IGenericListProps) {
  const NOOP = () => {};
  return (
  <>
    {list.map(({As='div', text, onClick=NOOP, className, id, href, icon}) => (
      <As
        className={className?className.split(' ').map((el)  => (styles[el])).join(' '):''}
        onClick={() => onClick(id)}
        key={id}
        href={href}
        >
          {icon && (
            <Icon name={icon} size={14} />
          )}
          {text}
      </As>
    ))}
  </>
  )
}