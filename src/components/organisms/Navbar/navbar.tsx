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
  MobileNavbarContainer,
  MobileNavbarContent,
  MobileNavbarTitleAndButton,
  MobileNavbarList,
  MobileNavbarItem,
} from './navbar.styled';

import {
  Bars3Icon,
  XMarkIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { useNavbar } from './navbar.hook';
import { DesktopNavbarButton, MobileNavbarButton } from '../../molecules';
import {
  useModalProvider,
  useThemeProvider,
  useStorageProvider,
} from '../../../providers';
import { SettingsModal } from '../Modal/views/Settings';
import { ThemeType } from '../../../providers/Theme/theme.interface';
import { useEffect } from 'react';

export const Navbar = () => {
  const { isExpanded, toggleExpand } = useNavbar();

  const { theme, saveTheme } = useStorageProvider();
  const { openModal, closeModal } = useModalProvider();
  const { changeTheme } = useThemeProvider();

  const handleModalCloseClick = () => {
    closeModal();
  };

  const handleThemeTileClick = (theme: ThemeType) => {
    changeTheme(theme);
    saveTheme(theme);
  };

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  const handleOpenSettingsModalClick = () => {
    openModal(
      <SettingsModal
        theme={theme}
        handleCloseClick={handleModalCloseClick}
        handleThemeClick={handleThemeTileClick}
      />
    );
  };

  return (
    <>
      <MobileNavbar>
        <MobileNavbarMenuButton onClick={toggleExpand} icon={<Bars3Icon />} />
        <MobileNavbarTitle text="ToDo List" />
        <MobileNavbarEmptySpace />
      </MobileNavbar>
      <MobileNavbarContainer visible={isExpanded}>
        <MobileNavbarContent>
          <MobileNavbarTitleAndButton>
            <MobileNavbarEmptySpace />
            <MobileNavbarTitle text="Menu" />
            <MobileNavbarMenuButton
              onClick={toggleExpand}
              icon={<XMarkIcon />}
            />
          </MobileNavbarTitleAndButton>
          <MobileNavbarList>
            <MobileNavbarItem />
          </MobileNavbarList>
          <MobileNavbarButton
            icon={<Cog6ToothIcon />}
            name="Settings"
            expanded={isExpanded}
            onClick={() => {
              toggleExpand();
              handleOpenSettingsModalClick();
            }}
          />
        </MobileNavbarContent>
      </MobileNavbarContainer>

      <DesktopNavbar expanded={isExpanded}>
        <DesktopNavbarTitleAndButton>
          <DesktopNavbarTitle expanded={isExpanded} text="ToDo List" />
          <DesktopNavbarMenuButton
            expanded={isExpanded}
            onClick={toggleExpand}
            icon={isExpanded ? <XMarkIcon /> : <Bars3Icon />}
          />
        </DesktopNavbarTitleAndButton>
        <NavbarDivider />
        <DesktopNavbarList>
          <DesktopNavbarItem />
        </DesktopNavbarList>
        <NavbarDivider />
        <DesktopNavbarButton
          icon={<Cog6ToothIcon />}
          name="Settings"
          expanded={isExpanded}
          onClick={handleOpenSettingsModalClick}
        />
      </DesktopNavbar>
    </>
  );
};
