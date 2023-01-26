import { ThemeType } from '../../Theme/theme.interface';

export interface LocalStorageState {
  theme: ThemeType;
}

export const LocalStorageInitialState: LocalStorageState = {
  theme: 'modern-flat-dark',
};
