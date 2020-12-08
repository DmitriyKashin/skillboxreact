import React, { MouseEvent, Ref, RefObject, useEffect, useRef, useState } from 'react';
import { CommentForm } from '../../CommentForm/CommentForm';
import { EIcons, Icon } from '../../Icons/Icon';
import styles from './postcomments.less';

type comment = {
  name: string;
  time: string;
  text: string;
  category: string;
  ref?: any;
  // ref?: RefObject<HTMLTextAreaElement>;
  visibleComment?: boolean;
  comments?: Array<comment>
}

interface IPostComments {
 comments: Array<comment>,
}

export function PostComments({comments}: IPostComments) {
  comments.map((comment,index) => {
    comments[index].ref = useRef<HTMLTextAreaElement>(null);
    comments[index].visibleComment = false;
  })
  const [stateComments, setComments] = useState(comments);
  const [activeComment, setActiveComment] = useState<null | number>(null);

  useEffect(() => {
    if (typeof activeComment === 'number' && typeof stateComments[activeComment] !== 'undefined' && typeof stateComments[activeComment] !== null) {
      stateComments[activeComment].ref.current.value = '123';
      stateComments[activeComment].ref.current.parentNode.style.display == "flex" ?  stateComments[activeComment].ref.current.parentNode.style.display = "none" :  stateComments[activeComment].ref.current.parentNode.style.display = "flex"; // через statе не работает
      stateComments[activeComment].ref.current.focus();
    }
  }, [activeComment]);
  const handleReplyClick = (index: number) => {
    /* Это не работает. Срабатывает click outside в файле Post.tsx при любом вызове хука setComments  c новыми comments - попап закрывается. При этом если убрать этот сет, то ничего не закрывается и все работает кооректно (хотя клик и так и так есть)
    let myComments = [...stateComments];
    myComments[index].visibleComment = !myComments[index].visibleComment;
    setComments(myComments);
    */
  }
  return (
    <div>
      {stateComments.map(({name, time, text, comments, category, visibleComment = false, ref}, index) => {
        // let textAreaRef = useRef<HTMLTextAreaElement>(null);
        // Это тоже работает. Можно ли использовать рефы в циклах? 
        return (
          <div className={styles.commentContainer}key={Math.random()}>
            <div className={styles.leftCommentBlock}>
              <div className={styles.karmaCounter}>
                <button className={styles.up}>
                  <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4"/>
                  </svg>
                </button>
                <span className={styles.karmaValue}></span>
                <button className={styles.down}>
                  <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#C4C4C4"/>
                  </svg>
                </button>
              </div>
              <div className={styles.greyPillar}></div>
            </div>
            <div className={styles.rightCommentBlock}>
              <div className={styles.metaData}>
                <div className={styles.userLink}>
                  <img className={styles.avatar}
                    src="https://cf.bstatic.com/xdata/images/hotel/square200/185864689.jpg?k=5eb72cfa721a10530a817680daf950124600cc58cbf9930cfe5f5439254e3ad8&o="
                    alt="avatar"
                  />
                  <a href="#user-url" className={styles.username}>{name}</a>
                </div>
                <div className={styles.createdAt}>
                  <span className={styles.publishedLabel}>published&nbsp;</span>
                  {time}
                </div>
                <div className={styles.category}>
                  {category}
                </div>
              </div>
              <div className={styles.commentText}>
                <p>{text}</p>
                <span className={styles.commentAction} data-test={`${Math.random()}`} onClick={(e) => {
                    let myComments = [...stateComments];
                    myComments[index].visibleComment = !myComments[index].visibleComment;
                    setComments(myComments);
                    setActiveComment(index);
                  }
                  }>
                  <Icon name={EIcons.message} size={14} />
                  <span data-test={`${Math.random()}`}>Reply</span>
                </span>
                <span className={styles.commentAction}>
                  <Icon name={EIcons.share} size={14} />
                  <span>Share</span>
                </span>
                <span className={styles.commentAction}>
                  <Icon name={EIcons.complain} size={14} />
                  <span>Complain</span>
                </span>
              </div>
              <CommentForm myRef={ref} show={visibleComment}/>
              {comments && 
                <div className={styles.innerComment}>
                  <PostComments comments={comments}/>
                </div>
              }
            </div>
          </div>)
        }
      )}
    </div>
  );
}