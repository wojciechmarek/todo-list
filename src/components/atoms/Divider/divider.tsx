import { DividerProps } from './divider.interface';
import { DividerStyle } from './divider.styled';

export const Divider = (props: DividerProps) => {
  const { ...params } = props;
  return <DividerStyle {...params} />;
};
