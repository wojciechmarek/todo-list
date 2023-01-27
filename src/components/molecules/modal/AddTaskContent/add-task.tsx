import {
  AddTaskContainer,
  AddTaskNameInput,
  AddTaskDescriptionTextArea,
} from './add-task.styled';

export const ModalAddTaskContent = () => {
  return (
    <AddTaskContainer>
      <AddTaskNameInput
        placeholder="Task name"
        handleInputChange={console.log}
      />
      <AddTaskDescriptionTextArea
        placeholder="Task description"
        handleTextAreaChange={console.log}
      />
    </AddTaskContainer>
  );
};
