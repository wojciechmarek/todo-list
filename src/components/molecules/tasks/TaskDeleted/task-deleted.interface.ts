import { Task } from '../../../../common';

export interface TaskDeletedProps {
  task: Task;
  handleOnItemClick: (id: number) => void;
  handleRestoreClick: (id: number) => void;
  handleRemoveClick: (id: number) => void;
}
