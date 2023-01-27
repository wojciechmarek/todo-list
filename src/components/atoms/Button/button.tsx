import { ButtonProps } from './button.interface';
import { ButtonStyle } from './button.styled';

export const Button = (props: ButtonProps) => {
  const { children, ...params } = props;
  return <ButtonStyle {...params}>{children}</ButtonStyle>;
};
