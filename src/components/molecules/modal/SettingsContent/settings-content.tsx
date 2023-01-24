import { ImageTile } from '../../../atoms';
import { ModalSettingsContentProps } from './settings-content.interface';
import { SettingsContainer } from './settings-content.styled';

export const ModalSettingsContent = ({
  handleTileClick,
}: ModalSettingsContentProps) => {
  return (
    <SettingsContainer>
      <ImageTile
        text="Modern flat"
        handleTileClick={() => handleTileClick('modern-flat')}
      />
      <ImageTile
        text="Hand draw"
        handleTileClick={() => handleTileClick('hand-draw')}
      />
      <ImageTile
        text="Glassmorphism"
        handleTileClick={() => handleTileClick('glassmorphism')}
      />
      <ImageTile
        text="Bruthalism"
        handleTileClick={() => handleTileClick('bruthalism')}
      />
      <ImageTile
        text="Claymorphism"
        handleTileClick={() => handleTileClick('claymorphism')}
      />
      <ImageTile
        text="Cyber punk"
        handleTileClick={() => handleTileClick('cyber-punk')}
      />
    </SettingsContainer>
  );
};
