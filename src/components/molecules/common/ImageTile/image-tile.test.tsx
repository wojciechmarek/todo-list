import { configure, render } from '@testing-library/react';
import { ImageTileProps } from './image-tile.interface';
import { ImageTile } from './image-tile';

describe('ImageTile', () => {
  let imageTileProps: ImageTileProps;

  beforeEach(() => {
    configure({ throwSuggestions: true });

    imageTileProps = {
      src: 'https://via.placeholder.com/150',
      text: 'text',
      isActive: false,
      alt: 'alt',
      handleThemeClick: jest.fn(),
    };
  });

  it('should render', () => {
    const { baseElement } = render(<ImageTile {...imageTileProps} />);
    expect(baseElement).toBeTruthy();
  });
});
