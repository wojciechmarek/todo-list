import { useCallback } from 'react';
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
  const { tasks, saveTask, deleteTask, markTaskAsDone } = useStorageProvider();

  const handleAddTaskModalClick = useCallback(() => {
    openModal(
      <AddTaskModal
        handleCancelButtonClick={handleCancelButtonClick}
        handleSaveButtonClick={handleSaveButtonClick}
      />
    );
  }, []);

  const handleOnItemClick = useCallback((id: number) => {
    console.log('handleOnItemClick', id);
  }, []);

  const handleDoneButtonClick = useCallback((id: number) => {
    markTaskAsDone(id);
  }, []);

  const handleRemoveClick = useCallback((id: number) => {
    deleteTask(id);
  }, []);

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
          handleDoneButtonClick={handleDoneButtonClick}
          handleOnItemClick={handleOnItemClick}
          handleRemoveClick={handleRemoveClick}
        />
      </MainContentContainer>
    </MainContentWrapper>
  );
};
