import React, { useState } from "react";
import { useTodos } from "../context/TodoContext";

function AddTodoForm({ onCancel }) {
    const { addTodo } = useTodos();
    const [text, setText] = useState("");

    const handleSave = () => {
      if (text.trim()) {
        addTodo(text.trim());
        setText("");
        onCancel();
      }
    };

    return (
      <div className="p-4 border rounded-lg mt-4">
        <h4 className="font-semibold mb-2">Create a todo</h4>
        <input
          type="text"
          placeholder="Write your task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-3"
        />
        <div className="space-x-3">
          <button
            onClick={handleSave}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-100 hover:bg-gray-200 text-black px-4 py-2 rounded-lg font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    );
}
export default AddTodoForm;