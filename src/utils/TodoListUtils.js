const createTodo = (state, newTodo, setState) => {
  setState([...newTodo, ...state]);
};
function removeTodoByID(id, setState, state) {
  setState(state.filter((toDoItem) => toDoItem.id !== id));
}
const getTodoIndex = (id, state) => {
  let index;
  state.some((todo, i) => {
    if (todo.id === id) {
      return (index = i);
    }
  });
  return index;
};
const placeTodoAtTop = (id, state, setState) => {
  let index = getTodoIndex(id, state);
  setState(state.unshift(state.splice(index, 1)[0]));
};
const placeTodoAtEnd = (id, state, setState) => {
  let index = getTodoIndex(id, state);
  setState(state.push(state.splice(index, 1)[0]));
};
const toggleTodo = (id, finishedTodo, state, setState) => {
  !finishedTodo
    ? placeTodoAtEnd(id, state, setState)
    : placeTodoAtTop(id, state, setState);
  setState(
    state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, finished: !todo.finished };
      }
      return todo;
    })
  );
};

export {
  createTodo,
  getTodoIndex,
  placeTodoAtEnd,
  placeTodoAtTop,
  removeTodoByID,
  toggleTodo,
};
