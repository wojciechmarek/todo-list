import { Theme } from '../../common/enums/theme';

export interface ThemeProps {
  theme?: Theme;
  changeTheme: (theme: Theme) => void;
}
