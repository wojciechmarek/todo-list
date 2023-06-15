import { useState } from 'react';
import { Task } from '../../../../../common';

export const useItemsDeleted = (tasks: Task[]) => {
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
