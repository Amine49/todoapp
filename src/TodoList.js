import React from "react";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        <li>
          <Todo
            name={"Finalize Todo APP!"}
            description={"First Digital Factory task"}
          />
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
