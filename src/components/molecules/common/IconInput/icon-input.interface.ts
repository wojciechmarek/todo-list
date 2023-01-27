import { ReactNode } from 'react';

export interface IconInputProps {
  icon: ReactNode;
  placeholder: string;
  [key: string]: unknown;
  handleInputChange: (phrase: string) => void;
}
