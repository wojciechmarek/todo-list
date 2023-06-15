import {
  ItemsCompletedContainer,
  ItemsCompletedDivider,
  ItemsCompletedList,
  ItemsCompletedTitle,
} from './items-completed.styled';

import { useItemsCompleted } from './items-completed.hook';
import { useStorageProvider } from '../../../../../providers';
import { useCallback } from 'react';
import { TaskCompleted } from '../../../../molecules/tasks/TaskCompleted';

export const ItemsCompleted = () => {
  const { tasks, deleteTask, markTaskAsTodo } = useStorageProvider();

  const handleOnItemClick = useCallback((id: number) => {
    console.log('handleOnItemClick', id);
  }, []);

  const handleRestoreClick = useCallback((id: number) => {
    markTaskAsTodo(id);
  }, []);

  const handleRemoveClick = useCallback((id: number) => {
    deleteTask(id);
  }, []);

  const { filteredTasks } = useItemsCompleted(tasks);

  return (
    <ItemsCompletedContainer>
      <ItemsCompletedTitle title="Things done:" />
      <ItemsCompletedDivider />
      <ItemsCompletedList>
        {filteredTasks.map((task) => (
          <TaskCompleted
            key={task.id}
            task={task}
            handleRestoreClick={handleRestoreClick}
            handleOnItemClick={handleOnItemClick}
            handleRemoveClick={handleRemoveClick}
          />
        ))}
      </ItemsCompletedList>
    </ItemsCompletedContainer>
  );
};
