import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  let staticData = [
    { name: "Finalize Todo APP!", decription: "First Digital Factory task" },
    { name: "Push the App in github", decription: "Second Task" },
  ];
  const [listTodos, setListTodos] = useState(staticData);

  return (
    <div className="App">
      <TodoList listTodos={listTodos} />
    </div>
  );
}

export default App;
