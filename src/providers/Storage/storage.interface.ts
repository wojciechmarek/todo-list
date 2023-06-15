import { Task, Theme } from '../../common';

export interface StorageProps {
  theme: Theme;
  tasks: Task[];
  saveTheme: (theme: Theme) => void;
  saveTask: (task: Task) => void;
  updateTask: (id: number, task: Task) => void;
  deleteTask: (id: number) => void;
  markTaskAsDone: (id: number) => void;
  markTaskAsTodo: (id: number) => void;
  markTaskAsDeleted: (id: number) => void;
}
