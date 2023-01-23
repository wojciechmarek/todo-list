import {
  DesktopNavbar,
  DesktopNavbarItem,
  DesktopNavbarList,
  NavbarDivider,
  DesktopNavbarTitle,
  DesktopNavbarTitleAndButton,
  MobileNavbar,
  MobileNavbarTitle,
  MobileNavbarEmptySpace,
  DesktopNavbarMenuButton,
  MobileNavbarMenuButton,
} from './navbar.styled';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavbar } from './navbar.hook';

export const Navbar = () => {
  const { isExpanded, toggleExpand } = useNavbar();

  return (
    <>
      <MobileNavbar expanded={isExpanded}>
        <MobileNavbarMenuButton
          onClick={toggleExpand}
          icon={isExpanded ? <XMarkIcon /> : <Bars3Icon />}
        />
        <MobileNavbarTitle>Lorem ipsum</MobileNavbarTitle>
        <MobileNavbarEmptySpace />
      </MobileNavbar>
      <DesktopNavbar expanded={isExpanded}>
        <DesktopNavbarTitleAndButton>
          <DesktopNavbarTitle expanded={isExpanded}>
            TODO List
          </DesktopNavbarTitle>
          <DesktopNavbarMenuButton
            expanded={isExpanded}
            onClick={toggleExpand}
            icon={isExpanded ? <XMarkIcon /> : <Bars3Icon />}
          />
        </DesktopNavbarTitleAndButton>
        <NavbarDivider />
        <DesktopNavbarList>
          <DesktopNavbarItem></DesktopNavbarItem>
        </DesktopNavbarList>
        <NavbarDivider />
        <DesktopNavbarItem />
      </DesktopNavbar>
    </>
  );
};
