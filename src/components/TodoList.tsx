// src/components/TodoList.tsx
import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";
import AddTodoButton from "./AddTodoButton";

const TodoList: React.FC = () => {
  const todoContext = useContext(TodoContext);
  if (!todoContext) return null;

  const { todos } = todoContext;
  const activeTodos = todos.filter((t) => !t.completed);
  const doneTodos = todos.filter((t) => t.completed);

  return (
    <div>
      <h3 className="text-xl font-bold mt-4">Things to do</h3>
      {activeTodos.length === 0 && <p>No tasks left 🎉</p>}
      {activeTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}

      {/* Add todo button just below active todos */}
      <AddTodoButton />

      <h3 className="text-xl font-bold mt-6">Things done</h3>
      {doneTodos.length === 0 && <p>Nothing completed yet</p>}
      {doneTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
