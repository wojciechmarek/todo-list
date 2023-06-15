import { Task, TaskStatus } from '../../../../../common';

export const useItemsCompleted = (tasks: Task[]) => {
  return {
    filteredTasks: tasks.filter((task) => task.status === TaskStatus.Done),
  };
};
