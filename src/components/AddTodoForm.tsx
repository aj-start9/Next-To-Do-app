"use client";
import { useState } from "react";
import { useTodoStore } from "@/store/todoStore";
import { PlusCircle, XCircle } from "lucide-react";

export default function AddTodoForm() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Task title cannot be empty.");
      return;
    }

    addTodo(title);
    setTitle("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-300">Add a New Task</h2>

      <div className="relative">
        <input
          type="text"
          placeholder="Enter task..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            if (error) setError("");
          }}
          className="w-full px-4 py-3 border border-gray-600 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {title && (
          <XCircle
            className="absolute right-4 top-3 text-gray-400 hover:text-red-500 cursor-pointer"
            size={22}
            onClick={() => setTitle("")}
          />
        )}
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg shadow-md transition-all"
      >
        <PlusCircle size={18} /> Add Task
      </button>
    </form>
  );
}
