import React, { useState } from "react";
import "../style/AddTodoForm.css";

export default function AddTodoForm({ createTodo }) {
  let createdTodo = { name: "", description: "", finished: false };
  const [newTodo, setNewTodo] = useState(createdTodo);
  let [inputName, setInputName] = useState("");
  let [inputDescription, setInputDescription] = useState("");
  const handleInputChange = (e, input, setInput) => {
    setInput(e.target.value);
    createdTodo = { ...newTodo, [input]: e.target.value };
    setNewTodo(createdTodo);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    inputName.length > 0 && createTodo([newTodo]);
    setInputName("");
    setInputDescription("");
  };
  return (
    <form className="AddTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="newTodo"> new Todo </label>
      <input
        type={"text"}
        placeholder={"Add new TODO"}
        id="newTodo"
        name="newTodo"
        value={inputName}
        onChange={(e) => handleInputChange(e, "name", setInputName)}
      />
      <input
        type={"text"}
        placeholder={"Description"}
        id="newTodo"
        name="newTodo"
        value={inputDescription}
        onChange={(e) =>
          handleInputChange(e, "description", setInputDescription)
        }
      />
      <button type="submit">Add Todo !</button>
    </form>
  );
}
