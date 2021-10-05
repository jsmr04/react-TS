import React from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

interface ITodoItem {
    id: string,
    text: string,
    onRemoveItem: (id: string)=>void
}

const TodoItem: React.FC<ITodoItem> = (props)=>{
    const { text, onRemoveItem, id } = props

    const onClickEvent = (event:React.MouseEvent)=>{
        onRemoveItem(id);
    }

    return <li onClick = {onClickEvent} className={classes.item}>{text}</li>
}

export default TodoItem