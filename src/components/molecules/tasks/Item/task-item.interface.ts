import { Task } from '../../../../common';

export interface TaskItemProps {
  task: Task;
  handleOnItemClick: (id: number) => void;
  handleDoneButtonClick: (id: number) => void;
  handleRemoveClick: (id: number) => void;
}
