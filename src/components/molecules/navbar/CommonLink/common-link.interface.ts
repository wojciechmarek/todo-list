import { ReactNode } from 'react';

export interface CommonLinkProps {
  text: string;
  icon: ReactNode;
  url: string;
  color: string;
  expanded: boolean;
  [key: string]: unknown;
}
