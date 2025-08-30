import React, { useState } from "react";
import AddTodoForm from "./AddToDoForm";

export default function AddTodoButton() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="mt-4 flex items-center bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold"
        >
          + Add a todo
        </button>
      ) : (
        <AddTodoForm onCancel={() => setShowForm(false)} />
      )}
    </div>
  );
}

