import { Task } from '../../../common';
import { ThemeType } from '../../Theme/theme.interface';

export interface LocalStorageState {
  theme: ThemeType;
  tasks: Task[];
}

export const LocalStorageInitialState: LocalStorageState = {
  theme: 'modern-flat-dark',
  tasks: [],
};
