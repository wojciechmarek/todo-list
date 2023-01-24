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

import {
  Bars3Icon,
  XMarkIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { useNavbar } from './navbar.hook';
import { DesktopNavbarButton } from '../../molecules';
import { useModalProvider } from '../../../providers';
import { SettingsModal } from '../Modal/content';

export const Navbar = () => {
  const { isExpanded, toggleExpand } = useNavbar();

  const { openModal, closeModal } = useModalProvider();

  const open = () => {
    openModal(<SettingsModal handleCloseClick={close} />);
  };

  const close = () => {
    closeModal();
  };

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
        <DesktopNavbarButton
          icon={<Cog6ToothIcon />}
          name="Settings"
          expanded={isExpanded}
          onClick={open}
        />
      </DesktopNavbar>
    </>
  );
};
