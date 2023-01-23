import { TextProps } from './text.interface';
import { TextStyle } from './text.styled';

export const Text = (props: TextProps) => {
  const { children, ...params } = props;

  return <TextStyle {...params}>{children}</TextStyle>;
};
