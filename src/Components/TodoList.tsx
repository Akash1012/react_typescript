import React from "react";
import "./style.css";
import { Todo } from "./model/model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = (props) => {
  const { todos, setTodos } = props;
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
