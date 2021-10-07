import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo:React.FC<{}> = (props) => {
  const todosCtx = useContext(TodosContext)
  const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value

        if (enteredText.trim().length == 0){
          //throw an error
          return;
        }

        todosCtx.addTodo(enteredText)
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
