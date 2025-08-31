import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

interface Props {
  onClose: () => void;
}

const AddTodoForm: React.FC<Props> = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const todoContext = useContext(TodoContext);

  if (!todoContext) return null;
  const { addTodo } = todoContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle("");
      onClose();
    }
  };

  return (
    <div className="border border-gray-400 rounded-lg p-4 mt-4 max-w-4xl w-full">
      <h3 className="text-lg font-semibold mb-2">Create a todo</h3>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-400 rounded px-3 py-2 mb-4"
          placeholder="Write your task"
        />
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-200 text-black font-semibold px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
