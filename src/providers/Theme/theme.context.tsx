import { createContext } from 'react';
import { ThemeProps } from './theme.interface';

export const ThemeContext = createContext<ThemeProps | null>(null);
