import { useContext } from 'react';
import { ThemeContext } from './theme.context';

export const useThemeProvider = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error(
      'useThemeProvider must be used within the registered ThemeContext'
    );
  }
  return context;
};
