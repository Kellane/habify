import { useState } from "react";
import TaskCard from "./TaskCard";

const TaskList = ({
  tasks = [],
  onNewTask = () => {},
  onTaskChange = () => {},
}) => {
  const [newTask, setNewTask] = useState("");

  const handleAddSubmit = (e) => {
    e.preventDefault();
    onNewTask({ title: newTask });
    setNewTask("");
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} onChange={onTaskChange} />
      ))}
      <form onSubmit={handleAddSubmit}>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="New Task"
        />
      </form>
    </div>
  );
};

export default TaskList;
