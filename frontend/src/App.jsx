import Timer from "./pomodoro/Timer";
import TaskList from "./tasks/TaskList"
import useTasks from "./tasks/useTasks";

const App = () => {
  const { tasks, addTask, updateTask } = useTasks();

  return (
    <div className="App">
      <TaskList tasks={tasks} onNewTask={addTask} onTaskChange={updateTask} />
      <Timer/>
    </div>
  );
}

export default App;
