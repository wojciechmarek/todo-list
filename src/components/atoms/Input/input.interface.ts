export interface InputProps {
  placeholder: string;
  [key: string]: unknown;
  handleInputChange: (phrase: string) => void;
}
