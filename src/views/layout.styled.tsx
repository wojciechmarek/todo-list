import styled from '@emotion/styled';
import mySvg from '../assets/backgrounds/neobruthalism.svg';

export const LayoutStyle = styled.div`
  height: 100vh;
  width: 100%;
  flex-direction: column;

  display: flex;

  //background-color: var(--background-color);
  background: var(--background);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
