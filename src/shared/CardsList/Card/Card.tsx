import React from 'react';
import styles from './card.less';
import { CardControls } from './CardControls';
import { CardMenu } from './CardMenu';

import { CardPreview } from './CardPreview';
import { CardTextContent } from './CardTextContent';

export function Card() {
  return (
    <li className={styles.card}>
      <CardTextContent className={styles.textContent} />
      <CardPreview className={styles.preview} />
      <CardMenu className={styles.menu} />
      <CardControls className={styles.controls} />
    </li>
  );
}
