import { ThemeType } from '../../../../../providers/Theme/theme.interface';

export interface SettingsModalProps {
  handleCloseClick: () => void;
  handleThemeClick: (theme: ThemeType) => void;
}
