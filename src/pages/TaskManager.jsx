import React, { useState } from "react";
import Card from "../components/Card.jsx";
import Button from "../components/Button.jsx";
import { useLocalStorage } from "../hooks/useLocalStorage.js";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) =>
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const filteredTasks =
    filter === "Active" ? tasks.filter((t) => !t.completed)
    : filter === "Completed" ? tasks.filter((t) => t.completed)
    : tasks;

  return (
    <Card title="Task Manager">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
          className="border px-3 py-2 rounded-md w-full"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2 mb-4">
        {["All", "Active", "Completed"].map((type) => (
          <Button
            key={type}
            variant={filter === type ? "primary" : "secondary"}
            onClick={() => setFilter(type)}
          >
            {type}
          </Button>
        ))}
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center py-2 border-b">
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TaskManager;