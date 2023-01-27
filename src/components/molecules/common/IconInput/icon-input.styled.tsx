import styled from '@emotion/styled';
import { Icon } from '../../../atoms';
import { Input } from '../../../atoms/Input';

export const IconInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: none;
  height: 3em;
`;

export const InputStyle = styled(Input)`
  height: 100%;
  width: 100%;
  border: 1px solid var(--search-input-border-and-icon-bg-color);
  background-color: var(--search-input-bg-color);
  color: var(--text-font-color);
  font-weight: 800;
  padding-left: 1em;
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

export const IconStyle = styled(Icon)`
  position: absolute;
  right: 0;
  height: 100%;
  width: 3em;
  color: var(--search-magnifier-color);
  background-color: var(--search-input-border-and-icon-bg-color);
  border-radius: 0 var(--standard-border-radius) var(--standard-border-radius) 0;
  box-sizing: border-box;
  padding: 0.25em;
`;
