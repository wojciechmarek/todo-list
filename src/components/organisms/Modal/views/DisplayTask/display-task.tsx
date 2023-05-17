import { ModalActionButtons, ModalTitleBar } from '../../../../molecules';
import { DisplayTaskModalProps } from './display-task.interface';
import { DisplayTaskModalStyle } from './display-task.styled';

export const DisplayTaskModal = (props: DisplayTaskModalProps) => {
  const { task, handleCancelButtonClick, handleEditButtonClick } = props;

  const handleAcceptButtonClick = () => {
    handleEditButtonClick(task.id || 0);
  };

  return (
    <DisplayTaskModalStyle>
      <ModalTitleBar
        handleCloseClick={handleCancelButtonClick}
        title="Task details"
      />
      <p>{task.title}</p>
      <p>{task.description}</p>
      <ModalActionButtons
        label={{ cancelButton: 'Cancel', acceptButton: 'Edit' }}
        handleCancelButtonClick={handleCancelButtonClick}
        handleAcceptButtonClick={handleAcceptButtonClick}
      />
    </DisplayTaskModalStyle>
  );
};
