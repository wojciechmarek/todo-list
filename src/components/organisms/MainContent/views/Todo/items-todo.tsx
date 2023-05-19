import {
  ItemsTodoAddButton,
  ItemsTodoContainer,
  ItemsTodoDivider,
  ItemsTodoIconInput,
  ItemsTodoList,
  ItemsTodoSearchAndAdd,
  ItemsTodoTitle,
} from './items-todo.styled';

import { Search } from 'lucide-react';
import { TaskItem } from '../../../../molecules';
import { ItemsTodoProps } from './items-todo.interface';
import { useItemsTodo } from './items-todo.hook';

export const ItemsTodo = (props: ItemsTodoProps) => {
  const {
    handleAddTaskModalClick,
    handleDoneButtonClick,
    handleOnItemClick,
    handleRemoveClick,
  } = props;

  const { filteredTasks, handleSearchInputChange } = useItemsTodo(props);

  return (
    <ItemsTodoContainer>
      <ItemsTodoTitle title="Things to do:" />
      <ItemsTodoSearchAndAdd>
        <ItemsTodoIconInput
          icon={<Search color="black" />}
          placeholder="Search"
          handleInputChange={handleSearchInputChange}
        />
        <ItemsTodoAddButton onClick={handleAddTaskModalClick}>
          New task
        </ItemsTodoAddButton>
      </ItemsTodoSearchAndAdd>
      <ItemsTodoDivider />
      <ItemsTodoList>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleDoneButtonClick={handleDoneButtonClick}
            handleOnItemClick={handleOnItemClick}
            handleRemoveClick={handleRemoveClick}
          />
        ))}
      </ItemsTodoList>
    </ItemsTodoContainer>
  );
};
