import { TaskCompletedProps } from './task-completed.interface';
import {
  TaskItemActions,
  TaskItemContainer,
  TaskItemDescription,
  TaskItemDoneIconButton,
  TaskItemRemoveIconButton,
  TaskItemText,
  TaskItemTitleDescription,
} from './task-completed.styled';

import { Undo2, Trash2 } from 'lucide-react';

import { useCallback } from 'react';

export const TaskCompleted = (props: TaskCompletedProps) => {
  const { task, handleRestoreClick, handleOnItemClick, handleRemoveClick } =
    props;

  const onContainerClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      handleOnItemClick(task.id || 0);
    },
    []
  );

  const onDoneButtonClick = useCallback(
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
        <TaskItemDoneIconButton onClick={onDoneButtonClick} icon={<Undo2 />} />
        <TaskItemRemoveIconButton
          onClick={onRemoveButtonClick}
          icon={<Trash2 />}
        />
      </TaskItemActions>
    </TaskItemContainer>
  );
};
