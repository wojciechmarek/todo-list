import {
  ItemsTodoAddButton,
  ItemsTodoContainer,
  ItemsTodoDivider,
  ItemsTodoIconInput,
  ItemsTodoSearchAndAdd,
  ItemsTodoTitle,
} from './items-todo.styled';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export interface ItemsTodoProps {
  handleAddTaskModalClick: () => void;
}

export const ItemsTodo = (props: ItemsTodoProps) => {
  const { handleAddTaskModalClick } = props;

  return (
    <ItemsTodoContainer>
      <ItemsTodoTitle title="Things to do:" />
      <ItemsTodoSearchAndAdd>
        <ItemsTodoIconInput
          icon={<MagnifyingGlassIcon />}
          placeholder="Search"
          handleInputChange={console.log}
        />
        <ItemsTodoAddButton onClick={handleAddTaskModalClick}>
          New task
        </ItemsTodoAddButton>
      </ItemsTodoSearchAndAdd>
      <ItemsTodoDivider />
    </ItemsTodoContainer>
  );
};
