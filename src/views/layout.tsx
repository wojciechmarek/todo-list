import { MainContent, Navbar } from '../components';
import { LayoutStyle } from './layout.styled';

export const Layout = () => {
  return (
    <LayoutStyle data-theme="flat-design-dark">
      <Navbar />
      <MainContent />
    </LayoutStyle>
  );
};
