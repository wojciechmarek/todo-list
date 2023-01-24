import { ImageTileProps } from './image-tile.interface';
import { ImageTileContainer } from './image-tile.styled';

export const ImageTile = ({ text, handleTileClick }: ImageTileProps) => {
  return (
    <ImageTileContainer onClick={handleTileClick}>{text}</ImageTileContainer>
  );
};
