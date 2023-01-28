export interface TextAreaProps {
  value: string;
  placeholder: string;
  [key: string]: unknown;
  handleTextAreaChange: (phrase: string) => void;
}
