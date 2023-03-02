import React from "react";

const Todo = ({ name, description }) => {
  return (
    <div>
      <button>Modifier</button>
      <button>X</button>
      <h2>{name}</h2>
      <h4>{description}</h4>
    </div>
  );
};

export default Todo;
