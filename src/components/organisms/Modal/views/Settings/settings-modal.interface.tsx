import { Theme } from '../../../../../common';

export interface SettingsModalProps {
  theme: Theme;
  handleCloseClick: () => void;
  handleThemeClick: (theme: Theme) => void;
}
