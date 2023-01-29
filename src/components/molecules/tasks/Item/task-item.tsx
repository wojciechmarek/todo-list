import { TaskItemProps } from './task-item.interface';
import {
  TaskItemActions,
  TaskItemContainer,
  TaskItemDoneIconButton,
  TaskItemRemoveIconButton,
  TaskItemText,
} from './task-item.styled';

import { CheckIcon, TrashIcon } from '@heroicons/react/24/outline';

export const TaskItem = (props: TaskItemProps) => {
  return (
    <TaskItemContainer>
      <TaskItemText text={props.task.title} />
      <TaskItemActions>
        <TaskItemDoneIconButton icon={<CheckIcon />} />
        <TaskItemRemoveIconButton icon={<TrashIcon />} />
      </TaskItemActions>
    </TaskItemContainer>
  );
};
