import styled from '@emotion/styled';

export const ModalStyle = styled.div<{ visible: boolean }>`
  z-index: 1;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
`;
