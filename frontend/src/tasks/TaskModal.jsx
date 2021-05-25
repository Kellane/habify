import { useState } from "react";
import { Button, Input, Modal, Textarea } from "../ui";

const TaskModal = ({
  task = {},
  isOpened = false,
  onSave = () => {},
  onClose = () => {},
}) => {
  const [taskDraft, setTaskDraft] = useState(task);

  const onFieldChange = (field) => (e) => {
    setTaskDraft({ ...taskDraft, [field]: e.target.value });
  };

  const inputProps = (field) => ({
    value: taskDraft[field],
    onChange: onFieldChange(field),
    id: `input-${field}-title`,
  });

  const handleSave = () => {
    onSave(taskDraft);
    onClose();
  };

  return (
    <Modal
      isOpened={isOpened}
      onClose={onClose}
      footer={() => (
        <>
          <Button type="primary" onClick={handleSave}>
            Salvar
          </Button>
          <Button onClick={onClose}>Fechar</Button>
        </>
      )}
    >
      <div>
        <Input label="Title" {...inputProps("title")} />
        <Textarea label="Description" {...inputProps("description")} />
        <Input label="Data limite" type="date" {...inputProps("limitDate")} />
      </div>
    </Modal>
  );
};

export default TaskModal;
