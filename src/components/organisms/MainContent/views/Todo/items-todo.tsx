import {
  ItemsTodoAddButton,
  ItemsTodoContainer,
  ItemsTodoDivider,
  ItemsTodoIconInput,
  ItemsTodoList,
  ItemsTodoSearchAndAdd,
  ItemsTodoTitle,
} from './items-todo.styled';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { TaskItem } from '../../../../molecules';
import { ItemsTodoProps } from './items-todo.interface';

export const ItemsTodo = (props: ItemsTodoProps) => {
  const {
    tasks,
    handleAddTaskModalClick,
    handleDoneButtonClick,
    handleOnItemClick,
    handleRemoveClick,
  } = props;

  console.log('tasks', tasks);

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
      <ItemsTodoList>
        {tasks.map((task) => (
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
