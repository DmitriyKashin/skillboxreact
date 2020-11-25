import * as React from 'react';
import styles from './SearchBlock.less';

interface ISearchBlockProps {
  token?: string
}
export function SearchBlock() {
  return (
    <div className={styles.searchBlock}>
     Search Block
    </div>
  )
}