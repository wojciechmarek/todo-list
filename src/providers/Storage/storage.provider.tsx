import { useReducer } from 'react';
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
      } as LocalStorageState;
    }
  );

  const saveTheme = (theme: ThemeType) => {
    dispatch({ type: 'updateTheme', value: theme });
    setLocalStorageItem(LocalStorageItem.Theme, theme);
  };

  return (
    <StorageContext.Provider value={{ theme: state.theme, saveTheme }}>
      {children}
    </StorageContext.Provider>
  );
};
