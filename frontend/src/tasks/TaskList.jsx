import { useState } from "react";
import TaskCard from "./TaskCard";

const TaskList = ({
  title = "To do",
  tasks = [],
  allowPlay = false,
  onNewTask = () => {},
  onTaskChange = () => {},
  onTaskPlay = () => {},
}) => {
  const [newTask, setNewTask] = useState("");

  const handleAddSubmit = (e) => {
    e.preventDefault();
    onNewTask({ title: newTask });
    setNewTask("");
  };

  return (
    <div className="p-2 shadow-sm rounded-md bg-white">
      <h2 className="text-2xl text-center mt-2 mb-4 text-primary font-bold">{title}</h2>
      <div>
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            onChange={onTaskChange}
            onPlay={onTaskPlay}
            allowPlay={allowPlay}
          />
        ))}
        <form onSubmit={handleAddSubmit} className="m-2">
          <input
            className="shadow-md bg-gray-50 p-3 rounded-md block w-full"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Nova tarefa"
          />
        </form>
      </div>
    </div>
  );
};

export default TaskList;
