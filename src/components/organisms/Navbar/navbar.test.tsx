import { configure, render } from '@testing-library/react';
import { Navbar } from './navbar';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import {
  ModalProvider,
  StorageProvider,
  ThemeProvider,
} from '../../../providers';
import TestRenderer from 'react-test-renderer';

describe('Navbar', () => {
  beforeEach(() => {
    configure({ throwSuggestions: true });
  });

  it('should render', () => {
    const { baseElement } = render(
      <ThemeProvider>
        <ModalProvider>
          <StorageProvider>
            <MemoryRouter>
              <Navbar />
            </MemoryRouter>
          </StorageProvider>
        </ModalProvider>
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should match the snapshot', () => {
    const tree = TestRenderer.create(
      <ThemeProvider>
        <ModalProvider>
          <StorageProvider>
            <MemoryRouter>
              <Navbar />
            </MemoryRouter>
          </StorageProvider>
        </ModalProvider>
      </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
