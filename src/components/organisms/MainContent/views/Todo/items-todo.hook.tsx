import { useState } from 'react';
import { ItemsTodoProps } from './items-todo.interface';

export const useItemsTodo = ({ tasks }: ItemsTodoProps) => {
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
