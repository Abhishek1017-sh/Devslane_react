// src/pages/Home.tsx
import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoList from "../components/TodoList";

const Home: React.FC = () => {
  const todoContext = useContext(TodoContext);
  if (!todoContext) return null;

  const refreshTodos = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="w-full mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">Things to get done</h2>
          </div>
          <div className="mt-4 sm:mt-0">
            <button
              onClick={refreshTodos}
              className="bg-yellow-500 text-white px-4 py-2 rounded font-medium"
            >
              Refresh
            </button>
          </div>
        </div>
        <TodoList />
      </div>
    </>
  );
};

export default Home;
