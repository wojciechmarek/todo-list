import { ImageTileProps } from './image-tile.interface';
import { ImageTileContainer } from './image-tile.styled';

export const ImageTile = ({ text, handleThemeClick }: ImageTileProps) => {
  return (
    <ImageTileContainer onClick={handleThemeClick}>{text}</ImageTileContainer>
  );
};
