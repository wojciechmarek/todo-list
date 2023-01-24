export interface ModalSettingsContentProps {
  handleTileClick: (tile: TileType) => void;
}

export type TileType =
  | 'modern-flat'
  | 'hand-draw'
  | 'glassmorphism'
  | 'bruthalism'
  | 'claymorphism'
  | 'cyber-punk';
