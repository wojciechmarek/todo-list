export interface ThemeProps {
  theme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
}

export type ThemeType =
  | 'modern-flat-dark'
  | 'modern-flat-light'
  | 'glassmorphism'
  | 'bruthalism'
  | 'claymorphism'
  | 'neobruthalism';
