import { useState } from "react";

import Timer from "../pomodoro/Timer";

import TaskList from "./TaskList";
import useTasks from "./useTasks";

const Page = () => {
  const { tasks, addTask, updateTask } = useTasks();
  const [playingTask, setPlayingTask] = useState();

  return (
    <div className="p-4 justify-center flex">
      {!playingTask ? (
        <div className="flex-1" style={{ maxWidth: 1000 }}>
          <div className="grid grid-cols-2 gap-5">
            <TaskList
              title="Tarefas de hoje"
              tasks={tasks.filter((t) => !t.done)}
              onNewTask={(task) => addTask({ ...task, done: false })}
              onTaskChange={updateTask}
              allowPlay={true}
              onTaskPlay={(task) => {
                console.log(task);
                setPlayingTask(task);
              }}
            />
            <TaskList
              title="Concluidas hoje"
              tasks={tasks.filter((t) => t.done)}
              onNewTask={(task) => addTask({ ...task, done: true })}
              onTaskChange={updateTask}
            />
          </div>
        </div>
      ) : (
        <Timer
          task={playingTask}
          onBack={() => setPlayingTask()}
          onFinish={() => {
            updateTask({ ...playingTask, done: true });
            setPlayingTask();
          }}
        />
      )}
    </div>
  );
};

export default Page;
