import styled from '@emotion/styled';
import { Icon, Text } from '../../../atoms';

export const DesktopNavbarButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0.75rem;
  background-color: var(--primary-button-color);
  border-radius: 0.5rem;
  width: calc(100% - 1.5rem);
  justify-content: flex-start;
  transition: filter 0.3s ease-in-out;
  border: var(--standard-border);
  border-radius: var(--standard-border-radius);
  cursor: pointer;
  box-shadow: var(--container-box-shadow);

  &:hover {
    filter: brightness(0.9);
  }
`;

export const DesktopNavbarButtonIcon = styled(Icon)`
  color: var(--font-color);
  height: 2.5em;
  width: 2.5em;
`;

export const DesktopNavbarButtonText = styled(Text)<{ expanded: boolean }>`
  font-weight: 600;
  color: var(--font-color);
  display: ${(props) => (props.expanded ? 'block' : 'none')};
`;
