import { configure, render } from '@testing-library/react';
import { Modal } from './modal';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { ModalProvider } from '../../../providers';

describe('Modal', () => {
  beforeEach(() => {
    configure({ throwSuggestions: true });
  });

  it('should render', () => {
    const { baseElement } = render(
      <ModalProvider>
        <Modal />
      </ModalProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
