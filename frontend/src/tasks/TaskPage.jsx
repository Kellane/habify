import TaskList from "./TaskList";
import useTasks from "./useTasks";
import { Modal } from "../ui";

const Page = () => {
  const { tasks, addTask, updateTask } = useTasks();
  return (
    <div className="p-4 justify-center flex">
      <div className="flex-1" style={{ maxWidth: 1000 }}>
        <div className="grid grid-cols-2 gap-5">
          <TaskList
            title="Tarefas de hoje"
            tasks={tasks.filter((t) => !t.done)}
            onNewTask={(task) => addTask({ ...task, done: false })}
            onTaskChange={updateTask}
          />
          <TaskList
            title="Concluidas hoje"
            tasks={tasks.filter((t) => t.done)}
            onNewTask={(task) => addTask({ ...task, done: true })}
            onTaskChange={updateTask}
          />
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Page;
