import {
  ModalActionButtons,
  ModalAddTaskContent,
  ModalTitleBar,
} from '../../../../molecules';
import { AddTimeModalProps } from './add-task.interface';
import { AddTaskModalStyle } from './add-task.styled';

export const AddTaskModal = ({
  handleCancelButtonClick,
  handleSaveButtonClick,
}: AddTimeModalProps) => {
  return (
    <AddTaskModalStyle>
      <ModalTitleBar
        handleCloseClick={handleCancelButtonClick}
        title="Create a new task"
      />
      <ModalAddTaskContent />
      <ModalActionButtons
        handleCancelButtonClick={handleCancelButtonClick}
        handleAcceptButtonClick={handleSaveButtonClick}
      />
    </AddTaskModalStyle>
  );
};
