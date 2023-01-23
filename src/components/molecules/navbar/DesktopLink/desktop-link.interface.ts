import { ReactNode } from 'react';

export interface DesktopNavbarLinkProps {
  title: string;
  icon: ReactNode;
  [key: string]: unknown;
}
