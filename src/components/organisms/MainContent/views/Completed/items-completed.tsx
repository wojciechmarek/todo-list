import {
  ItemsCompletedContainer,
  ItemsCompletedDivider,
  ItemsCompletedList,
  ItemsCompletedTitle,
} from './items-completed.styled';

import { useStorageProvider } from '../../../../../providers';
import { useCallback } from 'react';
import { TaskCompleted } from '../../../../molecules/tasks/TaskCompleted';

export const ItemsCompleted = () => {
  const { tasksDone, deleteTask, markTaskAsTodo } = useStorageProvider();

  const handleOnItemClick = useCallback((id: number) => {
    console.log('handleOnItemClick', id);
  }, []);

  const handleRestoreClick = useCallback((id: number) => {
    markTaskAsTodo(id);
  }, []);

  const handleRemoveClick = useCallback((id: number) => {
    deleteTask(id);
  }, []);

  return (
    <ItemsCompletedContainer>
      <ItemsCompletedTitle title="Things done:" />
      <ItemsCompletedDivider />
      <ItemsCompletedList>
        {tasksDone.map((task) => (
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
