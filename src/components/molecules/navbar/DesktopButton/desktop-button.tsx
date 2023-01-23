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
      <DesktopNavbarButtonIcon>{icon}</DesktopNavbarButtonIcon>
      <DesktopNavbarButtonText expanded={expanded}>
        {name}
      </DesktopNavbarButtonText>
    </DesktopNavbarButtonContainer>
  );
};
