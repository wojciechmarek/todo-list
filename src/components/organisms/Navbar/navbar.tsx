import {
  DesktopNavbar,
  DesktopNavbarItem,
  DesktopNavbarList,
  DesktopNavbarButton,
  NavbarDivider,
  DesktopNavbarTitle,
  DesktopNavbarTitleAndButton,
  MobileNavbar,
  MobileNavbarTitle,
  MobileNavbarMenuButton,
  MobileNavbarEmptySpace,
} from './navbar.styled';

import { Bars3Icon } from '@heroicons/react/24/outline';

export const Navbar = () => {
  return (
    <>
      <MobileNavbar>
        <MobileNavbarMenuButton>
          <Bars3Icon />
        </MobileNavbarMenuButton>
        <MobileNavbarTitle>Lorem ipsum</MobileNavbarTitle>
        <MobileNavbarEmptySpace />
      </MobileNavbar>
      <DesktopNavbar>
        <DesktopNavbarTitleAndButton>
          <DesktopNavbarTitle>Navbar</DesktopNavbarTitle>
          <DesktopNavbarButton />
        </DesktopNavbarTitleAndButton>
        <NavbarDivider />
        <DesktopNavbarList>
          <DesktopNavbarItem></DesktopNavbarItem>
        </DesktopNavbarList>
      </DesktopNavbar>
    </>
  );
};
