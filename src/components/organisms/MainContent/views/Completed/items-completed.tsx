import {
  ItemsCompletedAddButton,
  ItemsCompletedContainer,
  ItemsCompletedDivider,
  ItemsCompletedIconInput,
  ItemsCompletedList,
  ItemsCompletedSearchAndAdd,
  ItemsCompletedTitle,
} from './items-completed.styled';

import { Search } from 'lucide-react';
import { TaskItem } from '../../../../molecules';
import { useItemsCompleted } from './items-completed.hook';
import { useModalProvider, useStorageProvider } from '../../../../../providers';
import { useCallback } from 'react';

export const ItemsCompleted = () => {
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

  const { filteredTasks, handleSearchInputChange } = useItemsCompleted(tasks);

  return (
    <ItemsCompletedContainer>
      <ItemsCompletedTitle title="Things completed" />
      <ItemsCompletedDivider />
      <ItemsCompletedList>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleDoneButtonClick={handleDoneButtonClick}
            handleOnItemClick={handleOnItemClick}
            handleRemoveClick={handleRemoveClick}
          />
        ))}
      </ItemsCompletedList>
    </ItemsCompletedContainer>
  );
};
