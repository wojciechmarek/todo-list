import { TextAreaProps } from './text-area.interface';
import { TextAreaStyle } from './text-area.styled';

export const TextArea = (props: TextAreaProps) => {
  const { placeholder, handleTextAreaChange, ...params } = props;

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleTextAreaChange(e.target.value);
  };

  return (
    <TextAreaStyle onChange={onChange} placeholder={placeholder} {...params} />
  );
};
