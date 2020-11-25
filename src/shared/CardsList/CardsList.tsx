import React from 'react';
import { postsContext } from '../../context/postsContext';
import { Card } from './Card/Card';
import styles from './cardslist.less';

export function CardsList() {
  const posts = React.useContext(postsContext);
  console.log(posts,'render posts');
  return (
    <ul className={styles.cardsList}>
      {
      posts.length ?
        posts.map(({text, id}) => (
          <Card text={text} key={id}/>
        ))
      :
       <Card text={'No posts loaded, this is a plug'}/>
      }
      
    </ul>
  );
}
