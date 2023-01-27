import { ModalActionButtonsProps } from './action-buttons.interface';
import {
  ModalActionButtonsContainer,
  ModalCancelButton,
  ModalAcceptButton,
} from './action-buttons.styled';

export const ModalActionButtons = ({
  handleCancelButtonClick,
  handleAcceptButtonClick: handleAcceptButtonClick,
}: ModalActionButtonsProps) => {
  return (
    <ModalActionButtonsContainer>
      <ModalCancelButton onClick={handleCancelButtonClick}>
        Reject
      </ModalCancelButton>
      <ModalAcceptButton onClick={handleAcceptButtonClick}>
        Save
      </ModalAcceptButton>
    </ModalActionButtonsContainer>
  );
};
