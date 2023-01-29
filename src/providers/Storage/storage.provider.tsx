import { useReducer } from 'react';
import { Task } from '../../common';
import { ProviderProps } from '../Common';
import { ThemeType } from '../Theme/theme.interface';
import {
  getLocalStorageItem,
  LocalStorageItem,
  setLocalStorageItem,
} from './local-storage';
import {
  LocalStorageInitialState,
  LocalStorageReducer,
  LocalStorageState,
} from './state';
import { StorageContext } from './storage.context';

export const StorageProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(
    LocalStorageReducer,
    LocalStorageInitialState,
    (store) => {
      return {
        ...store,
        theme:
          getLocalStorageItem(LocalStorageItem.Theme) ??
          LocalStorageInitialState.theme,
        tasks: getLocalStorageItem(LocalStorageItem.Tasks) ?? [],
      } as LocalStorageState;
    }
  );

  const saveTheme = (theme: ThemeType) => {
    dispatch({ type: 'updateTheme', value: theme });
    setLocalStorageItem(LocalStorageItem.Theme, theme);
  };

  const saveTask = (task: Task) => {
    task.id = new Date().getTime();
    task.isDone = false;
    const tasks = [...state.tasks, task];
    dispatch({ type: 'updateTasks', value: tasks });
    setLocalStorageItem(LocalStorageItem.Tasks, tasks);
  };

  const updateTask = (id: number, task: Task) => {
    const tasks = state.tasks.map((item) => {
      if (item.id === id) {
        return task;
      }
      return item;
    });
    dispatch({ type: 'updateTasks', value: tasks });
    setLocalStorageItem(LocalStorageItem.Tasks, tasks);
  };

  const deleteTask = (id: number) => {
    const tasks = state.tasks.filter((item) => item.id !== id);

    dispatch({ type: 'updateTasks', value: tasks });
    setLocalStorageItem(LocalStorageItem.Tasks, tasks);
  };

  const markTaskAsDone = (id: number) => {
    const tasks = state.tasks.map((item) => {
      if (item.id === id) {
        console.log('item:', item);

        return { ...item, isDone: true };
      }
      return item;
    });

    dispatch({ type: 'updateTasks', value: tasks });
    setLocalStorageItem(LocalStorageItem.Tasks, tasks);
  };

  return (
    <StorageContext.Provider
      value={{
        theme: state.theme,
        tasks: state.tasks,
        saveTheme,
        saveTask,
        updateTask,
        deleteTask,
        markTaskAsDone,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
