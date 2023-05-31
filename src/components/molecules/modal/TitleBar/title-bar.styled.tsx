import styled from '@emotion/styled';
import { Text } from '../../../atoms';
import { IconButton } from '../../common';

export const ModalTitleBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 2em 0 2em;
  width: calc(100% - 4em);
`;

export const ModalTitleBarText = styled(Text)`
  font-size: 1.5em;
  color: var(--text-font-color);
  font-weight: 900;

  cursor: default;
`;

export const ModalTitleBarIcon = styled(IconButton)`
  height: 2.5em;
  width: 2.5em;
  border-radius: 0.45em;
  background-color: var(--modal-cross-button-bg-color);
  color: var(--button-font-color);
  transition: filter 0.3s ease-in-out;
  border: var(--standard-border);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--button-box-shadow);

  &:hover {
    filter: brightness(0.7);
  }
`;
