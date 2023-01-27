import { Button } from '../../../../atoms';
import { IconInput } from '../../../../molecules';
import {
  ItemsTodoAddButton,
  ItemsTodoContainer,
  ItemsTodoDivider,
  ItemsTodoIconInput,
  ItemsTodoSearchAndAdd,
  ItemsTodoTitle,
} from './items-todo.styled';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export const ItemsTodo = () => {
  return (
    <ItemsTodoContainer>
      <ItemsTodoTitle title="Things to do:" />
      <ItemsTodoSearchAndAdd>
        <ItemsTodoIconInput
          icon={<MagnifyingGlassIcon />}
          placeholder="Search"
          handleInputChange={console.log}
        />
        <ItemsTodoAddButton>New task</ItemsTodoAddButton>
      </ItemsTodoSearchAndAdd>
      <ItemsTodoDivider />
    </ItemsTodoContainer>
  );
};
