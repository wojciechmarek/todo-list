import { ModalSettingsContent, ModalTitleBar } from '../../../../molecules';
import { SettingsModalProps } from './settings-modal.interface';
import { SettingsModalStyle } from './settings-modal.styled';

export const SettingsModal = ({
  handleCloseClick,
  handleTileClick,
}: SettingsModalProps) => {
  return (
    <SettingsModalStyle>
      <ModalTitleBar handleCloseClick={handleCloseClick} title="Settings" />
      <ModalSettingsContent handleTileClick={handleTileClick} />
    </SettingsModalStyle>
  );
};
