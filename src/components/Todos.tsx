import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

interface ITodos {
    items: Todo[],
    onRemoveItem: (id:string)=>void
}

const Todos: React.FC<ITodos> = (props)=>{
    return <ul className={classes.todos}>
        {props.items.map((item)=>(
            <TodoItem onRemoveItem={props.onRemoveItem} key={item.id} id={item.id} text = {item.text} />
        ))}
    </ul>
}

export default Todos