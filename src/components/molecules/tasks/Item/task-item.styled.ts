import styled from '@emotion/styled';
import { Text } from '../../../atoms';
import { IconButton } from '../../common';

export const TaskItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3em;
  background-color: var(--theme-tile-button-bg-color);
  width: 100%;
  margin-bottom: 0.5em;
  border: var(--standard-border);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--container-box-shadow);

  transition: filter 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);

    div {
      display: flex;
    }
  }
`;

export const TaskItemText = styled(Text)`
  margin-left: 1em;
  font-weight: 800;
`;

export const TaskItemActions = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  margin-right: 0.35em;
  gap: 0.5em;
`;

const CommonIconButton = styled(IconButton)`
  height: 2.25em;
  width: 2.25em;
  border-radius: 0.6em;
  border: var(--standard-border);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--container-box-shadow);
`;

export const TaskItemDoneIconButton = styled(CommonIconButton)`
  background-color: #00b894;
`;

export const TaskItemRemoveIconButton = styled(CommonIconButton)`
  background-color: #d63031;
`;
