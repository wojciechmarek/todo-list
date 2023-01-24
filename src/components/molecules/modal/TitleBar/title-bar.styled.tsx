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
  color: white;
  font-weight: 700;

  cursor: default;
`;

export const ModalTitleBarIcon = styled(IconButton)`
  height: 2.5em;
  width: 2.5em;
  border-radius: 0.45em;
  background-color: var(--primary-color);
  color: var(--font-color);
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.7);
  }
`;
