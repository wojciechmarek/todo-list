import { Task } from '../../common';
import { ThemeType } from '../Theme/theme.interface';

export interface StorageProps {
  theme: ThemeType;
  tasks: Task[];
  saveTheme: (theme: ThemeType) => void;
  saveTask: (task: Task) => void;
  updateTask: (id: number, task: Task) => void;
  deleteTask: (id: number) => void;
  markTaskAsDone: (id: number) => void;
}
