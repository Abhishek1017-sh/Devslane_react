import React, { useContext } from "react";
import { TodoContext, type Todo} from "../context/TodoContext";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
  const todoContext = useContext(TodoContext);

  if (!todoContext) return null;
  const { toggleTodo, removeTodo } = todoContext;

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span className={todo.completed ? "line-through text-gray-500" : ""}>
        {todo.title}
      </span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="text-red-500 ml-2"
      >
        ✕
      </button>
    </div>
  );
};

export default TodoItem;
