import { useEffect, useState } from "react";

const useTasks = () => {
  const [tasks, _setTasks] = useState([]);
  const nextId = (tasks[tasks.length - 1]?.id ?? 0) + 1;

  const setTasks = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    _setTasks(tasks);
  };

  useEffect(() => {
    _setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
  }, []);

  const generateTask = (task) => {
    const newTask = {
      done: true,
      labels: [],
      ...task,
      id: nextId,
    };
    return newTask;
  };

  const addTask = (task) => {
    setTasks([...tasks, generateTask(task)]);
  };

  const updateTask = (updateTask) => {
    setTasks(
      tasks.map((task) => (task.id === updateTask.id ? updateTask : task))
    );
  };

  const deleteTask = (deleteTask) => {
    setTasks(tasks.filter((task) => task.id !== deleteTask.id));
  };

  return { tasks, addTask, deleteTask, updateTask };
};

export default useTasks;
