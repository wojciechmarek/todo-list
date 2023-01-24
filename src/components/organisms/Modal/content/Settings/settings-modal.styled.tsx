import styled from '@emotion/styled';

export const SettingsModalStyle = styled.div`
  width: 90%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-content: flex-start;

  background-color: var(--background-color);
  border-radius: 5px;
  box-shadow: 0 0 100px 0 #202020;

  @media screen and (min-width: 768px) {
    height: 35em;
    width: 30em;
  }
`;

export const ModalContent = styled.div`
  flex-grow: 1;
`;
