import { useForm } from 'react-hook-form';
import { Task } from '../../../../../common';
import {
  ModalActionButtons,
  ModalEditTaskContent,
  ModalTitleBar,
} from '../../../../molecules';
import { AddTimeModalProps } from './add-task.interface';
import { AddTaskModalStyle } from './add-task.styled';

export const AddTaskModal = (props: AddTimeModalProps) => {
  const { handleCancelButtonClick, handleSaveButtonClick } = props;

  const { getValues, control } = useForm<Task>({
    defaultValues: { title: '', description: '' },
  });

  const handleAcceptButtonClick = () => {
    handleSaveButtonClick(getValues());
  };

  return (
    <AddTaskModalStyle>
      <ModalTitleBar
        handleCloseClick={handleCancelButtonClick}
        title="Create a new task"
      />
      <ModalEditTaskContent control={control} />
      <ModalActionButtons
        handleCancelButtonClick={handleCancelButtonClick}
        handleAcceptButtonClick={handleAcceptButtonClick}
      />
    </AddTaskModalStyle>
  );
};
