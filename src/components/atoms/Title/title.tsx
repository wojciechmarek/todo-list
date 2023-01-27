import { TitleProps } from './title.interface';
import { TitleStyle } from './text.styled';

export const Title = (props: TitleProps) => {
  const { title, ...params } = props;

  return <TitleStyle {...params}>{title}</TitleStyle>;
};
