import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import "../style/TodoList.css";
import staticData from "../mockData/staticData";
import { createTodo, removeTodoByID, toggleTodo } from "../utils/TodoListUtils";
const TodoList = () => {
  const [listTodos, setListTodos] = useState(staticData);

  return (
    <div className="TodoList">
      <h1> Todo List </h1> <span> A Digital Factory React App</span>
      {listTodos.map((todo, index) => {
        todo.id = uuid();
        return (
          <ul key={todo.id}>
            <Todo
              name={todo.name}
              description={todo.description}
              removeTodo={() =>
                removeTodoByID(todo.id, setListTodos, listTodos)
              }
              finished={todo.finished}
              toggleTodo={() =>
                toggleTodo(todo.id, todo.finished, listTodos, setListTodos)
              }
            />
          </ul>
        );
      })}
      <AddTodoForm
        createTodo={(newTodo) => createTodo(listTodos, newTodo, setListTodos)}
      />
    </div>
  );
};

export default TodoList;
