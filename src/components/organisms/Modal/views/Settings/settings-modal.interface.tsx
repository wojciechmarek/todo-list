import { ThemeType } from '../../../../../providers';

export interface SettingsModalProps {
  theme: ThemeType;
  handleCloseClick: () => void;
  handleThemeClick: (theme: ThemeType) => void;
}
