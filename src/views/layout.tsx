import { MainContent, Navbar } from '../components';
import { Modal } from '../components/organisms/Modal/modal';
import { useThemeProvider } from '../providers';
import { LayoutStyle } from './layout.styled';

export const Layout = () => {
  const { theme } = useThemeProvider();

  return (
    <LayoutStyle data-theme={theme}>
      <Modal />
      <Navbar />
      <MainContent />
    </LayoutStyle>
  );
};
