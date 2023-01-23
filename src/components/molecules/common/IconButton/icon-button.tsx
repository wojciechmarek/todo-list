import { IconButtonProps } from './icon-button.interface';
import { IconButtonContainer, IconStyle } from './icon-button.styled';

export const IconButton = (props: IconButtonProps) => {
  const { icon, ...params } = props;

  return (
    <IconButtonContainer {...params}>
      <IconStyle>{icon}</IconStyle>
    </IconButtonContainer>
  );
};
