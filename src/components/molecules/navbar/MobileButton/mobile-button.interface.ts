import { ReactNode } from 'react';

export interface MobileNavbarButtonProps {
  name: string;
  icon: ReactNode;
  expanded: boolean;
  [key: string]: unknown;
}
