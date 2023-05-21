import { useState } from 'react';
import { ProviderProps } from '../Common';
import { ThemeContext } from './theme.context';
import { Theme } from '../../common';

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState<Theme>(Theme.ModernDark);

  const changeTheme = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
