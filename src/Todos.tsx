import React from "react";
import Todo from "./Todo";
import { List, SingleTodo } from "./interfaces";

export default function TodoList({ todos, handleChange }: List) {
  return todos.map((todo: SingleTodo, i: number) => {
    return (
      <Todo
        key={i}
        id={todo.id}
        ischecked={todo.ischecked}
        handleChange={handleChange}
        Description={todo.Description}
      />
    );
  });
}
