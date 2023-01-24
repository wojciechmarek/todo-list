import { useModalProvider } from '../../../providers';
import { ModalStyle } from './modal.styled';

export const Modal = () => {
  const { isOpen, content } = useModalProvider();

  return <ModalStyle visible={isOpen}>{content}</ModalStyle>;
};
