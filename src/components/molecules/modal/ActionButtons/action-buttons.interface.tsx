import { Task } from '../AddTaskContent';

export interface ModalActionButtonsProps {
  handleCancelButtonClick: () => void;
  handleAcceptButtonClick: (task: Task) => void;
}
