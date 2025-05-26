import { useTodoStore } from "@/store/todo-store";
import React, { useState } from "react";

const TodoList = () => {
  const { tasks, addTask, toggleTask, removeTask } = useTodoStore();
  const [newTask, setNewTask] = useState("");

  const handleAdd = () => {
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <hr className="text-center text-muted-foreground mt-4"></hr>
      <h1>🗓️ Aula Prática: Criando um todo list</h1>
      <h1 className="text-2xl font-bold mb-4">📝 Todo List</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nova tarefa"
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Adicionar
        </button>
      </div>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center shadow p-3 rounded hover:bg-gray-50"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${
                task.done ? "line-through text-gray-400" : ""
              }`}
            >
              {task.title}
            </span>
            <button
              onClick={() => removeTask(task.id)}
              className="text-red-500 hover:text-red-700"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
