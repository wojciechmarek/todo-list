import { useState } from 'react';
import { ImageTile } from '../../common';
import { ModalSettingsContentProps } from './settings-content.interface';
import { SettingsContainer } from './settings-content.styled';
import { Theme } from '../../../../common';

export const ModalSettingsContent = ({
  theme,
  handleThemeClick,
}: ModalSettingsContentProps) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const handleClick = (theme: Theme) => {
    handleThemeClick(theme);
    setCurrentTheme(theme);
  };

  return (
    <SettingsContainer>
      <ImageTile
        isActive={currentTheme === Theme.ModernDark}
        text="Modern flat dark"
        handleThemeClick={() => handleClick(Theme.ModernDark)}
      />
      <ImageTile
        isActive={currentTheme === Theme.ModernLight}
        text="Modern flat light"
        handleThemeClick={() => handleClick(Theme.ModernLight)}
      />
      <ImageTile
        isActive={currentTheme === Theme.Bruthalism}
        text="Bruthalism"
        handleThemeClick={() => handleClick(Theme.Bruthalism)}
      />
      <ImageTile
        isActive={currentTheme === Theme.Neobruthalism}
        text="Neobruthalism"
        handleThemeClick={() => handleClick(Theme.Neobruthalism)}
      />
      <ImageTile
        isActive={currentTheme === Theme.Cardboard}
        text="Cardboard"
        handleThemeClick={() => handleClick(Theme.Cardboard)}
      />
      <ImageTile
        isActive={currentTheme === Theme.Glassmorphism}
        text="Glassmorphism"
        handleThemeClick={() => handleClick(Theme.Glassmorphism)}
      />
      <ImageTile
        isActive={currentTheme === Theme.Claymorphism}
        text="Claymorphism"
        handleThemeClick={() => handleClick(Theme.Claymorphism)}
      />
      <ImageTile
        isActive={currentTheme === Theme.Neumorphism}
        text="Neumorphism"
        handleThemeClick={() => handleClick(Theme.Neumorphism)}
      />
      <ImageTile
        isActive={currentTheme === Theme.Aurora}
        text="Aurora"
        handleThemeClick={() => handleClick(Theme.Aurora)}
      />
      <ImageTile
        isActive={currentTheme === Theme.AppleCupertino}
        text="Apple Cupertino"
        handleThemeClick={() => handleClick(Theme.AppleCupertino)}
      />
      <ImageTile
        isActive={currentTheme === Theme.GoogleMaterial}
        text="Google Material"
        handleThemeClick={() => handleClick(Theme.GoogleMaterial)}
      />
    </SettingsContainer>
  );
};
