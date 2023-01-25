import { ThemeType } from '../../../../providers/Theme/theme.interface';

export interface ModalSettingsContentProps {
  theme: ThemeType;
  handleThemeClick: (tile: ThemeType) => void;
}
