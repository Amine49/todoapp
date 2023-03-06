import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import "../style/TodoList.css";
import staticData from "../mockData/staticData";
const TodoList = () => {
  const [listTodos, setListTodos] = useState(staticData);
  const createTodo = (newTodo) => {
    setListTodos([...newTodo, ...listTodos]);
  };
  function removeTodoByID(id) {
    setListTodos(listTodos.filter((toDoItem) => toDoItem.id !== id));
  }
  const getTodoIndex = (id) => {
    let index;
    listTodos.some((todo, i) => {
      if (todo.id === id) {
        return (index = i);
      }
    });
    return index;
  };
  const placeTodoAtTop = (id) => {
    let index = getTodoIndex(id);
    setListTodos(listTodos.unshift(listTodos.splice(index, 1)[0]));
  };
  const placeTodoAtEnd = (id) => {
    let index = getTodoIndex(id);
    setListTodos(listTodos.push(listTodos.splice(index, 1)[0]));
  };
  const toggleTodo = (id, finishedTodo) => {
    !finishedTodo ? placeTodoAtEnd(id) : placeTodoAtTop(id);
    setListTodos(
      listTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, finished: !todo.finished };
        }
        return todo;
      })
    );
  };
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
              removeTodo={() => removeTodoByID(todo.id)}
              finished={todo.finished}
              toggleTodo={() => toggleTodo(todo.id, todo.finished)}
            />
          </ul>
        );
      })}
      <AddTodoForm createTodo={createTodo} />
    </div>
  );
};

export default TodoList;
