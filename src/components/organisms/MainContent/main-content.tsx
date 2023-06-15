import { useCallback } from 'react';
import { Task } from '../../../common';
import { useModalProvider, useStorageProvider } from '../../../providers';
import { AddTaskModal } from '../Modal/views/AddTask';
import {
  MainContentContainer,
  MainContentWrapper,
} from './main-content.styled';
import { ItemsCompleted, ItemsDeleted, ItemsTodo } from './views';
import { Route, Routes, createBrowserRouter } from 'react-router-dom';

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
        <Routes>
          <Route
            index
            element={
              <ItemsTodo
                tasks={tasks}
                handleAddTaskModalClick={handleAddTaskModalClick}
                handleDoneButtonClick={handleDoneButtonClick}
                handleOnItemClick={handleOnItemClick}
                handleRemoveClick={handleRemoveClick}
              />
            }
          />
          <Route
            path="deleted"
            element={
              <ItemsDeleted
                tasks={tasks}
                handleAddTaskModalClick={handleAddTaskModalClick}
                handleDoneButtonClick={handleDoneButtonClick}
                handleOnItemClick={handleOnItemClick}
                handleRemoveClick={handleRemoveClick}
              />
            }
          />
          <Route
            path="completed"
            element={
              <ItemsCompleted
                tasks={tasks}
                handleAddTaskModalClick={handleAddTaskModalClick}
                handleDoneButtonClick={handleDoneButtonClick}
                handleOnItemClick={handleOnItemClick}
                handleRemoveClick={handleRemoveClick}
              />
            }
          />
          <Route path="*" element={<p>404</p>} />
        </Routes>
        {/* <ItemsTodo
          tasks={tasks}
          handleAddTaskModalClick={handleAddTaskModalClick}
          handleDoneButtonClick={handleDoneButtonClick}
          handleOnItemClick={handleOnItemClick}
          handleRemoveClick={handleRemoveClick}
        /> */}
      </MainContentContainer>
    </MainContentWrapper>
  );
};
