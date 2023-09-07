import React, { useEffect } from "react";
import InputTodo from "./InputTodo";
import TodoList from "./Todos";
import { useState } from "react";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const handleChange = (id, action) => {
    switch (action) {
      case "delete":
        let filterdTodoList = todoList.filter(
          (el) => el.id !== id || !el.ischecked
        );
        setTodoList(filterdTodoList);
        localStorage.setItem("todoList", JSON.stringify(filterdTodoList));
        break;
      case "toggle":
        const filterdTodo = todoList.map((el) => {
          if (el.id === id) {
            return { ...el, ischecked: !el.ischecked };
          }
          return el;
        });
        setTodoList(filterdTodo);
        localStorage.setItem("todoList", JSON.stringify(filterdTodo));
        break;
      case "removeAll":
        let remainList = todoList.filter((el) => !el.ischecked);
        setTodoList(remainList);
        localStorage.setItem("todoList", JSON.stringify(remainList));
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const todoLists = JSON.parse(localStorage.getItem("todoList"));
    if (todoLists) {
      setTodoList(todoLists);
    }
  }, []);

  return (
    <div className="App">
      <h1>Make your wishlist Today!!</h1>
      <InputTodo setTodoList={setTodoList} todos={todoList} />
      <button
        onClick={() => handleChange(null, "removeAll")}
        className={todoList.length ? "delete-all" : "delete-all dis-btn"}
      >
        Delete All
      </button>
      <TodoList handleChange={handleChange} todos={todoList} />
    </div>
  );
}
