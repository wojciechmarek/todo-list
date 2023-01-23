import { ReactNode } from 'react';

export interface DesktopNavbarButtonProps {
  name: string;
  icon: ReactNode;
  expanded: boolean;
  [key: string]: unknown;
}
