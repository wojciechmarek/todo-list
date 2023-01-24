import styled from '@emotion/styled';

export const ImageTileContainer = styled.div<{ isActive: boolean }>`
  margin: 0.75em;
  height: 5em;
  width: 10em;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  border-radius: 0.5em;
  color: var(--font-color);
  font-weight: 800;
  cursor: pointer;
  border: var(--standard-border);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--modal-box-shadow);

  transition: filter 0.3s ease-in-out;

  filter: ${({ isActive }) => (isActive ? 'brightness(0.8)' : 'none')};

  &:hover {
    filter: brightness(0.75);
  }
`;
