import styled from '@emotion/styled';
import { Icon, Text } from '../../../atoms';

export const CommonLinkContainer = styled.li<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  width: 100%;
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

export const CommonLinkStyle = styled.a`
  display: flex;
  align-items: center;
  justify-content: start;
  text-decoration: none;
  width: 100%;
`;

export const CommonLinkIcon = styled(Icon)`
  color: var(--button-font-color);
  height: 2.5em;
  width: 2.5em;
`;

export const CommonLinkText = styled(Text)<{ expanded: boolean }>`
  font-weight: 600;
  color: var(--button-font-color);
  display: ${(props) => (props.expanded ? 'block' : 'none')};
`;
