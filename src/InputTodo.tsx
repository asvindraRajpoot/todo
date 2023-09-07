import React, { useEffect, useRef, useState } from "react";
import { Input } from "./interfaces";

function InputTodo({ setTodoList, todos }: Input) {
  const ref = useRef<HTMLInputElement | null>(null);
  const [todo, setTodo] = useState({
    id: "",
    ischecked: false,
    Description: "",
  });
  const [text, setText] = useState("");

  const handleClick = () => {
    if (text) {
      setTodo({
        ...todo,
        id: Math.floor(Math.random() * 100).toString(),
        Description: text,
      });
      if (ref.current != null) {
        ref.current.value = "";
      }
    }
  };
  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (todo.Description !== "") {
      setTodoList([...todos, todo]);
      localStorage.setItem("todoList", JSON.stringify([...todos, todo]));
    }
  }, [todo]);

  return (
    <div className="inputTodo">
      <input
        onChange={handleChange}
        type="textarea"
        placeholder="Please enter the text."
        required
        ref={ref}
      />
      <button onClick={handleClick} className="crosshair">
        Add
      </button>
    </div>
  );
}

export default InputTodo;
