import { useState } from 'react';
import { ProviderProps } from '../Common';
import { ThemeContext } from './theme.context';
import { ThemeType } from './theme.interface';

export const ThemeProvider = ({ children }: ProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>('modern-flat-dark');

  const changeTheme = (theme: ThemeType) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
