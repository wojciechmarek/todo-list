export interface TextAreaProps {
  placeholder: string;
  [key: string]: unknown;
  handleTextAreaChange: (phrase: string) => void;
}
