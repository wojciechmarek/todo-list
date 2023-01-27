import styled from '@emotion/styled';

export const SettingsModalStyle = styled.div`
  width: 90%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-content: flex-start;

  background-color: var(--modal-bg-color);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--modal-box-shadow);
  border: var(--standard-border);
  backdrop-filter: var(--backdrop-filter);

  @media screen and (min-width: 768px) {
    height: 35em;
    width: 30em;
  }
`;

export const ModalContent = styled.div`
  flex-grow: 1;
`;
