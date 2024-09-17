import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo mess",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  upadateTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoContextProvider = ({ value, children }) => {
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
