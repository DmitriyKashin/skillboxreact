import React, { ChangeEvent, FormEvent,Ref,useContext, useRef, useState } from "react";
import { commentContext } from "../../context/commentContext";
import styles from './commentform.less';

export function CommentForm({myRef, show=true}:{myRef?: Ref<HTMLTextAreaElement>, show?: boolean}) {
  const {value, onChange } = useContext(commentContext);
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }
  return (
    <form className={show?styles.form:styles.hidden} onSubmit={handleSubmit}>
      <textarea ref={myRef} value={value} onChange={handleChange} className={styles.input} />
      <button type="submit" className={styles.button}>Comment</button>
    </form>
  )
}