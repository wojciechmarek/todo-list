import { LocalStorageAction } from './local-store.action';
import { LocalStorageState } from './local-store.store';

export const LocalStorageReducer = (
  state: LocalStorageState,
  action: LocalStorageAction
): LocalStorageState => {
  switch (action.type) {
    case 'updateTheme':
      return { ...state, theme: action.value };
    case 'clearAllData':
      return {
        ...state,
        theme: 'modern-flat-dark',
      } as LocalStorageState;
    default:
      return state;
  }
};
