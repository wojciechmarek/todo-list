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
import { useModalProvider, useThemeProvider } from '../../../providers';
import { SettingsModal } from '../Modal/content/Settings';
import { ThemeType } from '../../../providers/Theme/theme.interface';

export const Navbar = () => {
  const { isExpanded, toggleExpand } = useNavbar();

  const { openModal, closeModal } = useModalProvider();

  const { changeTheme, theme } = useThemeProvider();

  const handleOpenModalClick = () => {
    openModal(
      <SettingsModal
        theme={theme}
        handleCloseClick={handleModalCloseClick}
        handleThemeClick={handleThemeTileClick}
      />
    );
  };

  const handleModalCloseClick = () => {
    closeModal();
  };

  const handleThemeTileClick = (theme: ThemeType) => {
    changeTheme(theme);
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
