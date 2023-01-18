import styled from '@emotion/styled';
import { IconButton } from '../../atoms';

// Common

const NavbarMenuButton = styled(IconButton)`
  height: 2.5em;
  width: 2.5em;
  border-radius: 0.45em;
  background-color: var(--primary-button-color);
  color: var(--font-color);
`;

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

export const MobileNavbarMenuButton = styled(NavbarMenuButton)`
  margin-left: 0.75em;
`;

// Desktop Navbar

export const DesktopNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: space-between;
  height: calc(100% - 2em);
  width: 4em;
  margin: 0.75em 0 0.75em 0.75em;
  background-color: var(--primary-color);
  border-radius: var(--standard-border-radius);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DesktopNavbarTitleAndButton = styled.div`
  display: flex;
  margin: 0.75em 0 0 0.75em;
`;

export const DesktopNavbarTitle = styled.div`
  display: none;
`;

export const DesktopNavbarMenuButton = styled(NavbarMenuButton)``;

export const NavbarDivider = styled.div``;

export const DesktopNavbarList = styled.div`
  flex-grow: 1;
`;

export const DesktopNavbarItem = styled.div``;
