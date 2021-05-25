import { useState } from "react";
import { Button } from "../ui";
import TaskModal from "./TaskModal";

const TaskCard = ({
  task,
  allowPlay = false,
  onPlay = () => {},
  onChange = () => {},
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleStatus = (e) => {
    onChange({
      ...task,
      done: e.target.checked,
    });
  };

  return (
    <>
      <div className="shadow-md m-2 bg-gray-50 p-3 rounded-md grid grid-cols-6 gap-1 items-center">
        <div className="col-span-1">
          <input
            type="checkbox"
            checked={task.done}
            onChange={handleToggleStatus}
          />
        </div>
        <div className="col-span-3 text-left">
          <h2
            className="text-primary text-xl"
            onClick={() => setIsOpened(true)}
          >
            {task.title}
          </h2>
        </div>
        {allowPlay && (
          <div className="col-span-2 text-right">
            <Button type="success" onClick={() => onPlay(task)}>
              Play
            </Button>
          </div>
        )}
      </div>
      <TaskModal
        task={task}
        isOpened={isOpened}
        onClose={() => setIsOpened(false)}
        onSave={onChange}
      />
    </>
  );
};

export default TaskCard;
