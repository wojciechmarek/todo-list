import { configure, render } from '@testing-library/react';
import { MainContent } from './main-content';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import {
  ModalProvider,
  StorageProvider,
  ThemeProvider,
} from '../../../providers';

describe('MainContent', () => {
  beforeEach(() => {
    configure({ throwSuggestions: true });
  });

  it('should render', () => {
    const { baseElement } = render(
      <ThemeProvider>
        <ModalProvider>
          <StorageProvider>
            <MemoryRouter>
              <MainContent />
            </MemoryRouter>
          </StorageProvider>
        </ModalProvider>
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
