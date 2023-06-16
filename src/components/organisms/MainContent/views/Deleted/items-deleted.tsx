import {
  ItemsDeletedContainer,
  ItemsDeletedDivider,
  ItemsDeletedList,
  ItemsDeletedTitle,
} from './items-deleted.styled';

import { useStorageProvider } from '../../../../../providers';
import { useCallback } from 'react';
import { TaskDeleted } from '../../../../molecules/tasks/TaskDeleted';

export const ItemsDeleted = () => {
  const { tasksDeleted, deleteTask, markTaskAsTodo } = useStorageProvider();

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
    <ItemsDeletedContainer>
      <ItemsDeletedTitle title="Things deleted:" />
      <ItemsDeletedDivider />
      <ItemsDeletedList>
        {tasksDeleted.map((task) => (
          <TaskDeleted
            key={task.id}
            task={task}
            handleOnItemClick={handleOnItemClick}
            handleRestoreClick={handleRestoreClick}
            handleRemoveClick={handleRemoveClick}
          />
        ))}
      </ItemsDeletedList>
    </ItemsDeletedContainer>
  );
};
