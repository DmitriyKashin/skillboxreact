import React, { ChangeEvent, FormEvent,Ref} from "react";
import styles from './commentform.less';

interface ICommentForm {
  myRef?: Ref<HTMLTextAreaElement>,
  uncontrolled?: boolean,
  mainComment?: boolean,
  value: string,
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void,
  onSubmit: (event: FormEvent) => void,
}

export function CommentForm({myRef, uncontrolled=true, mainComment=false, onChange, onSubmit, value}:ICommentForm) {
  return (
    <form className={mainComment?styles.form:styles.hidden} onSubmit={onSubmit}>
      {uncontrolled
        ?<textarea ref={myRef} className={styles.input} />
        :<textarea ref={myRef} value={value} onChange={onChange} className={styles.input} />
      }
      <button type="submit" className={styles.button}>Comment</button>
    </form>
  )
}