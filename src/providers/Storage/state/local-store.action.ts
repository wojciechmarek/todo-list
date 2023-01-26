import { ThemeType } from '../../Theme/theme.interface';

export type LocalStorageAction =
  | { type: 'updateTheme'; value: ThemeType }
  | { type: 'clearAllData' };
