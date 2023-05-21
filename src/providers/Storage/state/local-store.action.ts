import { Task, Theme } from '../../../common';

export type LocalStorageAction =
  | { type: 'updateTheme'; value: Theme }
  | { type: 'updateTasks'; value: Task[] }
  | { type: 'clearAllData' };
