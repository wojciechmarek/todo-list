import { useState } from 'react';
import { ThemeType } from '../../../../providers';
import { ImageTile } from '../../common';
import { ModalSettingsContentProps } from './settings-content.interface';
import { SettingsContainer } from './settings-content.styled';

export const ModalSettingsContent = ({
  theme,
  handleThemeClick,
}: ModalSettingsContentProps) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const handleClick = (theme: ThemeType) => {
    handleThemeClick(theme);
    setCurrentTheme(theme);
  };

  return (
    <SettingsContainer>
      <ImageTile
        isActive={currentTheme === 'modern-flat-dark'}
        text="Modern flat dark"
        handleThemeClick={() => handleClick('modern-flat-dark')}
      />
      <ImageTile
        isActive={currentTheme === 'modern-flat-light'}
        text="Modern flat light"
        handleThemeClick={() => handleClick('modern-flat-light')}
      />
      <ImageTile
        isActive={currentTheme === 'bruthalism'}
        text="Bruthalism"
        handleThemeClick={() => handleClick('bruthalism')}
      />
      <ImageTile
        isActive={currentTheme === 'neobruthalism'}
        text="Neobruthalism"
        handleThemeClick={() => handleClick('neobruthalism')}
      />
      <ImageTile
        isActive={currentTheme === 'cardboard'}
        text="Cardboard"
        handleThemeClick={() => handleClick('cardboard')}
      />
      <ImageTile
        isActive={currentTheme === 'glassmorphism'}
        text="Glassmorphism"
        handleThemeClick={() => handleClick('glassmorphism')}
      />
    </SettingsContainer>
  );
};
