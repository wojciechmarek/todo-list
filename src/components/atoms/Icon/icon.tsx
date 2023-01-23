import { IconProps } from './icon.interface';
import { IconContainer, IconStyle } from './icon.styled';

export const Icon = (props: IconProps) => {
  const { children, ...params } = props;

  return (
    <IconContainer {...params}>
      <IconStyle>{children}</IconStyle>
    </IconContainer>
  );
};
