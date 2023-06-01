import styled from '@emotion/styled';
import { Button, Divider, Title } from '../../../../atoms';
import { IconInput } from '../../../../molecules';

export const ItemsTodoContainer = styled.div`
  margin: 0 2em;
  display: flex;
  flex-direction: column;
`;

export const ItemsTodoTitle = styled(Title)`
  font-size: 2.75rem;
  margin-top: 0.5em;

  padding: 0;
  font-weight: 900;

  color: var(--text-font-color);
  text-shadow: var(--text-box-shadow);
`;

export const ItemsTodoSearchAndAdd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3em;
  margin-top: 1.5em;
`;

export const ItemsTodoIconInput = styled(IconInput)`
  height: 100%;
  width: calc((100% - (100% / 3)) - 0.5em);
  box-shadow: var(--container-box-shadow);
`;

export const ItemsTodoAddButton = styled(Button)`
  background-color: var(--add-new-task-button-bg-color);
  color: var(--text-font-color);
  border-radius: var(--standard-border-radius);
  height: 100%;
  width: calc((100% / 3) - 0.5em);
  font-weight: 900;
  font-size: 1rem;
  border: var(--standard-border);
  transition: filter 0.3s ease-in-out;
  box-shadow: var(--button-box-shadow);

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ItemsTodoDivider = styled(Divider)`
  margin: 2em 0;
  background-color: var(--divider-color);
`;

export const ItemsTodoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
