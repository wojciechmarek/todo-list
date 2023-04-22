import { Task } from '../../../../../common';

export interface DisplayTaskModalProps {
  task: Task;
  handleCancelButtonClick: () => void;
  handleEditButtonClick: (id: number) => void;
}
