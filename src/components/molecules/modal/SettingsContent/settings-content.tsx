import { ImageTile } from '../../../atoms';
import { ModalSettingsContentProps } from './settings-content.interface';
import { SettingsContainer } from './settings-content.styled';

export const ModalSettingsContent = ({
  handleThemeClick: handleThemeClick,
}: ModalSettingsContentProps) => {
  return (
    <SettingsContainer>
      <ImageTile
        text="Modern flat dark"
        handleThemeClick={() => handleThemeClick('modern-flat-dark')}
      />
      <ImageTile
        text="Modern flat light"
        handleThemeClick={() => handleThemeClick('modern-flat-light')}
      />
      <ImageTile
        text="Bruthalism"
        handleThemeClick={() => handleThemeClick('bruthalism')}
      />
      <ImageTile
        text="Neobruthalism"
        handleThemeClick={() => handleThemeClick('neobruthalism')}
      />
    </SettingsContainer>
  );
};
