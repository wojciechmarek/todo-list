import { TextProps } from './text.interface';
import { TextStyle } from './text.styled';

export const Text = (props: TextProps) => {
  const { text, ...params } = props;

  return <TextStyle {...params}>{text}</TextStyle>;
};
