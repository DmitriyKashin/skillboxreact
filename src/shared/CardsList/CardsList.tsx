import Axios from 'axios';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { postsContext } from '../../context/postsContext';
import { RootState } from '../../store/reducer';
import { Card } from './Card/Card';
import styles from './cardslist.less';

export function CardsList() {
  const token = useSelector<RootState>(state => state.token);
  const [risingPosts, setRisingPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextAfter, setNextAfter] = useState('');
  const [errorLoading, setErrorLoading] = useState('');
  const [loadedCount, setLoadedCount] = useState(0);

  const bottomDiv = useRef<HTMLDivElement>(null);

  async function load() {
    setLoading(true);
    setErrorLoading('');
    try {
      const {data: {data: { after, children }}}  = await Axios.get('https://oauth.reddit.com/hot/',
      {
        headers: {
          Authorization: `bearer ${token}`
        },
        params: {
          limit: 10,
          after: nextAfter,
        }
      })
      setRisingPosts(prevChildren =>  prevChildren.concat(...children));
      setLoadedCount((loadedCount) =>  {
        if (loadedCount == 2) return 1;
        return loadedCount + 1;
      });
      setNextAfter(after);
    } 
    catch (error) {
      setErrorLoading(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    if (!token || token == 'undefined' || token=='false') return;
    console.log(token,'token is here');
    console.log('here!');
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && loadedCount<2) {
        console.log('intersect is true');
        load();
      }
    }, {
      rootMargin: '10px'
    });
    if (bottomDiv.current) {
      observer.observe(bottomDiv.current);
    }
    return () => {
      if (bottomDiv.current) {
        observer.unobserve(bottomDiv.current);
      }
    }
  }, [bottomDiv.current, token, nextAfter]);
  const posts = React.useContext(postsContext);
  console.log(posts,'render posts');
  return (
    <ul className={styles.cardsList}>
      {/* {
      posts.length ?
        posts.map(({text, id}) => (
          <Card text={text} key={id}/>
        ))
      :
       <Card text={'No posts loaded, this is a plug'}/>
      } */}
      {
       risingPosts.length === 0 && !loading && !errorLoading && (
         <div>There are no posts. Login to see it ;)</div>
       )
      }
      {
        risingPosts.map(({data:{text, id, title}}) => (
            <Card text={title} key={id} title={title}/>
          ))
      }
      <div ref={bottomDiv}>

      {loading && 'Загрузка..'}
      {loadedCount>=2 && (
        <button onClick={load} className={styles.loadMore}>LOAD MORE!</button>
      )}
      {errorLoading && (
         <div role="alert" style={{textAlign: 'center'}}>
           {errorLoading}
         </div>
      )
      }

      </div>

    </ul>
  );
}
