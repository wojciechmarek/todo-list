import {
  ItemsDeletedAddButton,
  ItemsDeletedContainer,
  ItemsDeletedDivider,
  ItemsDeletedIconInput,
  ItemsDeletedList,
  ItemsDeletedSearchAndAdd,
  ItemsDeletedTitle,
} from './items-deleted.styled';

import { Search } from 'lucide-react';
import { TaskItem } from '../../../../molecules';
import { ItemsDeletedProps } from './items-deleted.interface';
import { useItemsDeleted } from './items-deleted.hook';

export const ItemsDeleted = (props: ItemsDeletedProps) => {
  const {
    handleAddTaskModalClick,
    handleDoneButtonClick,
    handleOnItemClick,
    handleRemoveClick,
  } = props;

  const { filteredTasks, handleSearchInputChange } = useItemsDeleted(props);

  return (
    <ItemsDeletedContainer>
      <ItemsDeletedTitle title="Things deleted:" />
      <ItemsDeletedDivider />
      <ItemsDeletedList>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            handleDoneButtonClick={handleDoneButtonClick}
            handleOnItemClick={handleOnItemClick}
            handleRemoveClick={handleRemoveClick}
          />
        ))}
      </ItemsDeletedList>
    </ItemsDeletedContainer>
  );
};
