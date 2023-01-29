import { IconInputProps } from './icon-input.interface';
import { IconInputContainer, IconStyle, InputStyle } from './icon-input.styled';

export const IconInput = (props: IconInputProps) => {
  const { icon, value, placeholder, handleInputChange, ...params } = props;

  return (
    <IconInputContainer {...params}>
      <InputStyle
        value={value || ''}
        handleInputChange={handleInputChange}
        placeholder={placeholder}
      />
      <IconStyle icon={icon} />
    </IconInputContainer>
  );
};
