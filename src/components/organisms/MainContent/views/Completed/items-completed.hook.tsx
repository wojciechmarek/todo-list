import { useState } from 'react';
import { ItemsCompletedProps } from './items-completed.interface';

export const useItemsCompleted = ({ tasks }: ItemsCompletedProps) => {
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
