import React from "react";
import Todo from "./Todo";

const TodoList = ({ listTodos }) => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {listTodos.map((todo, index) => {
          return (
            <li>
              <Todo
                key={index}
                name={todo.name}
                description={todo.description}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
