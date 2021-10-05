import { useState } from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import './App.css';
import Todo from "./models/todo";

const DATA = ["Learn React", "Learn TypeScript"]

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (newTodo: string)=>{
    const todo = new Todo(newTodo)
    setTodos((prevTodos)=>{
      return prevTodos.concat(todo)
    })
  }

  const removeTodoHandler = (todoId: string)=>{
    //const todo = new Todo(newTodo)
    setTodos((prevTodos)=>{
      return prevTodos.filter(x=>x.id !== todoId)
    })
  }


  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos onRemoveItem={removeTodoHandler} items = {todos}  />
    </div>
  );
}

export default App;
