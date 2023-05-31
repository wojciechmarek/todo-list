import styled from '@emotion/styled';
import { Button } from '../../../atoms';

export const ModalActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 3em;
  margin: 0 2em 2em 2em;
  width: calc(100% - 4em);
`;

export const ModalCommonButton = styled(Button)`
  background-color: var(--add-new-task-button-bg-color);
  color: var(--text-font-color);
  border-radius: var(--standard-border-radius);
  height: 100%;
  width: calc((100% / 3) - 0.5em);
  font-weight: 900;
  font-size: 1rem;
  border: var(--standard-border);
  box-shadow: var(--button-box-shadow);
`;

export const ModalCancelButton = styled(ModalCommonButton)``;

export const ModalAcceptButton = styled(ModalCommonButton)``;
