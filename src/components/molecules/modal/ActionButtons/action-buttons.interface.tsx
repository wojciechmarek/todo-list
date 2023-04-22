export interface ModalActionButtonsProps {
  label: {
    cancelButton: string;
    acceptButton: string;
  };
  handleCancelButtonClick: () => void;
  handleAcceptButtonClick: () => void;
}
