import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CommentForm } from '../CommentForm/CommentForm';
import styles from './post.less';
import { PostComments } from './PostComments/PostComments';

interface IPost {
  onClose?: () => void;
}
export function Post(props: IPost) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node &&  ref.current?.contains(event.target)) {
        console.log(event.target,'CLICK IN !!');
      }
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        console.log(event.target,'click out');
        console.log(ref.current, ref.current?.contains(event.target))
       //  props.onClose?.();
      }
      
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);
  const node = document.querySelector('#modal_root');
  if (!node) return null;
  const mockComments = [
    {
      name: "Artur 1 ",
      time: "1 h ago",
      text: "This is a text comment 1, This is a text comment 1, This is a text comment 1, This is a text comment 1, This is a text comment 1",
      category: "League of Politicans",
    },
    {
      name: "Artur 2 ",
      time: "2 h ago",
      text: "This is a text comment 2 , This is a text comment 2  , This is a text comment 2 , This is a text comment 2 , This is a text comment 2 ",
      category: "League of Humorists",
      comments: [
        {
          name: "Artur 3 ",
          time: "3 h ago",
          text: "This is a text comment 3, This is a text comment 3 , This is a text comment 3, This is a text comment 3",
          category: "League of Novices",
          },
      ]
    },
    {
      name: "Artur 4",
      time: "4  h ago",
      category: "League of Programmers",
      text: "This is a text comment 4, This is a text comment 3 , This is a text comment 3, This is a text comment 4",
    },
  ]
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
      <CommentForm/>
      <PostComments comments={mockComments}/>
    
    </div>
  ), node);
}