import { IconProps } from './icon.interface';
import { IconContainer, IconStyle } from './icon.styled';

export const Icon = (props: IconProps) => {
  const { icon, ...params } = props;

  return (
    <IconContainer {...params}>
      <IconStyle>{icon}</IconStyle>
    </IconContainer>
  );
};
