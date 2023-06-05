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
  DesktopNavbarLink,
  MobileNavbarLink,
} from './navbar.styled';

import {
  Menu,
  X,
  Settings,
  ListChecks,
  CheckSquare,
  XCircle,
} from 'lucide-react';

import { useNavbar } from './navbar.hook';
import {
  CommonLink,
  DesktopNavbarButton,
  MobileNavbarButton,
} from '../../molecules';
import {
  useModalProvider,
  useThemeProvider,
  useStorageProvider,
} from '../../../providers';
import { SettingsModal } from '../Modal/views/Settings';
import { useEffect } from 'react';
import { Theme } from '../../../common';

export const Navbar = () => {
  const { isExpanded, toggleExpand } = useNavbar();

  const { theme, saveTheme } = useStorageProvider();
  const { openModal, closeModal } = useModalProvider();
  const { changeTheme } = useThemeProvider();

  const handleModalCloseClick = () => {
    closeModal();
  };

  const handleThemeTileClick = (theme: Theme) => {
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

  const menu = [
    {
      name: 'Tasks',
      icon: <ListChecks />,
      url: '/',
      color: 'var(--navbar-settings-button-bg-color)',
    },
    {
      name: 'Completed',
      icon: <CheckSquare />,
      url: '/completed',
      color: 'var(--task-item-done-button-bg-color)',
    },
    {
      name: 'Deleted',
      icon: <XCircle />,
      url: '/deleted',
      color: 'var(--task-item-delete-button-bg-color)',
    },
  ];

  return (
    <>
      <MobileNavbar>
        <MobileNavbarMenuButton onClick={toggleExpand} icon={<Menu />} />
        <MobileNavbarTitle text="ToDo List" />
        <MobileNavbarEmptySpace />
      </MobileNavbar>
      <MobileNavbarContainer visible={isExpanded}>
        <MobileNavbarContent>
          <MobileNavbarTitleAndButton>
            <MobileNavbarEmptySpace />
            <MobileNavbarTitle text="Menu" />
            <MobileNavbarMenuButton onClick={toggleExpand} icon={<X />} />
          </MobileNavbarTitleAndButton>
          <MobileNavbarList>
            {menu.map((item, index) => (
              <MobileNavbarLink
                key={index}
                url={item.url}
                text={item.name}
                icon={item.icon}
                color={item.color}
                expanded={isExpanded}
              />
            ))}
          </MobileNavbarList>
          <MobileNavbarButton
            icon={<Settings />}
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
            icon={isExpanded ? <X /> : <Menu />}
          />
        </DesktopNavbarTitleAndButton>
        <NavbarDivider />
        <DesktopNavbarList>
          {menu.map((item, index) => (
            <DesktopNavbarLink
              key={index}
              url={item.url}
              text={item.name}
              icon={item.icon}
              color={item.color}
              expanded={isExpanded}
            />
          ))}
        </DesktopNavbarList>
        <NavbarDivider />
        <DesktopNavbarButton
          icon={<Settings />}
          name="Settings"
          expanded={isExpanded}
          onClick={handleOpenSettingsModalClick}
        />
      </DesktopNavbar>
    </>
  );
};
