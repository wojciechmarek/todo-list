import { useState } from 'react';
import { ThemeType } from '../../../../providers/Theme/theme.interface';
import { ImageTile } from '../../../atoms';
import { ModalSettingsContentProps } from './settings-content.interface';
import { SettingsContainer } from './settings-content.styled';

export const ModalSettingsContent = ({
  handleThemeClick,
}: ModalSettingsContentProps) => {
  const [theme, setTheme] = useState('modern-flat-dark');

  const handleClick = (theme: ThemeType) => {
    handleThemeClick(theme);
    setTheme(theme);
  };

  return (
    <SettingsContainer>
      <ImageTile
        isActive={theme === 'modern-flat-dark'}
        text="Modern flat dark"
        handleThemeClick={() => handleClick('modern-flat-dark')}
      />
      <ImageTile
        isActive={theme === 'modern-flat-light'}
        text="Modern flat light"
        handleThemeClick={() => handleClick('modern-flat-light')}
      />
      <ImageTile
        isActive={theme === 'bruthalism'}
        text="Bruthalism"
        handleThemeClick={() => handleClick('bruthalism')}
      />
      <ImageTile
        isActive={theme === 'neobruthalism'}
        text="Neobruthalism"
        handleThemeClick={() => handleClick('neobruthalism')}
      />
    </SettingsContainer>
  );
};
