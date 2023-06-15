import { Task } from '../../../../../common';

export interface ItemsCompletedProps {
  tasks: Task[];
  handleAddTaskModalClick: () => void;
  handleOnItemClick: (id: number) => void;
  handleDoneButtonClick: (id: number) => void;
  handleRemoveClick: (id: number) => void;
}
