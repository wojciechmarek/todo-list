import { MobileNavbarButtonProps } from './mobile-button.interface';
import {
  MobileNavbarButtonContainer,
  MobileNavbarButtonIcon,
  MobileNavbarButtonText,
} from './mobile-button.styled';

export const MobileNavbarButton = (props: MobileNavbarButtonProps) => {
  const { icon, name, expanded, ...params } = props;
  return (
    <MobileNavbarButtonContainer {...params}>
      <MobileNavbarButtonIcon icon={icon} />
      <MobileNavbarButtonText expanded={expanded} text={name} />
    </MobileNavbarButtonContainer>
  );
};
