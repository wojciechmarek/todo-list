import {
  NavbarContainer,
  NavbarItem,
  NavbarItemList,
  NavbarMenuButton,
  NavbarDivider,
  NavbarTitle,
  NavbarTitleAndMenuButton,
} from './navbar.styled';

export const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarTitleAndMenuButton>
        <NavbarTitle>Navbar</NavbarTitle>
        <NavbarMenuButton />
      </NavbarTitleAndMenuButton>
      <NavbarDivider />
      <NavbarItemList>
        <NavbarItem></NavbarItem>
      </NavbarItemList>
    </NavbarContainer>
  );
};
