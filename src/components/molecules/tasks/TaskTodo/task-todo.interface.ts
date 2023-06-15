import { Task } from '../../../../common';

export interface TaskTodoProps {
  task: Task;
  handleOnItemClick: (id: number) => void;
  handleDoneClick: (id: number) => void;
  handleRemoveClick: (id: number) => void;
}
