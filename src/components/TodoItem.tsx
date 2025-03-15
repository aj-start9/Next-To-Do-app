"use client";
import { useTodoStore } from "@/store/todoStore";
import { CheckCircle, Trash2 } from "lucide-react";

export default function TodoItem({ todo }: { todo: { _id: string; title: string; completed: boolean } }) {
  const { fetchTodos } = useTodoStore();

  const toggleCompleted = async () => {
    await fetch(`/api/todos/${todo._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    fetchTodos();
  };

  return (
    <li
      className={`flex justify-between items-center p-4 rounded-lg transition-all cursor-pointer shadow-md ${
        todo.completed ? "bg-green-700 text-gray-300" : "bg-gray-800 text-white"
      }`}
      onClick={toggleCompleted}
    >
      <span className="flex items-center gap-3">
        <CheckCircle size={22} className={todo.completed ? "text-green-400" : "text-gray-400"} />
        <span className={`text-lg ${todo.completed ? "line-through" : ""}`}>{todo.title}</span>
      </span>
      <button
        className="text-sm px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all flex items-center"
        onClick={async (e) => {
          e.stopPropagation();
          await fetch(`/api/todos/${todo._id}`, { method: "DELETE" });
          fetchTodos();
        }}
      >
        <Trash2 size={18} />
      </button>
    </li>
  );
}
