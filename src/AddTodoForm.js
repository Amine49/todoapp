import React, { useState } from "react";

export default function AddTodoForm({ createTodo }) {
  let createdTodo = { name: "", description: "", finished: false };
  const [newTodo, setNewTodo] = useState(createdTodo);
  let [inputName, setInputName] = useState("");
  let [inputDescription, setInputDescription] = useState("");
  const handleNameChange = (e) => {
    setInputName(e.target.value);
    createdTodo = { ...newTodo, name: e.target.value };
    setNewTodo(createdTodo);
  };
  const handleDescriptionChange = (e) => {
    createdTodo = { ...newTodo, description: e.target.value };
    console.log(createdTodo);
    setInputDescription(e.target.value);
    setNewTodo(createdTodo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", newTodo);
    inputName.length > 0 && createTodo([newTodo]);
    setInputName("");
    setInputDescription("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newTodo"> new Todo </label>
      <input
        type={"text"}
        placeholder={"Add new TODO"}
        id="newTodo"
        name="newTodo"
        value={inputName}
        onChange={handleNameChange}
      />
      <input
        type={"text"}
        placeholder={"Description"}
        id="newTodo"
        name="newTodo"
        value={inputDescription}
        onChange={handleDescriptionChange}
      />
      <button type="submit">Add Todo !</button>
    </form>
  );
}
