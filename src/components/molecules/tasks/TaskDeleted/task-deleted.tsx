import { TaskDeletedProps } from './task-deleted.interface';
import {
  TaskItemActions,
  TaskItemContainer,
  TaskItemDescription,
  TaskItemRestoreIconButton,
  TaskItemRemoveIconButton,
  TaskItemText,
  TaskItemTitleDescription,
} from './task-deleted.styled';

import { Undo, Trash2 } from 'lucide-react';

import { useCallback } from 'react';

export const TaskDeleted = (props: TaskDeletedProps) => {
  const { task, handleRestoreClick, handleOnItemClick, handleRemoveClick } =
    props;

  const onContainerClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      handleOnItemClick(task.id || 0);
    },
    []
  );

  const onRestoreButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      handleRestoreClick(task.id || 0);
    },
    []
  );

  const onRemoveButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      handleRemoveClick(task.id || 0);
    },
    []
  );

  return (
    <TaskItemContainer onClick={onContainerClick}>
      <TaskItemTitleDescription>
        <TaskItemText text={props.task.title} />
        <TaskItemDescription text={props.task.description} />
      </TaskItemTitleDescription>
      <TaskItemActions>
        <TaskItemRestoreIconButton
          onClick={onRestoreButtonClick}
          icon={<Undo />}
        />
        <TaskItemRemoveIconButton
          onClick={onRemoveButtonClick}
          icon={<Trash2 />}
        />
      </TaskItemActions>
    </TaskItemContainer>
  );
};
