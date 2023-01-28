import { Task } from '../../../common';
import { ThemeType } from '../../Theme/theme.interface';

export type LocalStorageAction =
  | { type: 'updateTheme'; value: ThemeType }
  | { type: 'updateTasks'; value: Task[] }
  | { type: 'clearAllData' };
