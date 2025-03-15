import { create } from "zustand";

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
  fetchTodos: () => Promise<void>;
  addTodo: (title: string) => Promise<void>;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],

  fetchTodos: async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    set({ todos: data });
  },

  addTodo: async (title: string) => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: { "Content-Type": "application/json" },
    });
    const newTodo = await res.json();
    set((state) => ({ todos: [...state.todos, newTodo] }));
  },
}));
