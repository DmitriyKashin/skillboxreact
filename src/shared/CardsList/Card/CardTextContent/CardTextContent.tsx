import React from 'react';
import styles from './cardtextcontent.less';

interface IComponentWithClass{
  className? : string,
}

export function CardTextContent( {className} : IComponentWithClass) {
  return (
    <div className={className}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar}
            src="https://lh3.googleusercontent.com/ogw/ADGmqu_f9NU9ROp-ELQ_ujFvFE0867_OrRBO-_bdKNrn=s64-c-mo"
            alt="avatar"
          />
          <a href="#user-url" className={styles.username}>John Petrov</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>published&nbsp;</span>
          4 hours ago&nbsp;
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Title of our article. Title of our article 2. Title of our article 4.
          Title of our article. Title of our article 2. Title of our article 4.
        </a>
      </h2>
    </div>
  );
}
