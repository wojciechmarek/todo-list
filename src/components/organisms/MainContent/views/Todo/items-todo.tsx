import {
  ItemsTodoAddButton,
  ItemsTodoContainer,
  ItemsTodoDivider,
  ItemsTodoIconInput,
  ItemsTodoList,
  ItemsTodoSearchAndAdd,
  ItemsTodoTitle,
} from './items-todo.styled';

import { Search } from 'lucide-react';
import { useItemsTodo } from './items-todo.hook';
import { useModalProvider, useStorageProvider } from '../../../../../providers';
import { useCallback } from 'react';
import { AddTaskModal } from '../../../Modal/views/AddTask';
import { Task } from '../../../../../common';
import { TaskTodo } from '../../../../molecules';

export const ItemsTodo = () => {
  const { openModal, closeModal } = useModalProvider();
  const { tasks, saveTask, markTaskAsDeleted, markTaskAsDone } =
    useStorageProvider();

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

  const handleDoneClick = useCallback((id: number) => {
    markTaskAsDone(id);
  }, []);

  const handleRemoveClick = useCallback((id: number) => {
    markTaskAsDeleted(id);
  }, []);

  const handleCancelButtonClick = () => {
    closeModal();
  };

  const handleSaveButtonClick = (data: Task) => {
    saveTask(data);
    closeModal();
  };

  const { filteredTasks, handleSearchInputChange } = useItemsTodo(tasks);

  return (
    <ItemsTodoContainer>
      <ItemsTodoTitle title="Things to do:" />
      <ItemsTodoSearchAndAdd>
        <ItemsTodoIconInput
          icon={<Search color="black" />}
          placeholder="Search"
          handleInputChange={handleSearchInputChange}
        />
        <ItemsTodoAddButton onClick={handleAddTaskModalClick}>
          New task
        </ItemsTodoAddButton>
      </ItemsTodoSearchAndAdd>
      <ItemsTodoDivider />
      <ItemsTodoList>
        {filteredTasks.map((task) => (
          <TaskTodo
            key={task.id}
            task={task}
            handleDoneClick={handleDoneClick}
            handleOnItemClick={handleOnItemClick}
            handleRemoveClick={handleRemoveClick}
          />
        ))}
      </ItemsTodoList>
    </ItemsTodoContainer>
  );
};
