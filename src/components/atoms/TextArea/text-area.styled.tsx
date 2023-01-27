import styled from '@emotion/styled';

export const TextAreaStyle = styled.textarea`
  border: 1px solid var(--search-input-border-and-icon-bg-color);
  background-color: var(--search-input-bg-color);
  color: var(--text-font-color);
  font-weight: 800;
  padding-left: 1em;
  padding-top: 0.5em;
  border-radius: var(--standard-border-radius);
  transition: filter 0.3s ease-in-out;

  &::placeholder {
    color: var(--text-font-color);
    font-weight: 600;
    opacity: 0.4;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
