export interface SingleTodo {
  id: string;
  ischecked: boolean;
  Description: string;
}
export interface Task extends SingleTodo {
  handleChange: (id: string, action: string) => {};
}

export interface Input {
  setTodoList: React.Dispatch<React.SetStateAction<SingleTodo[]>>;
  todos: SingleTodo[];
}

export interface List {
  handleChange: (id: string, action: string) => {};
  todos: SingleTodo[];
}
