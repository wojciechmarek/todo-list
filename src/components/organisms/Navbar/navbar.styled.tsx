import styled from '@emotion/styled';
import { IconButton } from '../../atoms';

// Mobile Navbar

export const MobileNavbar = styled.nav`
  height: 4em;
  width: calc(100% - 2em);
  margin: 0.75em 0.75em 0 0.75em;
  background-color: var(--primary-color);
  border-radius: var(--standard-border-radius);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const MobileNavbarEmptySpace = styled.div`
  margin-right: 1em;
  height: 3em;
  width: 3em;
`;

export const MobileNavbarTitle = styled.p`
  color: var(--primary-text-color);
  font-size: 1.5em;
  font-weight: 600;
`;

export const MobileNavbarMenuButton = styled(IconButton)`
  margin-left: 0.75em;
  height: 2.5em;
  width: 2.5em;
  border-radius: 0.45em;
  background-color: var(--primary-button-color);
  color: var(--font-color);

  svg {
    height: 1.55em;
    width: 1.55em;
  }
`;

// Desktop Navbar

export const DesktopNavbar = styled.nav`
  height: calc(100% - 2em);
  width: 100px;
  margin: 1em 0px 1em 1em;
  background-color: var(--primary-color);
  border-radius: var(--standard-border-radius);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DesktopNavbarTitleAndButton = styled.div``;

export const DesktopNavbarTitle = styled.div``;

export const DesktopNavbarButton = styled.div``;

export const NavbarDivider = styled.div``;

export const DesktopNavbarList = styled.div``;

export const DesktopNavbarItem = styled.div``;
