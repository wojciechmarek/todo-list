import styled from '@emotion/styled';
import { Icon } from '../../../atoms';
import { Input } from '../../../atoms/Input';

export const IconInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: var(--standard-border-radius);

  border: none;
  height: 3em;
`;

export const InputStyle = styled(Input)`
  height: 100%;
  width: 100%;
  padding-right: 4em;
  box-shadow: var(--button-box-shadow);
`;

export const IconStyle = styled(Icon)`
  position: absolute;
  right: 0.5em;
  height: 100%;
  width: 3em;
  border-radius: 0 var(--standard-border-radius);
  box-sizing: border-box;
  padding: 0.25em;

  svg {
    stroke: var(--search-magnifier-color);
  }
`;
