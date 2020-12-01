import React, { ChangeEvent, FormEvent,useContext,useRef, useState } from "react";
import { commentContext } from "../../context/commentContext";
import styles from './commentform.less';

export function CommentForm() {
  const ref = useRef<HTMLTextAreaElement>(null);
  const {value, onChange } = useContext(commentContext);
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea value={value} onChange={handleChange} className={styles.input} />
      <button type="submit" className={styles.button}>Comment</button>
    </form>
  )
}