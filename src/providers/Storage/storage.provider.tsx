import { useReducer } from 'react';
import { Task, TaskStatus, Theme } from '../../common';
import { ProviderProps } from '../Common';
import {
  getLocalStorageItem,
  LocalStorageItem,
  setLocalStorageItem,
} from './local-storage-helpers';
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

  const saveTheme = (theme: Theme) => {
    dispatch({ type: 'updateTheme', value: theme });
    setLocalStorageItem(LocalStorageItem.Theme, theme);
  };

  const saveTask = (task: Task) => {
    task.id = new Date().getTime();
    task.status = TaskStatus.Todo;
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

  const markTaskAsDeleted = (id: number) => {
    const tasks = state.tasks.map((item) => {
      if (item.id === id) {
        return { ...item, status: TaskStatus.Deleted };
      }
      return item;
    });

    dispatch({ type: 'updateTasks', value: tasks });
    setLocalStorageItem(LocalStorageItem.Tasks, tasks);
  };

  const markTaskAsDone = (id: number) => {
    const tasks = state.tasks.map((item) => {
      if (item.id === id) {
        return { ...item, status: TaskStatus.Done };
      }
      return item;
    });

    dispatch({ type: 'updateTasks', value: tasks });
    setLocalStorageItem(LocalStorageItem.Tasks, tasks);
  };

  const markTaskAsTodo = (id: number) => {
    const tasks = state.tasks.map((item) => {
      if (item.id === id) {
        return { ...item, status: TaskStatus.Todo };
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
        tasksTodo: state.tasks.filter(
          (task) => task.status === TaskStatus.Todo
        ),
        tasksDone: state.tasks.filter(
          (task) => task.status === TaskStatus.Todo
        ),
        tasksDeleted: state.tasks.filter(
          (task) => task.status === TaskStatus.Deleted
        ),
        saveTheme,
        saveTask,
        updateTask,
        deleteTask,
        markTaskAsDone,
        markTaskAsDeleted,
        markTaskAsTodo,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};
