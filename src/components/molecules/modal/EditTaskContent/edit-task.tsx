import { Controller } from 'react-hook-form';
import { ModalEditTaskContentProps } from './edit-task.interface';
import {
  EditTaskContainer,
  EditTaskNameInput,
  EditTaskDescriptionTextArea,
} from './edit-task.styled';

export const ModalEditTaskContent = (props: ModalEditTaskContentProps) => {
  const { control } = props;
  return (
    <EditTaskContainer>
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <EditTaskNameInput
            value={field.value}
            placeholder="Task name"
            handleInputChange={(value) => field.onChange(value)}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <EditTaskDescriptionTextArea
            value={field.value}
            placeholder="Task description"
            handleTextAreaChange={(value) => field.onChange(value)}
          />
        )}
      />
    </EditTaskContainer>
  );
};
