import styled from '@emotion/styled';
import { useModalProvider } from '../../../providers';

const ModalStyle = styled.div<{ visible: boolean }>`
  z-index: 1;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Modal = () => {
  const { isOpen, content } = useModalProvider();

  return <ModalStyle visible={isOpen}>{content}</ModalStyle>;
};
