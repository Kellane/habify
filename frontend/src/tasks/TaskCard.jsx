const TaskCard = ({ task, onChange = () => {} }) => {
  const handleToggleStatus = (e) => {
    onChange({
      ...task,
      done: e.target.checked,
    });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.done}
        onChange={handleToggleStatus}
      />
      {task.title}
    </div>
  );
};

export default TaskCard;
