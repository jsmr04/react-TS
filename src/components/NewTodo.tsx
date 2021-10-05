import React, { useRef } from "react";
import classes from "./NewTodo.module.css";


const NewTodo:React.FC<{onAddTodo: (text:string)=>void}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value

        if (enteredText.trim().length == 0){
          //throw an error
          return;
        }

        props.onAddTodo(enteredText)
    };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label>Todo text</label>
      <input type="text" ref={todoTextInputRef} />
      <button>Todo text</button>
    </form>
  );
};

export default NewTodo;
