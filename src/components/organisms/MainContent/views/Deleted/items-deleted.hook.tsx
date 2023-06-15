import { useState } from 'react';
import { ItemsDeletedProps } from './items-deleted.interface';

export const useItemsDeleted = ({ tasks }: ItemsDeletedProps) => {
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const handleSearchInputChange = (phrase: string) => {
    const filteredTasks = tasks.filter(
      (task) => task.title.includes(phrase) || task.description.includes(phrase)
    );
    setFilteredTasks(filteredTasks);
  };

  return {
    filteredTasks,
    handleSearchInputChange,
  };
};
