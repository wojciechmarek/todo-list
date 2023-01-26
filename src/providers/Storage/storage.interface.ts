import { ThemeType } from '../Theme/theme.interface';

export interface StorageProps {
  theme: ThemeType;
  saveTheme: (theme: ThemeType) => void;
}
