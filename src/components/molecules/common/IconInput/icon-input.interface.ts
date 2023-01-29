import { ReactNode } from 'react';

export interface IconInputProps {
  value?: string;
  icon: ReactNode;
  placeholder: string;
  [key: string]: unknown;
  handleInputChange: (phrase: string) => void;
}
