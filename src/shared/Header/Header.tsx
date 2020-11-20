import * as React from 'react';
import styles from './header.less';
import { SearchBlock } from './SearchBlock/SearchBlock';
import { ThreadTitle } from './ThreadTitle/ThreadTitle';
import { SortBlock } from './SortBlock/SortBlock';
import { UserBlock } from './UserBlock/UserBlock';


export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
      <UserBlock />
    </header>
  )
}