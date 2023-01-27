import { Task } from '../../../../molecules';

export interface AddTimeModalProps {
  handleCancelButtonClick: () => void;
  handleSaveButtonClick: (data: Task) => void;
}
