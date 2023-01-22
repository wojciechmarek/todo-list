import {
  DesktopNavbar,
  DesktopNavbarItem,
  DesktopNavbarList,
  NavbarDivider,
  DesktopNavbarTitle,
  DesktopNavbarTitleAndButton,
  MobileNavbar,
  MobileNavbarTitle,
  MobileNavbarMenuButton,
  MobileNavbarEmptySpace,
  DesktopNavbarMenuButton,
} from './navbar.styled';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavbar } from './navbar.hook';

export const Navbar = () => {
  const { isExpanded, toggleExpand } = useNavbar();

  return (
    <>
      <MobileNavbar expanded={isExpanded}>
        <MobileNavbarMenuButton onClick={toggleExpand}>
          {isExpanded ? <XMarkIcon /> : <Bars3Icon />}
        </MobileNavbarMenuButton>
        <MobileNavbarTitle>Lorem ipsum</MobileNavbarTitle>
        <MobileNavbarEmptySpace />
      </MobileNavbar>
      <DesktopNavbar expanded={isExpanded}>
        <DesktopNavbarTitleAndButton>
          <DesktopNavbarTitle expanded={isExpanded}>
            TODO List
          </DesktopNavbarTitle>
          <DesktopNavbarMenuButton onClick={toggleExpand} expanded={isExpanded}>
            {isExpanded ? <XMarkIcon /> : <Bars3Icon />}
          </DesktopNavbarMenuButton>
        </DesktopNavbarTitleAndButton>
        <NavbarDivider />
        <DesktopNavbarList>
          <DesktopNavbarItem></DesktopNavbarItem>
        </DesktopNavbarList>
      </DesktopNavbar>
    </>
  );
};
