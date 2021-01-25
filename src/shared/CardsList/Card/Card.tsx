import React from 'react';
import styles from './card.less';
import { CardControls } from './CardControls';
import { CardMenu } from './CardMenu';

import { CardPreview } from './CardPreview';
import { CardTextContent } from './CardTextContent';

export function Card({text, title} : {text: string, title?:string}) {
  return (
    <li className={styles.card}>
      <CardTextContent className={styles.textContent} text={text} title={title} />
      <CardPreview className={styles.preview} />
      <CardMenu className={styles.menu} />
      <CardControls className={styles.controls} />
    </li>
  );
}
