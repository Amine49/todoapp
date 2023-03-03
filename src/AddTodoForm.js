import React, { useState } from "react";

export default function AddTodoForm({ createTodo }) {
  let createdTodo = { name: "", description: "", finished: false };
  const [newTodo, setNewTodo] = useState(createdTodo);
  let [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
    createdTodo.name = e.target.value;
    setNewTodo([createdTodo]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createdTodo.name = "";
    inputValue.length > 0 && createTodo(newTodo);
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newTodo"> new Todo </label>
      <input
        type={"text"}
        placeholder={"Add new TODO"}
        id="newTodo"
        name="newTodo"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Add Todo !</button>
    </form>
  );
}
