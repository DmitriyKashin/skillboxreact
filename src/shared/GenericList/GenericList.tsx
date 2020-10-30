import * as React from 'react';
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
  return (
  <>
    {list.map(({As='div', text, onClick, className, id, href}) => (
      <As
        className={className?className.split(' ').map((el)  => (styles[el])).join(' '):''}
        onClick={() => onClick(id)}
        key={id}
        href={href}
        >
          {text}
      </As>
    ))}
  </>
  )
}