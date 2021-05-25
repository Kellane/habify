const TaskCard = ({ task, onChange = () => { } }) => {
  const handleToggleStatus = (e) => {
    onChange({
      ...task,
      done: e.target.checked,
    });
  };

  return (
    <div className="shadow-md m-2 bg-gray-50 p-3 rounded-md grid grid-cols-6 gap-1 items-center">
      <div className="col-span-1">
        <input
          type="checkbox"
          checked={task.done}
          onChange={handleToggleStatus}
        />
      </div>
      <div className="col-span-3 text-left">
        <h2 className="text-primary text-xl">{task.title}</h2>
      </div>
    </div>
  );
};

export default TaskCard;
