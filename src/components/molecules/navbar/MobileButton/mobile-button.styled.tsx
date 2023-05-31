import styled from '@emotion/styled';
import { Icon, Text } from '../../../atoms';

export const MobileNavbarButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0.75rem;
  background-color: var(--navbar-settings-button-bg-color);
  width: calc(100% - 1.5rem);
  justify-content: flex-start;
  transition: filter 0.3s ease-in-out;
  border: var(--standard-border);
  border-radius: var(--standard-border-radius);
  box-shadow: var(--button-box-shadow);

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const MobileNavbarButtonIcon = styled(Icon)`
  color: var(--button-font-color);
  height: 2.5em;
  width: 2.5em;
`;

export const MobileNavbarButtonText = styled(Text)<{ expanded: boolean }>`
  font-weight: 600;
  color: var(--button-font-color);
  display: ${(props) => (props.expanded ? 'block' : 'none')};
`;
