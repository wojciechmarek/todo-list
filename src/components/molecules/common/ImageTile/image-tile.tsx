import { ImageTileProps } from './image-tile.interface';
import { ImageTileContainer } from './image-tile.styled';

export const ImageTile = ({
  text,
  isActive,
  handleThemeClick,
}: ImageTileProps) => {
  return (
    <ImageTileContainer isActive={isActive} onClick={handleThemeClick}>
      {text}
    </ImageTileContainer>
  );
};
