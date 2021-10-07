import React from "react";
import classes from "./TodoItem.module.css";

interface ITodoItem {
  // id: string,
  text: string;
  onRemoveItem: () => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const { text, onRemoveItem } = props;

  return (
    <li onClick={onRemoveItem} className={classes.item}>
      {text}
    </li>
  );
};

export default TodoItem;
