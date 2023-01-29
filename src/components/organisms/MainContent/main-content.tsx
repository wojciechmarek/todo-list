import { Task } from '../../../common';
import { useModalProvider, useStorageProvider } from '../../../providers';
import { AddTaskModal } from '../Modal/views/AddTask';
import {
  MainContentContainer,
  MainContentWrapper,
} from './main-content.styled';
import { ItemsTodo } from './views';

export const MainContent = () => {
  const { openModal, closeModal } = useModalProvider();
  const { tasks, saveTask } = useStorageProvider();

  const handleAddTaskModalClick = () => {
    openModal(
      <AddTaskModal
        handleCancelButtonClick={handleCancelButtonClick}
        handleSaveButtonClick={handleSaveButtonClick}
      />
    );
  };

  const handleCancelButtonClick = () => {
    closeModal();
  };

  const handleSaveButtonClick = (data: Task) => {
    saveTask(data);
    closeModal();
  };

  return (
    <MainContentWrapper>
      <MainContentContainer>
        <ItemsTodo
          tasks={tasks}
          handleAddTaskModalClick={handleAddTaskModalClick}
          handleDoneButtonClick={console.log}
          handleOnItemClick={console.log}
          handleRemoveClick={console.log}
        />
      </MainContentContainer>
    </MainContentWrapper>
  );
};
