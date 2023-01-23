import { ReactNode } from 'react';

export interface DesktopNavbarButtonProps {
  name: string;
  icon: ReactNode;
  [key: string]: unknown;
}
