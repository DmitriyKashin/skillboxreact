import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CommentForm } from '../CommentForm/CommentForm';
import styles from './post.less';

interface IPost {
  onClose?: () => void;
}
export function Post(props: IPost) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        console.log(event.target,'click out');
        props.onClose?.();
      }
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);
  const node = document.querySelector('#modal_root');
  if (!node) return null;
  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
      <h2>Тут какой-то заголовок поста</h2>
      <div className={styles.content}>
        <p>Какой-то текст 1 </p>
        <p>Какой-то текст 1 </p>
        <p>Какой-то текст 1 </p>
        <p>Какой-то текст 1 </p>
      </div>
      <CommentForm/>
    </div>
  ), node);
}