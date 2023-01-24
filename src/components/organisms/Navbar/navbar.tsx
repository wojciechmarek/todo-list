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
import { SettingsModal } from '../Modal/content/Settings';

export const Navbar = () => {
  const { isExpanded, toggleExpand } = useNavbar();

  const { openModal, closeModal } = useModalProvider();

  const handleOpenModalClick = () => {
    openModal(
      <SettingsModal
        handleCloseClick={handleModalCloseClick}
        handleTileClick={handleThemeTileClick}
      />
    );
  };

  const handleModalCloseClick = () => {
    closeModal();
  };

  const handleThemeTileClick = (tile: string) => {
    alert(`You clicked on ${tile} tile`);
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
          onClick={handleOpenModalClick}
        />
      </DesktopNavbar>
    </>
  );
};
