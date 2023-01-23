import { Icon } from '../../../atoms';
import { IconButtonProps } from './icon-button.interface';
import { IconButtonStyle } from './icon-button.styled';

export const IconButton = (props: IconButtonProps) => {
  const { icon, ...params } = props;

  return (
    <IconButtonStyle {...params}>
      <Icon>{icon}</Icon>
    </IconButtonStyle>
  );
};
