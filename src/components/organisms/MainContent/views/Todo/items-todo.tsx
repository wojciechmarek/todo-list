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
import { Task } from '../../../../../common';
import { TaskItem } from '../../../../molecules';

export interface ItemsTodoProps {
  tasks: Task[];
  handleAddTaskModalClick: () => void;
  handleOnItemClick: (id: number) => void;
  handleDoneButtonClick: (id: number) => void;
  handleRemoveClick: (id: number) => void;
}

export const ItemsTodo = (props: ItemsTodoProps) => {
  const { tasks, handleAddTaskModalClick } = props;

  const handleOnItemClick = (id: number) => {
    console.log('handleOnItemClick', id);
  };

  const handleDoneButtonClick = (id: number) => {
    console.log('handleDoneButtonClick', id);
  };

  const handleRemoveClick = (id: number) => {
    console.log('handleRemoveClick', id);
  };

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
