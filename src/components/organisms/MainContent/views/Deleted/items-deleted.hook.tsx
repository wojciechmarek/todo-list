import { Task, TaskStatus } from '../../../../../common';

export const useItemsDeleted = (tasks: Task[]) => {
  return {
    filteredTasks: tasks.filter((task) => task.status === TaskStatus.Deleted),
  };
};
