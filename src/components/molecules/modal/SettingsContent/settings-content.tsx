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
        text="Modern flat dark"
        handleThemeClick={() => handleThemeClick('modern-flat-light')}
      />
      <ImageTile
        text="Glassmorphism"
        handleThemeClick={() => handleThemeClick('glassmorphism')}
      />
      <ImageTile
        text="Bruthalism"
        handleThemeClick={() => handleThemeClick('bruthalism')}
      />
      <ImageTile
        text="Claymorphism"
        handleThemeClick={() => handleThemeClick('claymorphism')}
      />
      <ImageTile
        text="Cyber punk"
        handleThemeClick={() => handleThemeClick('cyber-punk')}
      />
    </SettingsContainer>
  );
};
