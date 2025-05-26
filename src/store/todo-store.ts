import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Task = {
  id: number;
  title: string;
  done: boolean;
};

type TodoStore = {
  tasks: Task[];
  addTask: (title: string) => void;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
};

export const useTodoStore = create<TodoStore>()(
  devtools(
    persist(
      immer((set) => ({
        tasks: [],
        addTask: (title: string) =>
          set((state) => {
            const newTask: Task = {
              id: Date.now(),
              title,
              done: false,
            };
            state.tasks.push(newTask); // ✅ mutação direta com immer
          }),
        toggleTask: (id: number) =>
          set((state) => {
            const task = state.tasks.find((t) => t.id === id);
            if (task) task.done = !task.done;
          }),
        removeTask: (id: number) =>
          set((state) => {
            state.tasks = state.tasks.filter((t) => t.id !== id);
          }),
      })),
      {
        name: "todo-storage",
      }
    ),
    {
      name: "todo-devtools",
    }
  )
);
