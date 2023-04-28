import { ModalActionButtonsProps } from './action-buttons.interface';
import {
  ModalActionButtonsContainer,
  ModalCancelButton,
  ModalAcceptButton,
} from './action-buttons.styled';

export const ModalActionButtons = ({
  label,
  handleCancelButtonClick,
  handleAcceptButtonClick,
}: ModalActionButtonsProps) => {
  return (
    <ModalActionButtonsContainer>
      <ModalCancelButton onClick={handleCancelButtonClick}>
        {label.cancelButton}
      </ModalCancelButton>
      <ModalAcceptButton onClick={handleAcceptButtonClick}>
        {label.acceptButton}
      </ModalAcceptButton>
    </ModalActionButtonsContainer>
  );
};
