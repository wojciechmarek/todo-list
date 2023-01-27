import React from 'react';
import { useModalProvider } from '../../../providers';
import { Task } from '../../molecules';
import { AddTaskModal } from '../Modal/views/AddTask';
import {
  MainContentContainer,
  MainContentWrapper,
} from './main-content.styled';
import { ItemsTodo } from './views';

export const MainContent = () => {
  const { openModal, closeModal } = useModalProvider();

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
    console.log(data);
    closeModal();
  };

  return (
    <MainContentWrapper>
      <MainContentContainer>
        <ItemsTodo handleAddTaskModalClick={handleAddTaskModalClick} />
      </MainContentContainer>
    </MainContentWrapper>
  );
};
