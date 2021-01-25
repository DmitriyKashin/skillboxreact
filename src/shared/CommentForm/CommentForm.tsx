import React, { ChangeEvent, FormEvent,Ref} from "react";
// import { useForm } from "react-hook-form";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './commentform.less';
import { values } from "../../../webpack.config";

interface ICommentForm {
  myRef?: Ref<HTMLTextAreaElement>,
  uncontrolled?: boolean,
  mainComment?: boolean,
  value: string,
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void,
  onSubmit: (data: any) => void,
  error?: string,
}

export function CommentForm({myRef, uncontrolled=true, mainComment=false, onChange, onSubmit, value, error}:ICommentForm) {
  // const {handleSubmit, errors} = useForm();
  return (
    <Formik
       initialValues={{ commentText: value}}
       validate={values => {
         const errors: {
           commentText?: string
         } = {};
         if (!values.commentText) {
           errors.commentText = 'Required';
         } else if (values.commentText.length<10) {
          errors.commentText = 'Min length is 10';
        }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         onSubmit(values);
         setSubmitting(false);
       }}
     >
       {({ isSubmitting, values, errors, handleChange, handleSubmit }) => (
        <form className={mainComment?styles.form:styles.hidden} onSubmit={handleSubmit}>
           <textarea 
           ref={myRef}
           name="commentText" 
           value={values.commentText}
           onChange={handleChange}
           className={styles.input} 
           aria-invalid={errors.commentText ? 'true' : 'false'}
           />
           {errors.commentText&& 
          (<div>
            {errors.commentText}
          </div>
          )}
           <button type="submit" className={styles.button} disabled={isSubmitting}>Comment</button>
          </form>
       )}
     </Formik>
  //   <form className={mainComment?styles.form:styles.hidden} onSubmit={handleSubmit(onSubmit)}>
  //   {uncontrolled
  //     ?<textarea ref={myRef} className={styles.input} />
  //     :<textarea ref={myRef} 
  //     //:<textarea ref={register} 
  //       name="commentField"
  //       value={value} 
  //       onChange={onChange} 
  //       className={styles.input} 
  //       aria-invalid={error ? 'true' : 'false'}
  //       />
  //   }
  //   {error&& 
  //     (<div>
  //       {error}
  //     </div>
  //     )}
  //   <button type="submit" className={styles.button}>Comment</button>
  // </form>
  )
}