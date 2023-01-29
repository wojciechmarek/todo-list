import { TaskItemProps } from './task-item.interface';
import {
  TaskItemActions,
  TaskItemContainer,
  TaskItemDoneIconButton,
  TaskItemRemoveIconButton,
  TaskItemText,
} from './task-item.styled';

import { CheckIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useCallback } from 'react';

export const TaskItem = (props: TaskItemProps) => {
  const { task, handleDoneButtonClick, handleOnItemClick, handleRemoveClick } =
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
      handleDoneButtonClick(task.id || 0);
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
      <TaskItemText text={props.task.title} />
      <TaskItemActions>
        <TaskItemDoneIconButton
          onClick={onDoneButtonClick}
          icon={<CheckIcon />}
        />
        <TaskItemRemoveIconButton
          onClick={onRemoveButtonClick}
          icon={<TrashIcon />}
        />
      </TaskItemActions>
    </TaskItemContainer>
  );
};
