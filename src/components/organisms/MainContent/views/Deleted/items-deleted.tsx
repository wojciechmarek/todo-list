import {
  ItemsDeletedAddButton,
  ItemsDeletedContainer,
  ItemsDeletedDivider,
  ItemsDeletedIconInput,
  ItemsDeletedList,
  ItemsDeletedSearchAndAdd,
  ItemsDeletedTitle,
} from './items-deleted.styled';

import { Search } from 'lucide-react';
import { TaskItem } from '../../../../molecules';
import { useItemsDeleted } from './items-deleted.hook';
import { useModalProvider, useStorageProvider } from '../../../../../providers';
import { useCallback } from 'react';
import { AddTaskModal } from '../../../Modal/views/AddTask';
import { Task } from '../../../../../common';

export const ItemsDeleted = () => {
  const { openModal, closeModal } = useModalProvider();
  const { tasks, saveTask, deleteTask, markTaskAsDone } = useStorageProvider();

  const handleOnItemClick = useCallback((id: number) => {
    console.log('handleOnItemClick', id);
  }, []);

  const handleDoneButtonClick = useCallback((id: number) => {
    markTaskAsDone(id);
  }, []);

  const handleRemoveClick = useCallback((id: number) => {
    deleteTask(id);
  }, []);

  const { filteredTasks, handleSearchInputChange } = useItemsDeleted(tasks);

  return (
    <ItemsDeletedContainer>
      <ItemsDeletedTitle title="Things deleted:" />
      <ItemsDeletedDivider />
      <ItemsDeletedList>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleDoneButtonClick={handleDoneButtonClick}
            handleOnItemClick={handleOnItemClick}
            handleRemoveClick={handleRemoveClick}
          />
        ))}
      </ItemsDeletedList>
    </ItemsDeletedContainer>
  );
};
