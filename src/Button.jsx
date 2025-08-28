import React from "react";

function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={
        "px-4 py-2 rounded border-2 font-bold text-sm " +
        "bg-indigo-400 text-white hover:bg-indigo-600 disabled:bg-red-200 " +
        "transition duration-200 " + 
        className
      }
    >
      {children}
    </button>
  );
}

export default Button;
