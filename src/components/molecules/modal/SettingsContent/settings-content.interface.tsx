import { ThemeType } from '../../../../providers';

export interface ModalSettingsContentProps {
  theme: ThemeType;
  handleThemeClick: (tile: ThemeType) => void;
}
