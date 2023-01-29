import { useCallback, useEffect, useState } from 'react';
import { InputProps } from './input.interface';
import { InputStyle } from './input.styled';

export const Input = (props: InputProps) => {
  const { value, placeholder, handleInputChange, ...params } = props;

  const [phrase, setPhrase] = useState('');

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleInputChange(value);
    setPhrase(value);
  }, []);

  useEffect(() => {
    setPhrase(value);
  }, [value]);

  return (
    <InputStyle
      value={phrase}
      onChange={onChange}
      placeholder={placeholder}
      {...params}
    />
  );
};
