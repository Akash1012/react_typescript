import React, { useState } from "react";
import "./App.css";
import InputField from "./Components/inputField";
import { Todo } from "./Components/model/model";
import TodoList from "./Components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent): void => {
    e.preventDefault();
    if (todo.trim() === "") {
      return;
    }
    setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    setTodo("");
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField setTodo={setTodo} todo={todo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
