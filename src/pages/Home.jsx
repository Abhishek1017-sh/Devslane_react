import React from "react";
import { useTodos } from "../context/TodoContext";
import TodoList from "../components/TodoList";
import AddTodoButton from "../components/AddTodoButton";

export default function Home() {
    const { todos } = useTodos();
    const { refreshTodos } = useTodos();
    const pendingTodos = todos.filter((t) => !t.done);
    const completedTodos = todos.filter((t) => t.done);

    return (
        <div className="mt-8 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div><h2 className="text-3xl font-bold">Things to get done</h2></div>
                <div className="mt-4 sm:mt-0"><button
                onClick={refreshTodos}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold "
                >
                Refresh
                </button></div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Things to do</h3>
                {pendingTodos.length > 0 ? (
                <TodoList todos={pendingTodos} title="" />
                ) : (
                <p className="text-gray-500">No todos here!</p>
                )}
                <AddTodoButton />
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-3">Things done</h3>
                {completedTodos.length > 0 ? (
                <TodoList todos={completedTodos} title="" />
                ) : (
                <p className="text-gray-500">Nothing completed yet!</p>
                )}
            </div>
        </div>
    );
}

