import { Theme } from '../../../../common';

export interface ModalSettingsContentProps {
  theme: Theme;
  handleThemeClick: (tile: Theme) => void;
}
