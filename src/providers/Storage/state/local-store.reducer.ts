import { LocalStorageAction } from './local-store.action';
import {
  LocalStorageInitialState,
  LocalStorageState,
} from './local-store.store';

export const LocalStorageReducer = (
  state: LocalStorageState,
  action: LocalStorageAction
): LocalStorageState => {
  switch (action.type) {
    case 'updateTheme':
      return { ...state, theme: action.value };
    case 'updateTasks':
      return { ...state, tasks: action.value };
    case 'clearAllData':
      return LocalStorageInitialState;
    default:
      return state;
  }
};
