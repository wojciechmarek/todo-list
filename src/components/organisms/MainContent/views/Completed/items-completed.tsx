import {
  ItemsCompletedAddButton,
  ItemsCompletedContainer,
  ItemsCompletedDivider,
  ItemsCompletedIconInput,
  ItemsCompletedList,
  ItemsCompletedSearchAndAdd,
  ItemsCompletedTitle,
} from './items-completed.styled';

import { Search } from 'lucide-react';
import { TaskItem } from '../../../../molecules';
import { ItemsCompletedProps } from './items-completed.interface';
import { useItemsCompleted } from './items-completed.hook';

export const ItemsCompleted = (props: ItemsCompletedProps) => {
  const {
    handleAddTaskModalClick,
    handleDoneButtonClick,
    handleOnItemClick,
    handleRemoveClick,
  } = props;

  const { filteredTasks, handleSearchInputChange } = useItemsCompleted(props);

  return (
    <ItemsCompletedContainer>
      <ItemsCompletedTitle title="Things completed" />
      <ItemsCompletedDivider />
      <ItemsCompletedList>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleDoneButtonClick={handleDoneButtonClick}
            handleOnItemClick={handleOnItemClick}
            handleRemoveClick={handleRemoveClick}
          />
        ))}
      </ItemsCompletedList>
    </ItemsCompletedContainer>
  );
};
