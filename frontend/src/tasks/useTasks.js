import { useState } from "react";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(1);

  const generateTask = (task) => {
    console.log(task)
    const newTask = {
      done: true,
      labels: [],
      ...task,
      id: nextId,
    };
    setNextId((nextId) => nextId + 1);
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
