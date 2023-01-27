import { DesktopNavbarButtonProps } from './desktop-button.interface';
import {
  DesktopNavbarButtonContainer,
  DesktopNavbarButtonIcon,
  DesktopNavbarButtonText,
} from './desktop-button.styled';

export const DesktopNavbarButton = (props: DesktopNavbarButtonProps) => {
  const { icon, name, expanded, ...params } = props;
  return (
    <DesktopNavbarButtonContainer {...params}>
      <DesktopNavbarButtonIcon icon={icon} />
      <DesktopNavbarButtonText expanded={expanded} text={name} />
    </DesktopNavbarButtonContainer>
  );
};
