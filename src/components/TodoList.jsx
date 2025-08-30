import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, title }) {
  return (
    <section className="mb-6">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <ul className="space-y-2">
        {todos.map((t) => (
          <TodoItem key={t.id} todo={t} />
        ))}
      </ul>
    </section>
  );
}
