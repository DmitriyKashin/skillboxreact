import * as React from 'react';
import styles from './Content.less';

interface IContentProps {
  children?: React.ReactNode,
}
export function Content({ children } : IContentProps) {
  return (
    <main className={styles.content}>
     {children}
    </main>
  )
}