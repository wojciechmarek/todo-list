import { MainContent, Navbar } from '../components';
import { Modal } from '../components/organisms/Modal/modal';
import { LayoutStyle } from './layout.styled';

export const Layout = () => {
  return (
    <LayoutStyle data-theme="flat-design-dark">
      <Modal />
      <Navbar />
      <MainContent />
    </LayoutStyle>
  );
};
