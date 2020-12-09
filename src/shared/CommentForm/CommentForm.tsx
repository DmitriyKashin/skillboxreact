import React, { ChangeEvent, FormEvent,Ref,useContext, useRef, useState } from "react";
import { commentContext } from "../../context/commentContext";
import styles from './commentform.less';

export function CommentForm({myRef, uncontrolled=true, mainComment=false}:{myRef?: Ref<HTMLTextAreaElement>, uncontrolled?: boolean, mainComment?:boolean}) {
  const {value, onChange } = useContext(commentContext);
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }
  return (
    <form className={mainComment?styles.form:styles.hidden} onSubmit={handleSubmit}>
      {uncontrolled
        ?<textarea ref={myRef} className={styles.input} />
        :<textarea ref={myRef} value={value} onChange={handleChange} className={styles.input} />
      }
      <button type="submit" className={styles.button}>Comment</button>
    </form>
  )
}