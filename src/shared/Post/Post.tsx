import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { CommentForm } from '../CommentForm/CommentForm';
import { CommentFormContainer } from '../CommentFormContainer/CommentFormContainer';
import styles from './post.less';
import { PostComments } from './PostComments/PostComments';

interface IPost {
  onClose?: () => void;
}
export function Post(props: IPost) {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        console.log(event.target,'Clicke outside the modal window!'); // Каждый клик после ререндера внутренних компонентов будет поподать сюда
        console.log(ref.current, ref.current?.contains(event.target))
        props.onClose?.();
        history.push('/');
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
      <h2>How to migrate a whole React.js web-app to Typescrypt</h2>
      <div className={styles.content}>
        <p>I started studying coding for 2 months, so sorry if I still don't understand a lot of things.

        I created a wen-app in React.js and Node.js. Unfortunately I discovered that some APIs and SDKs that I will have to use only work with typescripts.

        How can I convert all files to Tsx?

        I installed everything I need via npm, renamed the files to ts. yet visualcode detects errors everywhere, Also I had read that files could coexist in js. and ts. for a slower migration and instead i get: "You have both a tsconfig.json and a jsconfig.json. If you are using TypeScript please remove your jsconfig.json file" but if i remove jsconfing.json how can js.files properly work?

        Deleted jsconfig.json, now there's only tsconfing.json and I get:

        Error from chokidar (C:\): Error: EBUSY: resource busy or locked, lstat 'C:\hiberfil.sys'

        Module not found can't resolve style.css in src folder, I tried to find some help on stackoverflow and similar but nothing helpful.
        </p>
      </div>
      <CommentFormContainer mainComment={true} uncontrolled={false}/>
      <PostComments/>
    </div>
  ), node);
}