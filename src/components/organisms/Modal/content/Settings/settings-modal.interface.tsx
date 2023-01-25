import { ThemeType } from '../../../../../providers/Theme/theme.interface';

export interface SettingsModalProps {
  theme: ThemeType;
  handleCloseClick: () => void;
  handleThemeClick: (theme: ThemeType) => void;
}
