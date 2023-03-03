import React from "react";
import "./Todo.css";

const Todo = ({ name, description, removeTodo, finished, toggleTodo }) => {
  return (
    <div className="Todo">
      <h2 className={finished ? "Todo-task finished" : "Todo-task"}>{name}</h2>
      <h3>{description}</h3>
      <div className="Todo-buttons">
        <button onClick={() => removeTodo()}> X </button>
        <input
          type={"checkbox"}
          checked={finished}
          onChange={() => toggleTodo()}
        ></input>
      </div>
    </div>
  );
};

export default Todo;
