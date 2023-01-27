import { IconInputProps } from './icon-input.interface';
import { IconInputContainer, IconStyle, InputStyle } from './icon-input.styled';

export const IconInput = (props: IconInputProps) => {
  const { icon, placeholder, handleInputChange, ...params } = props;

  return (
    <IconInputContainer {...params}>
      <InputStyle
        handleInputChange={handleInputChange}
        placeholder={placeholder}
      />
      <IconStyle icon={icon} />
    </IconInputContainer>
  );
};
