import styled from '@emotion/styled';
import { Text } from '../../../atoms';
import { IconButton } from '../../common';

export const TaskItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 3em;
  height: fit-content;
  background-color: var(--task-item-row-bg-color);
  width: 100%;
  margin-bottom: 0.5em;
  border: var(--standard-border);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--button-box-shadow);

  transition: filter 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);

    div {
      display: flex;
    }
  }
`;

export const TaskItemTitleDescription = styled.div`
  display: flex;
  flex-grow: 1;
  items-align: center;
`;

export const TaskItemText = styled(Text)`
  margin-left: 1em;
  font-weight: 800;
  color: var(--button-font-color);
`;

export const TaskItemDescription = styled(Text)`
  margin-left: 1em;
  font-weight: 800;
  filter: opacity(0.6);
  color: var(--button-font-color);
  text-overflow: ellipsis;
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
  box-shadow: var(--button-box-shadow);
`;

export const TaskItemRestoreIconButton = styled(CommonIconButton)`
  color: var(--text-font-color);
  background-color: var(--task-item-done-button-bg-color);
`;

export const TaskItemRemoveIconButton = styled(CommonIconButton)`
  color: var(--text-font-color);
  background-color: var(--task-item-delete-button-bg-color);
`;
