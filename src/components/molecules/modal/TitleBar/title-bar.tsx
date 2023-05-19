import { X } from 'lucide-react';
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
      <ModalTitleBarText text={title}></ModalTitleBarText>
      <ModalTitleBarIcon icon={<X />} onClick={handleCloseClick} />
    </ModalTitleBarContainer>
  );
};
