import { InputProps } from './input.interface';
import { InputStyle } from './input.styled';

export const Input = (props: InputProps) => {
  const { placeholder, handleInputChange, ...params } = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e.target.value);
  };

  return (
    <InputStyle onChange={onChange} placeholder={placeholder} {...params} />
  );
};
