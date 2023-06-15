import { TaskStatus } from '../enums';

export interface Task {
  id?: number;
  title: string;
  description: string;
  status: TaskStatus;
}
