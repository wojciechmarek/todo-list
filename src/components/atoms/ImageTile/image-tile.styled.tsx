import styled from '@emotion/styled';

export const ImageTileContainer = styled.div`
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

  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: brightness(0.6);
  }
`;
