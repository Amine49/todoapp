import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import "./TodoList.css";

const TodoList = () => {
  let staticData = [
    {
      name: "List my TODOs",
      description: "First Digital Factory task",
      finished: false,
    },
    {
      name: "Change a TODO state",
      description: "Second Digital Factory task",
      finished: false,
    },
    {
      name: "Detail a TODO",
      description: "Third Digital Factory task",
      finished: false,
    },
    {
      name: "Add a new TODO",
      description: "Fourth Digital Factory task",
      finished: false,
    },
    {
      name: "Configure Docker",
      description: "Fifth Digital Factory task",
      finished: false,
    },
    {
      name: "Push the app on GitHub",
      description: "Last Digital Factory task",
      finished: false,
    },
  ];
  const [listTodos, setListTodos] = useState(staticData);
  const createTodo = (newTodo) => {
    setListTodos([...listTodos, ...newTodo]);
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
  const placeTodoAtEnd = (id) => {
    let index = getTodoIndex(id);
    setListTodos(listTodos.push(listTodos.splice(index, 1)[0]));
  };
  const toggleTodo = (id) => {
    placeTodoAtEnd(id);
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
              toggleTodo={() => toggleTodo(todo.id)}
            />
          </ul>
        );
      })}
      <AddTodoForm createTodo={createTodo} />
    </div>
  );
};

export default TodoList;
