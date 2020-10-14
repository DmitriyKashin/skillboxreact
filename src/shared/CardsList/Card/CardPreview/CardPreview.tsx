import React from 'react';
import styles from './cardpreview.less';

interface IComponentWithClass{
  className? : string,
}

export function CardPreview( {className} : IComponentWithClass) {
  return (
    <div className={className}>
      <img className={styles.previewImg}
      src="https://i.pinimg.com/originals/e3/76/a7/e376a7f0d7ee2efe7e822e72565e5597.jpg" />
    </div>
  );
}
