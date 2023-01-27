import { IconInputProps } from './icon-input.interface';
import { IconInputContainer, IconStyle } from './icon-input.styled';

export const IconInput = (props: IconInputProps) => {
  const { icon, ...params } = props;

  return (
    <IconInputContainer {...params}>
      <IconStyle icon={icon}></IconStyle>
    </IconInputContainer>
  );
};
