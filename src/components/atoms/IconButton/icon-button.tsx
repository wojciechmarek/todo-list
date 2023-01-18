import { IconButtonProps } from './icon-button.interface';
import { IconButtonStyle } from './icon-button.styled';

export const IconButton = (props: IconButtonProps) => {
  const { children, ...params } = props;

  return <IconButtonStyle {...params}>{children}</IconButtonStyle>;
};
