import { Task } from '../../../../../common';

export interface AddTimeModalProps {
  handleCancelButtonClick: () => void;
  handleSaveButtonClick: (data: Task) => void;
}
