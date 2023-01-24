import { XMarkIcon } from '@heroicons/react/24/outline';
import { ModalTitleBarProps } from './title-bar.interface';
import {
  ModalTitleBarContainer,
  ModalTitleBarIcon,
  ModalTitleBarText,
} from './title-bar.styled';

export const ModalTitleBar = ({
  title,
  handleCloseClick,
}: ModalTitleBarProps) => {
  return (
    <ModalTitleBarContainer>
      <ModalTitleBarText>{title}</ModalTitleBarText>
      <ModalTitleBarIcon icon={<XMarkIcon />} onClick={handleCloseClick} />
    </ModalTitleBarContainer>
  );
};
