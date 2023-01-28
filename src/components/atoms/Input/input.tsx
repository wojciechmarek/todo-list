import { InputProps } from './input.interface';
import { InputStyle } from './input.styled';

export const Input = (props: InputProps) => {
  const { value, placeholder, handleInputChange, ...params } = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(e.target.value);
  };

  return (
    <InputStyle
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...params}
    />
  );
};
