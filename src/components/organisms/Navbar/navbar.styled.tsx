import styled from '@emotion/styled';
import { IconButton } from '../../molecules';

// Common

export const NavbarMenuButton = styled(IconButton)`
  height: 2.5em;
  width: 2.5em;
  border-radius: 0.45em;
  background-color: var(--navbar-menu-button-bg-color);
  color: var(--button-font-color);
  transition: filter 0.3s ease-in-out;
  border: var(--standard-border);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--container-box-shadow);

  &:hover {
    filter: brightness(0.9);
  }
`;

// Mobile Navbar

export const MobileNavbar = styled.nav<{ expanded: boolean }>`
  display: flex;
  height: 4.5em;
  width: calc(100% - 2em);
  margin: 0.75em 0.75em 0 0.75em;
  background-color: var(--nav-and-content-bg-color);
  border-radius: var(--standard-border-radius);
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: var(--standard-border);
  box-shadow: var(--container-box-shadow);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavbarEmptySpace = styled.div`
  margin-right: 1em;
  height: 3em;
  width: 3em;
`;

export const MobileNavbarTitle = styled.p`
  color: var(--text-font-color);
  font-size: 1.5em;
  font-weight: 600;
`;

export const MobileNavbarMenuButton = styled(NavbarMenuButton)`
  margin-left: 0.75em;
`;

// Desktop Navbar

export const DesktopNavbar = styled.nav<{ expanded: boolean }>`
  display: none;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 2em);
  width: ${(props) => (props.expanded ? '15em' : '4.25em')};
  margin: 0.75em;
  background-color: var(--nav-and-content-bg-color);
  border-radius: var(--standard-border-radius);
  transition: width 0.3s ease-in-out;
  border: var(--standard-border);
  box-shadow: var(--container-box-shadow);

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const DesktopNavbarTitleAndButton = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.75em;
  height: 2.5em;
  width: calc(100% - 1.5em);
`;

export const DesktopNavbarTitle = styled.p<{ expanded: boolean }>`
  display: ${(props) => (props.expanded ? 'block' : 'none')};
  color: var(--text-font-color);
  text-overflow: clip; // This is needed to make the text wrap
  white-space: pre-line; // This is needed to make the text wrap
  font-size: 1em;
  font-weight: 600;
  cursor: default;
`;

export const DesktopNavbarMenuButton = styled(NavbarMenuButton)<{
  expanded: boolean;
}>`
  position: ${(props) => (props.expanded ? 'absolute' : 'relative')};
  right: 0;
  top: 0;
`;

export const NavbarDivider = styled.div`
  height: 0.1em;
  width: calc(100% - 1.5em);

  background-color: var(--divider-color);
`;

export const DesktopNavbarList = styled.div`
  flex-grow: 1;

  margin: 0.75em;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DesktopNavbarItem = styled.div``;
