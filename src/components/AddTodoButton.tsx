import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

const AddTodoButton: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mt-4">
      {showForm ? (
        <AddTodoForm onClose={() => setShowForm(false)} />
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold"
        >
          + Add a todo
        </button>
      )}
    </div>
  );
};

export default AddTodoButton;

