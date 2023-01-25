import { ModalSettingsContent, ModalTitleBar } from '../../../../molecules';
import { SettingsModalProps } from './settings-modal.interface';
import { SettingsModalStyle } from './settings-modal.styled';

export const SettingsModal = ({
  theme,
  handleCloseClick,
  handleThemeClick,
}: SettingsModalProps) => {
  return (
    <SettingsModalStyle>
      <ModalTitleBar handleCloseClick={handleCloseClick} title="Settings" />
      <ModalSettingsContent theme={theme} handleThemeClick={handleThemeClick} />
    </SettingsModalStyle>
  );
};
