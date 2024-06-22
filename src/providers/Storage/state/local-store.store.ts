import { Task, Theme } from '../../../common';

export interface LocalStorageState {
  theme: Theme;
  tasks: Task[];
}

export const LocalStorageInitialState: LocalStorageState = {
  theme: Theme.Neobruthalism,
  tasks: [],
};
