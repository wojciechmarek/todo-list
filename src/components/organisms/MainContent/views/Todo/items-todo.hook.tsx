import { useState } from 'react';
import { Task, TaskStatus } from '../../../../../common';

export const useItemsTodo = (tasks: Task[]) => {
  const [filteredTasks, setFilteredTasks] = useState(
    tasks.filter((task) => task.status === TaskStatus.Todo)
  );
  const handleSearchInputChange = (phrase: string) => {
    const filteredTasks = tasks
      .filter((task) => task.status === TaskStatus.Todo)
      .filter(
        (task) =>
          task.title.includes(phrase) || task.description.includes(phrase)
      );
    setFilteredTasks(filteredTasks);
  };

  return {
    filteredTasks,
    handleSearchInputChange,
  };
};
