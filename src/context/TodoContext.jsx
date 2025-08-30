import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text) {
      setTodos([...todos, { id: Date.now(), text, done: false }]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const refreshTodos = () => window.location.reload();

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, refreshTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
