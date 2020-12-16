import React, { ChangeEvent, FormEvent,Ref,useContext, useRef, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { RootState, updateComment } from "../../store/reducer";
import { CommentForm } from "../CommentForm/CommentForm";
// import { commentContext } from "../../context/commentContext";
import styles from './commentform.less';

export function CommentFormContainer({myRef, uncontrolled=true, mainComment=false}:{myRef?: Ref<HTMLTextAreaElement>, uncontrolled?: boolean, mainComment?:boolean}) {
  
  /*
  const store = useStore<RootState>();
  const value = store.getState().commentText;
  */
 const value = useSelector<RootState, string>(state => state.commentText);
 const dispatch = useDispatch();


  // const { onChange } = useContext(commentContext);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }
  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    // onChange(event.target.value);
    dispatch(updateComment(event.target.value));
  }
  return (
    <CommentForm 
      myRef = {myRef}
      uncontrolled = {uncontrolled}
      mainComment  = {mainComment}
      onChange = {handleChange}
      onSubmit = {handleSubmit}
      value = {value}
    />
  
  )
}