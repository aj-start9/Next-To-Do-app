"use client";
import { useEffect } from "react";
import { useTodoStore } from "@/store/todoStore";
import TodoItem from "@/components/TodoItem";

export default function TodoList() {
  const { todos, fetchTodos } = useTodoStore();

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="space-y-4 overflow-y-auto h-min">
      <h2 className="text-xl font-semibold text-gray-300">Your Tasks</h2>
      {todos.length > 0 ? (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-400 text-center">No tasks yet! Add one above.</p>
      )}
    </div>
  );
}
