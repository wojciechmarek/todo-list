import { Task } from '../../../../common';

export interface TaskCompletedProps {
  task: Task;
  handleOnItemClick: (id: number) => void;
  handleRestoreClick: (id: number) => void;
  handleRemoveClick: (id: number) => void;
}
