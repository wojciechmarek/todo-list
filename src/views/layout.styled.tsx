import styled from '@emotion/styled';

export const LayoutStyle = styled.div`
  height: 100vh;
  width: 100%;
  flex-direction: column;

  display: flex;

  background-color: var(--background-color);

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
