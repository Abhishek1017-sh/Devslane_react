import React from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoItem({ todo }) {
  const { toggleTodo } = useTodos();

  return (
    <li className="flex items-center space-x-2">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
        className="h-4 w-4 accent-yellow-500"
      />
      <span className={todo.done ? "line-through" : ""}>{todo.text}</span>
    </li>
  );
}
