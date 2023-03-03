import React from "react";
import "./Todo.css";

const Todo = ({ name, description, removeTodo, finished, toggleTodo }) => {
  return (
    <div>
      <h2 className={finished ? "finished" : ""}>{name}</h2>
      <h3>{description}</h3>
      <button onClick={() => removeTodo()}> X </button>
      <input
        type={"checkbox"}
        checked={finished}
        onChange={() => toggleTodo()}
      ></input>
    </div>
  );
};

export default Todo;
